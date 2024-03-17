import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAIResults, addCompanyToIdeasThunk } from "../../store"; // Adjust the import paths as necessary

const CompanyImprovements = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const company = useSelector((state) =>
    state.company.find((c) => c.id === Number(id))
  );
  const [aiIdeas, setAiIdeas] = useState([]);

  console.log(aiIdeas);

  useEffect(() => {
    if (company && company.companyName && company.description) {
      dispatch(
        fetchAIResults({
          companyName: company.companyName,
          description: company.description,
          budget: company.budget,
          goal: company.goal,
        })
      )
        .then((results) => {
          setAiIdeas(results); // Now directly setting the state with the fetched AI ideas
        })
        .catch((error) =>
          console.error("Failed to fetch or set AI results:", error)
        );
    }
  }, [dispatch, company]);

  const handleRegenerateIdeas = () => {
    if (company) {
      dispatch(
        fetchAIResults({
          companyName: company.companyName,
          description: company.description,
          budget: company.budget,
          goal: company.goal,
        })
      ).then(setAiIdeas); // Refresh AI ideas
      console.log("Regenerating AI ideas with:", company);
    }
  };

  const handleSubmitIdeas = () => {
    if (company && aiIdeas.length > 0) {
      dispatch(addCompanyToIdeasThunk(company.id, aiIdeas)); // Update the company's ideas with AI-generated ones
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
      <div className="aiContainer">
        {/* Display fetched AI ideas */}
        {aiIdeas.length > 0 ? (
          aiIdeas.map((idea, index) => (
            <p key={index}>
              {idea.content} (Status: {idea.status})
            </p>
          ))
        ) : (
          <p className="text-gray-600">
            Loading or no AI-generated ideas yet...
          </p>
        )}

        <button onClick={handleRegenerateIdeas} style={{ margin: "10px" }}>
          Regenerate Ideas
        </button>
        <button onClick={handleSubmitIdeas} style={{ margin: "10px" }}>
          Submit AI Ideas to Company
        </button>
      </div>
    </div>
  );
};

export default CompanyImprovements;
