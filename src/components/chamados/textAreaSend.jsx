export default function TextArea({text, onClick, handleChange}) {
  return (
    <div data-mdb-input-init className="form-outline d-flex flex-row">
        <textarea 
        className="form-control bg-body-tertiary" 
        id="textAreaExample2" 
        rows="2"
        value={text}
        onChange={handleChange}
        ></textarea>
        
        <button
        onClick={onClick}
        type="button" 
        data-mdb-button-init 
        data-mdb-ripple-init 
        className="btn btn-primary btn-rounded float-end mt-1 mb-1 ms-1">Enviar</button>
    </div>
  )
}
