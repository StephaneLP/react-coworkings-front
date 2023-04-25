import Header from "../../components/layout/Header"
import { Link, useNavigate, useParams } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()


        const username = event.target.username.value
        const password = event.target.password.value

        fetch("http://localhost:3001/api/user/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
        .then((res) => {
            return res.json()          
        })
        .then((res) => {
            const jwt = res.token
            const name = res.el.username
            const id = res.el.id
            localStorage.setItem("jwt",jwt)
            localStorage.setItem("name",name)
            localStorage.setItem("id",id)
            navigate("/profile")
        })
    }
    
    return (
        <>
            <Header />
            <main>
                <section className="container">
                    <h1>Se connecter</h1>
                    <div className="coworkings">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>
                                    Username
                                    <input type="text" name="username"></input>
                                </label>                                
                            </div>
                            <div>
                                <label>
                                    Password
                                    <input type="text" name="password"></input>
                                </label>                                
                            </div>
                            <div>
                                <button className="button" type="submit">Se loguer</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>     
        </>
    )
}

export default Login