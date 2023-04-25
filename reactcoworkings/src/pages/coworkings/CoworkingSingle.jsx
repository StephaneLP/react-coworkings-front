import Header from "../../components/layout/Header"
import ModalDelete from "../../components/common/ModalConfirm"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

const CoworkingSingle = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const[singleCoworking, setSingleCoworking] = useState(null)
    const[displayModalDelete, setDisplayModalDelete] = useState(false)

    useEffect(() => {
        fetch("http://localhost:3001/api/coworking/" + id)
            .then((res) => {
                return res.json()          
            })
            .then((res) => {
                setSingleCoworking(res.data)
            })
    },[])

    const handleShowModalClick = (() => {
        setDisplayModalDelete(true)
    })

    const libelle = "Etes-vous sûr de vouloir supprimer le Coworking ?"
    const token = localStorage.getItem("jwt")
   
    const handleCancelledClick = (isValidated) => {
        if (isValidated) {
            fetch("http://localhost:3001/api/coworking/" + id,{
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                return res.json()          
            })
            .then((res) => {
                console.log(res)
                navigate("/coworking")
            })
        } else {
            setDisplayModalDelete(false)

        }
    }

    return (
        <>
            <Header />
            {displayModalDelete && <ModalDelete callFunction={handleCancelledClick} libelle={libelle} />}
            <main>
                <section className="container"> 
                    <h1>Fiche Coworking</h1>
                    {singleCoworking !== null &&
                        (
                            <section className="coworkings d-flex flex-row" key={singleCoworking.id}>
                                <div className="div-infos d-flex flex-column align-items-center">
                                    <h2>{singleCoworking.name}</h2>
                                    <div className="d-flex flex-row div-infos-details" style={{marginBottom: 20 + "px"}}>
                                        <div>
                                            <p><span className="sous-titre">Superficie</span> : {singleCoworking.superficy}</p>
                                            <p>
                                                <span className="sous-titre">Prix</span> :<br />
                                                Horaire : {singleCoworking.price.hour}<br />
                                                Journalier : {singleCoworking.price.day}<br />
                                                Mensuel : {singleCoworking.price.month}
                                            </p>
                                        </div>
                                        <div>
                                            <p><span className="sous-titre">Nombre de places</span> : {singleCoworking.capacity}</p>
                                            <p>
                                                <span className="sous-titre">Adresse</span> :<br></br>
                                                {singleCoworking.address.number} {singleCoworking.address.street}<br></br>
                                                {singleCoworking.address.postCode} {singleCoworking.address.city}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row justify-content-center">
                                        <Link className="btn-logo" to={"/update-coworking/" + singleCoworking.id} href="#"><img src="/img/pencil3.png" /></Link>
                                        <Link className="btn-logo" onClick={handleShowModalClick}><img src="/img/garbage.png" /></Link>
                                    </div>
                                </div>
                                <div className="div-img">
                                    <div className="coworkings-img" style={{backgroundImage: `url(${singleCoworking.picture})`}}></div>
                                </div>
                            </section>
                        )
                    }
                    <div className="btn-retour">
                        <Link className="button" to={"/coworking"} href="#">Retour</Link>                        
                    </div>
                </section>
            </main>





            
        </>
    )
}

export default CoworkingSingle