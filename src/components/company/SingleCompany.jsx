import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleCompany, fetchUserCompanies } from "../../store"; // Adjust the import path based on your project structure
import CompanyImprovements from "../Ai-feature/CompanyImprovement"; // Adjust the import path as needed

const CompanyIdeas = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [showImprovements, setShowImprovements] = useState(false);

  // Assuming state.company holds the fetched companies, including their ideas
  const company = useSelector((state) =>
    state.company.find((c) => c.id === Number(id))
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleCompany(id));
      dispatch(fetchUserCompanies());
    }
  }, [dispatch, id]);

  const handleGenerateImprovements = () => {
    setShowImprovements(true);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Company Ideas</h2>
      {company && company.ideas && company.ideas.length > 0 ? (
        <ul>
          {company.ideas.map((idea, index) => (
            <li key={index}>
              {idea.content} - Status: {idea.status}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No ideas found for this company.</p>
      )}

      <button
        onClick={handleGenerateImprovements}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
        Generate Improvements
      </button>

      {showImprovements && (
        <div className="mt-6">
          <CompanyImprovements company={company} />
        </div>
      )}
    </div>
  );
};

export default CompanyIdeas;
