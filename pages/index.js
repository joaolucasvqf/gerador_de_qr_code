const Index = () => {
  
    const handleClick = (e) => {
        var mensagem = document.getElementById("msg").value; 
        var type = document.querySelector('input[name="qr-type"]:checked').value;
        if (type == "Link") {
            window.location.href = "/api?url=" + encodeURI(mensagem);
        } else {
            window.location.href = "/api?url=" + mensagem;
        }
    }
    return (
        <>
            <h1>Insira o a mensagem ou link a ser utilizado no QR-Code:</h1>
            <br></br>
            <h3>Deseja gerar um link ou texto?</h3>

            <input name="qr-type" type="radio" id="Link" value="Link" checked></input>
            <label for="Link">Link</label>

            <input name="qr-type" type="radio" id="Texto" value="Texto"></input>
            <label for="Texto">Texto</label>

            <br></br>
            <h3>Seu texto do QR-Code</h3>
            <input name="msg" id="msg"></input>
            <button type="submit" id="btn" onClick={handleClick}>Gerar QR-Code</button>
        </>
    )
}
export default Index
