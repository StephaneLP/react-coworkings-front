import Header from "../components/layout/Header"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Coworking = () => {
    const navigate = useNavigate()
    const[listCoworkings, setListCoworkings] = useState([])
    const[param, setParam] = useState({
        sort: "asc",
        search: "",
    })

    useEffect(() => {
        fetch("http://localhost:3001/api/coworking?sort=" + param.sort + "&search=" + param.search)
            .then((res) => {
                return res.json()          
            })
            .then((res) => {
                setListCoworkings(res.data)
            })
    },[param])    

    const handleSortClick = (event) => {
        let newParam = {...param}
        newParam.sort = event.target.value
        setParam(newParam)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let newParam = {...param}
        newParam.search = event.target.name.value.trim()
        setParam(newParam)
    }

    const handleDeleteClick = ((id, name) => {
        document.querySelector(".validBox").style.visibility = "visible"
        document.querySelector(".validBoxTitle").textContent = name
        
    
        // fetch("http://localhost:3001/api/coworking/" + id,{
        //     method: "DELETE",
        // })
        // .then((res) => {
        //     return res.json()          
        // })
        // .then((res) => {
        //     console.log("Coworking supprimé !")
        //     navigate(0)
        // })
    })

    const handleCancelledClick = () => {
        document.querySelector(".validBox").style.visibility = "hidden"
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
                                <div className="d-flex flex-row justify-content-between align-items-center">
                                    <div className="tri">Nombre de résultats : <span>{listCoworkings.length}</span></div>
                                    <div className="tri">
                                        <span>Tri par nom : </span>
                                        <input type="radio" name="tri" value="asc" onChange={handleSortClick} checked={param.sort==="asc"} />
                                        <label>Croissant</label>
                                        <input type="radio" name="tri" value="desc" onChange={handleSortClick} checked={param.sort==="desc"} />
                                        <label>Décroissant</label>   
                                    </div>
                                </div>
                                <div className="filtre">
                                    <form onSubmit={handleSubmit}>
                                        <label>
                                            Nom
                                            <input type="text" name="name" />
                                        </label>
                                        <input type="submit" value="Filtrer" />
                                    </form>
                                </div>

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
                                            <button onClick={() => handleDeleteClick(el.id, el.name)}>Supprimer le Coworking</button>
                                        </section>
                                    )
                                })}                            
                            </>
                        )
                    :
                        (<div>Chargement...</div>)
                    }
                </section>
                <div className="validBox">
                    <p>Etes-vous sûr de vouloir supprimer le Coworking</p>
                    <h2 className="validBoxTitle"></h2>
                    <button>Oui</button> <button onClick={handleCancelledClick}>Annuler</button>
                </div>
            </main>
        </>
    )
}

export default Coworking