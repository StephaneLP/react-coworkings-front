import Header from "../components/layout/Header"
import { useEffect, useState } from "react"

const Coworking = () => {
    const[listCoworkings, setListCoworkings] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/api/coworking")
            .then((res) => {
                return res.json()          
            })
            .then((res) => {
                setListCoworkings(res.data)
            })
    },[])    

    const handleClick = (event) => {
        console.log("ok",event.target.value)
    }

    return (
        <>
            <Header />
            <main>
                <section className="container"> 
                    <h1>Liste des Coworkings</h1>
                    {listCoworkings.length !== 0 ?
                        (
                            <>
                                <p className="tri">
                                    <span>Tri : </span>
                                    <input type="radio" name="tri" value="asc" checked onChange={handleClick} />
                                    <label>Croissant</label>
                                    <input type="radio" name="tri" value="desc" onChange={handleClick} />
                                    <label>Décroissant</label>   
                                </p>
                                {listCoworkings.map((el) => {
                                    return (
                                        <section className="coworkings" key={el.id}>
                                            <h2>{el.name}</h2>
                                            <p><span className="sous-titre">Superficie</span> : {el.superficy}</p>
                                            <p><span className="sous-titre">Nombre de places</span> : {el.capacity}</p>
                                            <p>
                                                <span className="sous-titre">Adresse</span> :<br></br>
                                                {el.address.number} {el.address.street}<br></br>
                                                {el.address.postCode} {el.address.city}
                                            </p>
                                        </section>
                                    )
                                })}                            
                            </>
                        )
                    :
                        (<div>Chargement...</div>)
                    }
                </section>
            </main>
        </>
    )
}

export default Coworking