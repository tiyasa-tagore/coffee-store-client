import { useLoaderData } from "react-router-dom";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id, name, quantity, supplier, taste,category , details ,photo} =coffee;
    return (
        <div>
            <h2>update coffe</h2>
            <form>

            </form>
        </div>
    );
};

export default UpdateCoffee;