function EducationInfo ({schoolName, degree, text, onDelete}) {
    return (
        <div class='flex bg-gray-600 rounded mx-4'>
            <h3>School/College: <p>{schoolName}</p></h3>
            <h3>Degree: <p>{degree}</p></h3>
            <h3>Description: <p>{text}</p></h3>

            <button
                onClick={onDelete} 
                class="bg-red-400 hover:bg-red-500 
                     text-white font-bold 
                     py-2 px-2 border-b-4 
                     border-red-700 hover:border-red-500 rounded w-18"
            >Delete</button>
        </div>
    )
}


export default EducationInfo