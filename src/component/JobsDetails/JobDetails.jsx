import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const job = jobs.find(job=> job.id = id);
    console.log(job)
    return (
        <div>
            <h3>Job Details</h3>
            <div className="grid grid-cols-4 gap-4">
                <div className="grid col-span-3 bg-slate-300 p-4">
                    <h1>Job Description:{job.job_description} </h1>
                </div>
                <div className="grid col-span-1 bg-zinc-400">
                    <p>Hello world-2</p>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;