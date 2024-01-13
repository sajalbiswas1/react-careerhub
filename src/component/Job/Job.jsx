import { CiLocationOn, CiDollar } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    console.log(job)
    const { id,logo, job_title,company_name, remote_or_onsite,location,job_type,salary} = job;

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl m-auto">
                <figure><img className="pt-4" src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p className="font-semibold">{company_name}</p>
                    <div>
                    <button className=" text-[#7E90FE] border border-[#7E90FE] rounded px-4 py-2 font-medium mr-2">{remote_or_onsite}</button>
                    <button className="text-[#7E90FE] border border-[#7E90FE] rounded px-4 py-2 font-medium">{job_type}</button>
                    </div>
                    <div className="flex my-2">
                        <p className="font-bold opacity-70 flex gap-3"><CiLocationOn className='h-4 w-4'></CiLocationOn>{location}</p>
                        <p className="font-bold opacity-70 flex gap-3"><CiDollar className='h-4 w-4'></CiDollar>{salary}</p>
                    </div>
                    <div className="card-actions">
                        <Link to={`/job/${id}`}><button className="btn bg-gradient-to-r text-white from-[#7E90FE] to-[#9873FF]">View All</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;