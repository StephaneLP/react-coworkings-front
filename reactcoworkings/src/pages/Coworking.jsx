import Header from "../components/layout/Header"
import { useEffect, useState } from "react"

const Coworking = () => {
    const[listCoworkings, setListCoworkings] = useState([])
    const[sort, setSort] = useState("asc")
    // let sort = "asc"

    const getCoworkings = (sort) => {
        fetch("http://localhost:3001/api/coworking?sort=" + sort)
            .then((res) => {
                return res.json()          
            })
            .then((res) => {
                setListCoworkings(res.data)
            })
    }
    
    useEffect(() => {
        getCoworkings(sort)
    },[sort])    

    const handleClick = (event) => {
        // getCoworkings(event.target.value)
        setSort(event.target.value)
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
                                    <span>Tri par nom : </span>
                                    <input type="radio" name="tri" value="asc" onChange={handleClick} checked={sort==="asc"} />
                                    <label>Croissant</label>
                                    <input type="radio" name="tri" value="desc" onChange={handleClick} checked={sort==="desc"} />
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