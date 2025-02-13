import EducationInfo from "./EducationInfo";
import { useState } from "react";
import '../styles/Education.css'


function Education() {
    const [schoolName, setSchoolName] = useState("");
    const [degree, setDegree] = useState("");
    const [text, setText] = useState("");
    const [educationList, setEducationList] = useState([]);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page refresh

        const newEntry = {
            id: Date.now(), // Unique ID for tracking
            schoolName,
            degree,
            text,
        };

        
        // Add the new entry to the list
        setEducationList([...educationList, newEntry]);

        // Clear the form...
        setSchoolName("");
        setDegree("");
        setText("");
    };

    const handleDelete = (id) => {
        setEducationList(educationList.filter((entry) => entry.id !== id))
    }

    return (
        <div className="container">
        <h2>Education</h2>
        
        <form onSubmit={handleSubmit}>
            <div>
                <label>School/College: </label>
                <input onChange={(e) => setSchoolName(e.target.value)} value={schoolName} />
            </div>
            <div>
                <label>Degree: </label>
                <input class='bg-white' onChange={(e) => setDegree(e.target.value)} value={degree} />
            </div>
            <div className="addInfo">
                <label>Additional information: </label>
                <textarea value={text} onChange={handleChange} />
            </div>
            <button
            type="submit"
            className="bg-green-400 hover:bg-green-500 
                        text-white font-bold 
                        py-2 px-2 border-b-4 
                        border-green-700 hover:border-green-500 rounded w-18"
            >
            Submit
            </button>
        </form>

        {/* Render EducationInfo components */}
        <div className="mt-4">
            {educationList.map((edu) => (
            <EducationInfo 
                key={edu.id} 
                school={edu.schoolName} 
                degree={edu.degree} 
                text={edu.text} 
                onDelete={() => handleDelete(edu.id)}/>
            ))}
        </div>
        </div>
    );
}

export default Education;
