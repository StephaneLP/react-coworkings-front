import Header from "../../components/layout/Header"
import Loader from "../../components/common/Loader"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Coworking = () => {
    const navigate = useNavigate()
    const[listCoworkings, setListCoworkings] = useState([])
    const[param, setParam] = useState({
        sort: "asc",
        search: "",
    })

    const [requestStatus, setRequestStatus]  =  useState(null)

    useEffect(() => {
        setRequestStatus("waiting")
        fetch("http://localhost:3001/api/coworking?sort=" + param.sort + "&search=" + param.search)
            .then((res) => {
                return res.json()          
            })
            .then((res) => {
                console.log(res.status)
                if (res.status === 200) {
                    setRequestStatus("success")
                }
                setListCoworkings(res.data)
            }).catch(() => {

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

    const handleClick = () => {
        console.log("ok")
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
                                <div className="filtre d-flex flex-row justify-content-between">
                                    <form onSubmit={handleSubmit}>
                                        <label>
                                            Nom
                                            <input type="text" name="name" />
                                        </label>
                                        <input type="submit" value="Filtrer" />
                                    </form>
                                    <Link className="button" to={"/create-coworking"} href="#">Créer un Coworking</Link>
                                </div>

                                {listCoworkings.map((el) => {
                                    return (
                                        <section className="coworkings d-flex flex-row" key={el.id}>
                                            <div className="div-infos d-flex flex-column justify-content-center align-items-center">
                                                <h2>{el.name}</h2>
                                                <p>
                                                    {el.address.number} {el.address.street}<br></br>
                                                    {el.address.postCode} {el.address.city}
                                                </p>
                                                <Link className="button" to={"/single-coworking/" + el.id} href="#">Ouvrir la fiche</Link>
                                            </div>
                                            <div className="div-img">
                                                <div className="coworkings-img" style={{backgroundImage: `url(${el.picture})`}}></div>
                                            </div>
                                        </section>
                                    )
                                })}                            
                            </>
                        )
                    :
                        (
                            <Loader />
                        )
                    }
                </section>
            </main>
        </>
    )
}

export default Coworking