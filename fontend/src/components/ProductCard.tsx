import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";

interface Props {
    product: Product;
}
const ProductCard = (props: Props) => {
    return (
        <Container>
            <div >
                <div>
                    abfewweoewok
                </div>
                <Image
                    src={props.product.image}
                    width={400}
                    height={300}
                    alt={props.product.name}
                />
                <div className="p-2">
                    <h6 className="text-center text-slate-600">
                        {props.product.name}
                    </h6>
                    <p className="text-center text-slate-600">
                        {props.product.price} $
                    </p>
                    <p className="text-center text-slate-600">
                        {props.product.description}
                    </p>
                </div>

            </div>
        </Container>

    );
};

export default ProductCard;