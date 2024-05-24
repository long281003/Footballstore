import { useAppSelector } from "@/redux/store"
import { fetchProduct } from "@/services/productServices";
import Button from "@mui/material/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";



interface Props {
    product: Product;
}

const AddToCart = (props: Props) => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetchdata()
    }, [])
    const fetchdata = async () => {
        const responsive = await fetchProduct()
        if (responsive.data && responsive.data.EC === 0) {
            setProduct(responsive.data.DT)
        }
    }


    <div>
        <Button className='btn btn-dark' >Add to Cart</Button>
    </div>
}

export default AddToCart