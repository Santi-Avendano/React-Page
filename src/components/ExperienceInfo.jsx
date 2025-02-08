function ExperienceInfo ({company, rol, text, onDelete}) {
    return (
        <div>
            <div className='container'>
                <h3>Company: <p>{company}</p></h3>
                <h3>Rol: <p>{rol}</p></h3>
                <h3>Description: <p>{text}</p></h3>

                <button
                    onClick={onDelete} 
                    class="bg-red-400 hover:bg-red-500 
                        text-white font-bold 
                        py-2 px-2 border-b-4 
                        border-red-700 hover:border-red-500 rounded w-18"
                >Delete</button>
            </div>
        </div>
    )
}


export default ExperienceInfo