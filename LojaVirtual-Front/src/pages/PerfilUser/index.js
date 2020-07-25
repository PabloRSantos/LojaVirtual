import React, {useEffect, useState} from "react"
import api from "../../services/api"
import {Link} from "react-router-dom"
import "./style.css"
import Header from "../../components/header"
import {useAuth} from "../../contexts/auth"

const Perfil = () => {
    const [user, setUser] = useState("")
    const {SignOut} = useAuth()

    useEffect(() => {
        api.get(`user/profile`)
        .then(response => {
            console.log(response.data)
            const { nome } = response.data.user[0]
            setUser(nome)
        })
    })

    function handleQuit(){
       SignOut()
    }
    
    
    return (
        <>
        <main id="PerfilUser">
            <Header />
            <div id="infosPerfil">
                <section id="user"> <h2>Olá, {user}, o que deseja fazer?</h2></section>
               <ul id="navUser">
                    <Link to="/user/dados" className="link">Meu dados</Link>
                    <Link to="/user/compras" className="link">Minhas compras</Link>
                    <Link to="/user/produtos" className="link">Meus produtos</Link>
                    <Link to="/user/chat" className="link">Chat</Link>
                    <Link to="/" onClick={handleQuit} className="link">Sair</Link>
                </ul> 
            </div>
        </main>
        </>
    )
}

export default Perfil
