import { useEffect, useState } from "react";
import { getProducts } from "../../services/firebase/productServices";
import ProductList from "./ProductList";
import Loading from "../Loading/Loading";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

function ProdcutsMaintenance() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const navigate = useNavigate()    
    const {pathname} = useLocation()

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getProducts()
                setProducts(data)
                setLoading(false)
            } catch (error) {
                setError(error)
            }
        }
        getData()
        return setLoading(true)
    }, [])
    if (loading) return <Loading />
    if (error) return <h1>{error}</h1>
    return (
        <div className="continer-fluid d-flex flex-column " >
            {
                pathname.includes("new") ?
                <div className="container d-flex justify-content-end">
                        <Button variant="danger rounded-circle" onClick={()=>navigate('/product_maintenance')}>X</Button>
                    </div>
                    :
                    <div className="m-auto">
                        <Button variant="success px-5 my-5" onClick={() => navigate('new_product')}>Agregar productos</Button>
                    </div>
            }
            <Outlet />
            <div className="col-12 overflw-scroll">
                <h1>Lista de productos</h1>
                <ProductList products={products} />
            </div>


        </div>
    );
}

export default ProdcutsMaintenance;