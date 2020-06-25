import React, {useState, useEffect} from "react"
import api from "../../services/api"
import {Link} from "react-router-dom"


const Products = (props) => {
    const [prods, setProds] = useState([])

    useEffect(() => {
        api.get(`products?${props.query}`)
        .then(response => {
            setProds(response.data)
        })
        .catch(() => alert("Erro na conexao do servidor"))
    }, [props.query])

    return (
        <section>
        <h1>{props.titulo}</h1>
            <div className="cards">
               {prods.map(prod => (
                   <div id={prod.id} className="product">
                         <Link className="link" to={{pathname:`/product/${prod.id}`, state: {categoria:prod.categoria_id}}}>
                       <div className="imagem">
                           <img src={`http://localhost:3333/uploads/products/${prod.imagem}`}/>
                       </div>
                        <div className="preco">
                        <p>{`R$${prod.preco}`}</p> 
                        </div>
                        </Link>
                   </div>
               ))}
               </div>
               </section>

    )
}

export default Products