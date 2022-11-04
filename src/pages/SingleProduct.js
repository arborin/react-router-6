import { Link, useParams, useNavigate } from "react-router-dom";

import products from "../data";

const SingleProduct = () => {
    console.log(useParams());
    console.log(products);

    const navigate = useNavigate();
    console.log(navigate);

    const { productId } = useParams();

    const product = products.find((product) => product.id === productId);
    console.log(product);
    const { image, name } = product;

    const redirect = () => {
        navigate("/");
    };
    return (
        <section className="section product">
            <img src={image} alt={name} />
            <h5>{name}</h5>
            <h2>single product {productId}</h2>
            <button onClick={redirect} className="btn">
                GO HOME
            </button>
        </section>
    );
};

export default SingleProduct;
