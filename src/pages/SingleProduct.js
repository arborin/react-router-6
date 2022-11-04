import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
    console.log(useParams());
    const { productId } = useParams();
    return (
        <section className="section product">
            <h2>single product {productId}</h2>
        </section>
    );
};

export default SingleProduct;
