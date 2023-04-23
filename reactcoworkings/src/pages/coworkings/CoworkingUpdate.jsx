import Header from "../../components/layout/Header"
import Loader from "../../components/common/Loader"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

const CoworkingUpdate = () => {
    const { id } = useParams()
    const[updateCoworking, setUpdateCoworking] = useState(null)
    const [msg, setMsg] = useState("")

    useEffect(() => {
        fetch("http://localhost:3001/api/coworking/" + id)
            .then((res) => {
                return res.json()          
            })
            .then((res) => {
                setUpdateCoworking(res.data)
            })
    },[])

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


        fetch("http://localhost:3001/api/coworking/" + id,{
            method: "PUT",
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
        })
    }

    return (
        <>
            <Header />        
            <main>
            <section className="container"> 
                <h1>Modifier un espace de Coworking</h1>
                {updateCoworking !== null ?
                    (
                        <form onSubmit={handleSubmit}>
                            <div className="create d-flex flex-row">
                                <div className="div-infos d-flex flex-column align-items-start">
                                    <div style={{marginBottom: 5 + "px"}}>
                                        <label>
                                            <span className="sous-titre-create">Nom</span>
                                            <input type="text" name="name" defaultValue={updateCoworking.name} />
                                        </label>                            
                                    </div>
                                    <div style={{marginBottom: 5 + "px"}}>
                                        <label>
                                            <span className="sous-titre-create">Capacité</span>
                                            <input type="number" name="capacity" defaultValue={updateCoworking.capacity} />
                                        </label>                            
                                    </div>
                                    <div style={{marginBottom: 5 + "px"}}>
                                        <label>
                                            <span className="sous-titre-create">Superficie</span>
                                            <input type="number" name="superficy" defaultValue={updateCoworking.superficy} />
                                        </label>                            
                                    </div>
                                    <div style={{marginBottom: 5 + "px"}}>
                                        <span className="sous-titre-create">Adresse</span><br />
                                        <label>
                                            <span className="sous-sous-titre-create">N°</span>
                                            <input type="text" name="number" defaultValue={updateCoworking.address.number} />
                                        </label><br />
                                        <label>
                                            <span className="sous-sous-titre-create">Voie</span>
                                            <input type="text" name="street" defaultValue={updateCoworking.address.street} />
                                        </label><br />                           
                                        <label>
                                            <span className="sous-sous-titre-create">CP</span>
                                            <input type="number" name="postCode" defaultValue={updateCoworking.address.postCode} />
                                        </label><br />
                                        <label>
                                            <span className="sous-sous-titre-create">Ville</span>
                                            <input type="text" name="city" defaultValue={updateCoworking.address.city} />
                                        </label>
                                    </div>
                                    <div style={{marginBottom: 5 + "px"}}>
                                        <span className="sous-titre-create">Prix</span><br />
                                        <label>
                                            <span className="sous-sous-titre-create">Horaire</span>
                                            <input type="number" name="hour" defaultValue={updateCoworking.price.hour} />
                                        </label><br />
                                        <label>
                                            <span className="sous-sous-titre-create">Journalier</span>
                                            <input type="number" name="day" defaultValue={updateCoworking.price.day} />
                                        </label><br />                            
                                        <label>
                                            <span className="sous-sous-titre-create">Mensuel</span>
                                            <input type="number" name="month" defaultValue={updateCoworking.price.month} />
                                        </label>
                                    </div>
                                </div>
                                <div className="div-img">
                                    <div style={{marginBottom: 5 + "px"}}>
                                        <label>
                                            Url image
                                            <input type="text" name="picture" defaultValue={updateCoworking.picture} style={{width: 600+"px"}}/>
                                        </label>                                            
                                    </div>                                     
                                    <div className="create-img" style={{backgroundImage: `url(${updateCoworking.picture})`}}></div>
                                </div>
                            </div>                            
                            <div style={{textAlign: "center"}}>
                                <input className="button" type="submit" value="Modifier" />
                                <Link className="button" to={"/single-coworking/" + updateCoworking.id} href="#">Annuler</Link>
                            </div>
                        </form>
                    )
                    :
                    (
                        <Loader />
                    )
                }
                {msg !=="" && <div>{msg}</div>}       
            </section>
            </main>
        </>
    )
}

export default CoworkingUpdate