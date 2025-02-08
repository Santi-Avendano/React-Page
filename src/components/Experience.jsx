import { useState } from "react"

function Experience () {
    
    const [company, setCompany] = useState('');
    const [rol, setRol] = useState('');
    const [text, setText] = useState('');
    const [experienceList, setExperienceList] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page refresh

        const newEntry = {
            id: Date.now(), // Unique ID for tracking
            company,
            rol,
            text,
        };

        
        // Add the new entry to the list
        setExperienceList([...experienceList, newEntry]);

        // Clear the form...
        setCompany("");
        setRol("");
        setText("");
    };

    return (
        <div class='m-5 border-2 rounded-2xl shadow-gray-400 p-3 hover:bg-gray-500'>
        <h2>Experience</h2>
        
        <form onSubmit={handleSubmit}>
            <div>
                <label>Company: </label>
                <input onChange={(e) => setCompany(e.target.value)} value={company} />
            </div>
            <div>
                <label>Rol: </label>
                <input class='bg-white' onChange={(e) => setRol(e.target.value)} value={rol} />
            </div>
            <div className="addInfo">
                <label>Additional information: </label>
                <textarea value={text} onChange={(e) => setText(e.target.value)} />
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
        </div>
    )
}

export default Experience