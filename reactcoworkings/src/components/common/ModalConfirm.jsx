const ModalConfirm = (props) => {
    return (
        <div className="modalBox">
            <div className="validBox">
                <p>{props.libelle}</p>
                <h2 className="validBoxTitle"></h2>
                <button className="button" onClick={() => props.callFunction(true)}>Oui</button>
                <button className="button" onClick={() => props.callFunction(false)}>Annuler</button>                        
            </div>
        </div>
    )
}

export default ModalConfirm
