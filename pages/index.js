const Index = () => {
  
    const handleClick = (e) => {
        var mensagem = document.getElementById("msg").value; 
        var type = document.getElementsByName('qr-type').forEach(i => {if(i.checked) { return i.value }});
        if (type == "Pix") {
            var selectedPixType = document.getElementsByName('pixType').forEach(i => {if(i.checked) { return i.value }});
            window.location.href = "/api?url=" + mensagem + "&type=pix"
                + "&pixType=" + selectedPixType;
        } else {        
            window.location.href = "/api?url=" + encodeURI(mensagem) + "&type=text";
        }
    }
    const handleQRCodeTypeChange = (e) => {
        var selectedType = e.target.value;
        var msgInput = document.getElementById("msgHeader");
        var divPixType = document.getElementById("pixType");
        if (selectedType == "Pix") {
            msgInput.textContent = "Insira a sua chave Pix";
            divPixType.innerHTML = `
            <div>
                <h3>Selecione sua chave pix:</h3>
                <input type="radio" id="cpf" name="pixType" value="cpf defaultChecked">
                <label htmlFor="cpf">CPF</label>

                <input type="radio" id="email" name="pixType" value="email">
                <label htmlFor="email">Email</label>

                <input type="radio" id="phone" name="pixType" value="phone">
                <label htmlFor="phone">Telefone</label>
            <div>
            `;
            //Sets the cpf field as selected by default
            var pixTypeField = document.getElementsByName("pixType");
            pixTypeField[0].checked = true;
        } else if (selectedType == "Link") {
            msgInput.textContent = "Insira o seu link (URL)";
            divPixType.innerHTML = "";
        } else {
            msgInput.textContent = "Insira o seu texto";
            divPixType.innerHTML = "";
        }
    }
    return (
        <>
            <h1>Insira o a mensagem ou link a ser utilizado no QR-Code:</h1>

            <br></br>

            <h3>Deseja gerar um link ou texto?</h3>

            <input name="qr-type" type="radio" id="Link" value="Link" onClick={handleQRCodeTypeChange} defaultChecked></input>
            <label htmlFor="Link">Link</label>

            <input name="qr-type" type="radio" id="Texto" value="Texto" onClick={handleQRCodeTypeChange} ></input>
            <label htmlFor="Texto">Texto</label>
            
            <input name="qr-type" type="radio" id="Pix" value="Pix" onClick={handleQRCodeTypeChange} ></input>
            <label htmlFor="Pix">Pix</label>

            <br></br>

            <h3 id="msgHeader">Seu texto do QR-Code</h3>
            
            <input name="msg" id="msg"></input>
            <button type="submit" id="btn" onClick={handleClick}>Gerar QR-Code</button>

            <div id="pixType"></div>
        </>
    )
}
export default Index
