import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-48">
            <h1 className="text-4xl  mb-5">Oops!!!</h1>
            <Link className="text-2xl bg-slate-200 px-2 rounded-lg" to="/">Go back home page</Link>
        </div>
    );
};

export default ErrorPage;