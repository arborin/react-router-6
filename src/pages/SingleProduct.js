import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
    console.log(useParams());

    console.log(products);
    const { productId } = useParams();

    const product = products.find((product) => product.id === productId);
    console.log(product);
    const { image, name } = product;

    return (
        <section className="section product">
            <img src={image} alt={name} />
            <h5>{name}</h5>
            <h2>single product {productId}</h2>
        </section>
    );
};

export default SingleProduct;
