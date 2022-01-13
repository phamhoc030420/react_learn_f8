import { useState } from "react";
function ToDoList() {

    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState(() => {
        const storage = JSON.parse(localStorage.getItem('jobs'));
        return storage;
    });
    const handlerSubmit = () => {
        if (job) {
            setJobs(prev => {
                const newJob = [...prev, job];
                const jsonJob = JSON.stringify(newJob);
                localStorage.setItem('jobs', jsonJob);
                return newJob;
            });
            setJob('')
        }
        else {
            alert("Rong")
        }
    }
    return (
        <>
            <input value={job} onChange={event => setJob(event.target.value)} /> <button onClick={handlerSubmit}>Add</button>
            <ul>
                {jobs.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}

            </ul>
        </>
    )
}
export default ToDoList;