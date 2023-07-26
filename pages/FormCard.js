import { useState } from "react";

const FormCard = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your problems Submitted. We will take actions on it');
    }
    return (
        <div className="mr-10">
            <form className="w-[50%] relative left-[50%] -top-96 bg-slate-200 rounded-md p-14 shadow-xl">
                <h1 className="font-sans font-bold text-3xl">Let's Connect</h1>
                <p className="m-3">Please fill the form</p>
                <div className="flex">
                    <input placeholder="Your Name" type="text" value={name} className="border-2 border-solid border-black m-4 p-4" onChange={e => setName(e.target.value)} />
                    <input placeholder="Your Email" type="email" value={email} className="border-2 border-solid border-black m-4 p-4" onChange={e => setEmail(e.target.value)} />
                </div>
                <input placeholder="Subject Line..." type="text" value={subject} className="w-[85%] relative right-4 m-6 p-7 border-2 border-solid border-black" onChange={e => setSubject(e.target.value)} />
                <textarea cols="30" rows="8" type="text" value={message} placeholder="How can we help?" className="w-[85%] mb-3 border-2 border-solid border-black relative left-2 pt-4 pl-6" onChange={e => setMessage(e.target.value)}></textarea>
                <button className=" bg-blue-950 p-2 text-white rounded relative left-1 shadow-lg" type="submit" onClick={handleSubmit}>Send Message</button>
            </form>
        </div>
    )
}

export default FormCard;
