// Import Firebase modules
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  updateDoc,
  orderBy,
} from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Authentication functions
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) throw new Error("Email and password are required.");
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithEmailAndPasswordUser = async (email, password) => {
  if (!email || !password) throw new Error("Email and password are required.");
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthUserStateChanged = (callback) => {
  onAuthStateChanged(auth, callback);
};

// Firestore functions
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalData = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { email, displayName } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user document", error.message);
    }
  }
  return getUserDocument(userAuth.uid);
};

export const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocumentRef = doc(db, "users", uid);
    const userSnapshot = await getDoc(userDocumentRef);
    return { uid, ...userSnapshot.data() };
  } catch (error) {
    console.error("Error fetching user", error.message);
  }
};

// Add more Firestore interactions as needed for your application
// e.g., CRUD operations for your companies and ideas collections

// Example: Fetch all documents from a collection
export const fetchAllDocumentsFromCollection = async (collectionName) => {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Note: Implement additional Firestore operations based on your application requirements
