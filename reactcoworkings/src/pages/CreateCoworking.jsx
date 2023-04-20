import Header from "../components/layout/Header"
import { useEffect, useState } from "react"

const CreateCoworking = () => {
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
                }
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
                <div className="create">
                    {msg ?
                        (<div className="reponse">{msg}</div>)
                        :
                        (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label>
                                        <span className="sous-titre-create">Nom</span>
                                        <input type="text" name="name" />
                                    </label>                            
                                </div>
                                <div>
                                    <label>
                                        <span className="sous-titre-create">Capacité</span>
                                        <input type="number" name="capacity" />
                                    </label>                            
                                </div>
                                <div>
                                    <label>
                                        <span className="sous-titre-create">Superficie</span>
                                        <input type="number" name="superficy" />
                                    </label>                            
                                </div>
                                <div>
                                    <span className="sous-titre-create">Adresse</span><br />
                                    <label>
                                        N°
                                        <input type="text" name="number" />
                                    </label>
                                    <label>
                                        Voie
                                        <input type="text" name="street" />
                                    </label>                            
                                    <br />
                                    <label>
                                        CP
                                        <input type="number" name="postCode" />
                                    </label>
                                    <label>
                                        Ville
                                        <input type="text" name="city" />
                                    </label>
                                </div>
                                <div>
                                    <span className="sous-titre-create">Prix</span><br />
                                    <label>
                                        Horaire
                                        <input type="number" name="hour" />
                                    </label>
                                    <br />
                                    <label>
                                        Journalier
                                        <input type="number" name="day" />
                                    </label>                            
                                    <br />
                                    <label>
                                        Mensuel
                                        <input type="number" name="month" />
                                    </label>
                                </div>
                                <div>
                                    <input type="submit" value="Créer" />
                                </div>
                            </form>
                        )
                    }

                </div>
            </section>
            </main>
        </>
    )
}

export default CreateCoworking