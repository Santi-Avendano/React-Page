import { useState } from "react";
import '../styles/Personal.css'


function Personal () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);


    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
    <div className='content'>
        <h2 class='font-bold'>Personal Information</h2>

        {submitted ? (
            <div class='flex flex-wrap space-x-8'>
                <h2>Name: {name}</h2>
                <h2>Email: {email}</h2>
                <h2>Phone: {phone}</h2>
                <button 
                    onClick={() => setSubmitted(false)}
                    class="bg-amber-400
                        hover:bg-amber-500 
                        text-white 
                        font-bold 
                        py-2 px-2 
                        border-b-4 border-amber-700 hover:border-amber-500 rounded
                        w-18"
                    >Edit</button>
            </div>
        )
        : (
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input
                class='mr-2'
                type="text"
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Your name..."
            />
            <label>Email: </label>
            <input
                class='mr-2' 
                type="email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Your email..."
            
            />
            <label>Phone Number: </label>
            <input
                class='mr-2'    
                type="text"
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                placeholder="Your phone number..."
            />
            <button type="submit" 
                class="bg-green-400
                hover:bg-green-500 
                text-white 
                font-bold py-2 
                px-2 border-b-4 border-green-700 hover:border-green-500 rounded
                w-18"
             >Submit</button>
        </form> 
        )
    }

    </div> 
    );
}  


export default Personal;