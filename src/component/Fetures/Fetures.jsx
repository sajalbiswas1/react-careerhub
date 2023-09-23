import { useEffect, useState } from "react";
import Job from "../Job/Job";


const Fetures = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDatalenth] = useState(4)
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <h3 className="text-center text-5xl font-bold">Featured Jobs</h3>
            <p  className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-5 my-5">
                {
                    jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`text-center ${dataLength === jobs.length && "hidden"}`}>
            <button onClick={()=>setDatalenth(jobs.length)} className="btn bg-gradient-to-r text-white from-[#7E90FE] to-[#9873FF]">See All Jobs</button>
            </div>
        </div>
    );
};

export default Fetures;