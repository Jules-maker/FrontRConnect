import { useLoaderData } from "react-router-dom";

const HostPage = () => {
    const { id } = useLoaderData() as { id: number };
    return (
        <div>
        <h1>Host</h1>
        {id && <p>{id} </p>}
        </div>
    );
}

export default HostPage;