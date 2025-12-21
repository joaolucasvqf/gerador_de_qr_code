const Index = () => {
  
    const handleClick = (e) => {
        var mensagem = document.getElementById("msg").value; 
        window.location.href = "/api?url=" + mensagem;
    }
    return (
        <>
            <h1>Insira o a mensagem ou link a ser utilizado no QR-Code:</h1>

            <br></br>

            <input name="msg" id="msg"></input>
            <button type="submit" id="btn" onClick={handleClick}>Gerar QR-Code</button>
        </>
    )
}
export default Index
