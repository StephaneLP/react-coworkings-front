import Header from "../../components/layout/Header"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const Profile = ()=> {
    const navigate = useNavigate()
    const[username,setUserName] = useState([])

    // const token = localStorage.getItem("jwt")
    // const name = localStorage.getItem("name")
    const id = localStorage.getItem("id")

    fetch("http://localhost:3001/api/user/"+id,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((res) => {
        return res.json()          
    })
    .then((res) => {
        console.log(id,res.data.username)
        setUserName(res.data.username)
    })

    const handleClick = () => {
        localStorage.clear()
        navigate("/")
    }

    return (
        <>
            <Header />
            <main>
                <section className="container">
                    <h1>Mon Profil</h1>
                    <div className="coworkings">
                        <div>
                            Nom : {username}
                        </div>
                        <button className="button" onClick={handleClick}>Se déconnecter</button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Profile