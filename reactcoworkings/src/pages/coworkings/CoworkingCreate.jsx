import Header from "../../components/layout/Header"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

const CoworkingCreate = () => {
    const [msg, setMsg] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        const name = event.target.name.value
        const capacity = event.target.capacity.value
        const superficy = event.target.superficy.value
        const address = {
            number: event.target.number.value,
            street: event.target.street.value,
            postCode: event.target.postCode.value,
            city: event.target.city.value,
        }
        const price = {
            hour: event.target.hour.value,
            day: event.target.day.value,
            month: event.target.month.value,
        }
        const picture = event.target.picture.value

        fetch("http://localhost:3001/api/coworking",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                superficy: superficy,
                capacity: capacity,
                address: {
                    number: address.number,
                    street: address.street,
                    postCode: address.postCode,
                    city: address.city,
                },
                price: {
                  hour: price.hour,
                  day: price.day,
                  month: price.month,
                },
                picture: picture,
            })
        })
        .then((res) => {
            return res.json()          
        })
        .then((res) => {
            setMsg(res.message)
            // console.log(res)
        })
    }

    return (
        <>
            <Header />
            <main>
            <section className="container"> 
                <h1>Créer un espace de Coworking</h1>
                {msg ?
                    (
                        <div className="reponse">{msg}</div>
                    )
                    :
                    (
                        <form onSubmit={handleSubmit}>
                            <div className="create d-flex flex-row">
                                <div className="div-infos d-flex flex-column align-items-start">
                                    <div style={{marginBottom: 5 + "px"}}>
                                        <label>
                                            <span className="sous-titre-create">Nom</span>
                                            <input type="text" name="name" />
                                        </label>                            
                                    </div>
                                    <div style={{marginBottom: 5 + "px"}}>
                                        <label>
                                            <span className="sous-titre-create">Capacité</span>
                                            <input type="number" name="capacity" />
                                        </label>                            
                                    </div>
                                    <div style={{marginBottom: 5 + "px"}}>
                                        <label>
                                            <span className="sous-titre-create">Superficie</span>
                                            <input type="number" name="superficy" />
                                        </label>                            
                                    </div>
                                    <div style={{marginBottom: 5 + "px"}}>
                                        <span className="sous-titre-create">Adresse</span><br />
                                        <label>
                                            <span className="sous-sous-titre-create">N°</span>
                                            <input type="text" name="number" />
                                        </label><br />
                                        <label>
                                            <span className="sous-sous-titre-create">Voie</span>
                                            <input type="text" name="street" />
                                        </label><br />                           
                                        <label>
                                            <span className="sous-sous-titre-create">CP</span>
                                            <input type="number" name="postCode" />
                                        </label><br />
                                        <label>
                                            <span className="sous-sous-titre-create">Ville</span>
                                            <input type="text" name="city" />
                                        </label>
                                    </div>
                                    <div style={{marginBottom: 5 + "px"}}>
                                        <span className="sous-titre-create">Prix</span><br />
                                        <label>
                                            <span className="sous-sous-titre-create">Horaire</span>
                                            <input type="number" name="hour" />
                                        </label><br />
                                        <label>
                                            <span className="sous-sous-titre-create">Journalier</span>
                                            <input type="number" name="day" />
                                        </label><br />                            
                                        <label>
                                            <span className="sous-sous-titre-create">Mensuel</span>
                                            <input type="number" name="month" />
                                        </label>
                                    </div>
                                </div>
                                <div className="div-img">
                                    <div style={{marginBottom: 5 + "px"}}>
                                        <label>
                                            Url image
                                            <input type="text" name="picture" defaultValue="https://www.workingplace.fr/content/uploads/2017/04/challenges-coworking.jpg" style={{width: 600+"px"}}/>
                                        </label>                                            
                                    </div>                                     
                                    <div className="create-img" style={{backgroundImage: `url(https://www.workingplace.fr/content/uploads/2017/04/challenges-coworking.jpg)`}}></div>
                                </div>
                            </div>                            
                            <div style={{textAlign: "center"}}>
                                <input className="button" type="submit" value="Créer" />
                                <Link className="button" to={"/coworking"} href="#">Annuler</Link>
                            </div>
                        </form>
                    )
                }               
            </section>
            </main>
        </>
    )
}

export default CoworkingCreate