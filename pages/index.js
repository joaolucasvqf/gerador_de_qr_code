const Index = () => {
    var selectedType = "Link";
    var selectedPixType = "cpf"
    const handleClick = (e) => {
        var mensagem = document.getElementById("msg").value; 
        var pixKey = document.getElementById("pixKey").value;
        var pixName = document.getElementById("pixName").value;
        var pixCity = document.getElementById("pixCity").value;
        if (selectedType == "Pix") {
            window.location.href = "/api?message=" + encodeURI(mensagem) + 
                "&type=pix"
                + "&pixType=" + selectedPixType
                + "&key=" + pixKey
                + "&name=" + encodeURI(pixName)
                + "&city=" + encodeURI(pixCity);
        } else {        
            window.location.href = "/api?url=" + encodeURI(mensagem) + "&type=" + selectedType;
        }
    }

    const handlePixKeyTypeChange = (e) => {
        selectedPixType = e.target.value;
        console.log("Chave Pix selecionada: " + selectedPixType);
        var phonePixKey = document.getElementById("phonePixKey");
        var emailPixKey = document.getElementById("emailPixKey");
        var cpfPixKey = document.getElementById("cpfPixKey");
        if (selectedPixType == "phone") {
            phonePixKey.hidden = false;
            emailPixKey.hidden = true;
            cpfPixKey.hidden = true;
        } else if (selectedPixType == "email") {
            phonePixKey.hidden = true;
            emailPixKey.hidden = false;
            cpfPixKey.hidden = true;
        } else {
            phonePixKey.hidden = true;
            emailPixKey.hidden = true;
            cpfPixKey.hidden = false;
        }
    }

    const handleQRCodeTypeChange = (e) => {
        selectedType = e.target.value;
        var msgInput = document.getElementById("msgHeader");
        var divPixType = document.getElementById("pixData");
        var divQRCode = document.getElementById("qrcode");
        if (selectedType == "Pix") {
            msgInput.textContent = "Insira a sua chave Pix";
            divPixType.hidden = false;
            divQRCode.hidden = true;
        } else if (selectedType == "Link") {
            msgInput.textContent = "Insira o seu link (URL)";
            divPixType.hidden = true;
            divQRCode.hidden = false;
        } else {
            msgInput.textContent = "Insira o seu texto";
            divPixType.hidden = true;
            divQRCode.hidden = false;
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

            <div id="pixData" hidden>
                <br></br>
                <p>Selecione sua chave pix:</p>
                <input type="radio" id="cpf" name="pixType" value="cpf" onClick={handlePixKeyTypeChange} defaultChecked></input>
                <label htmlFor="cpf">CPF</label>

                <input type="radio" id="email" name="pixType" value="email" onClick={handlePixKeyTypeChange}></input>
                <label htmlFor="email">Email</label>

                <input type="radio" id="phone" name="pixType" value="phone" onClick={handlePixKeyTypeChange}></input>
                <label htmlFor="phone">Telefone</label>

                <div id="cpfPixKey">
                    <p>Informe sua chave pix:</p>
                    <input type="text" name="pixKey" id="pixKey" placeholder="(99)99999-9999"></input>
                </div>
                <div id="phonePixKey" hidden>
                    <p>Informe sua chave pix:</p>
                    <input type="text" name="pixKey" id="pixKey"></input>
                </div>
                <div id="emailPixKey" hidden>
                    <p>Informe sua chave pix:</p>
                    <input type="text" name="pixKey" id="pixKey"></input>
                </div>

                <p>Informe seu nome:</p>
                <input type="text" name="pixName" id="pixName"></input>

                <p>Informe sua cidade:</p>
                <input type="text" name="pixCity" id="pixCity"></input>

                <br></br>
                <br></br>
                <button type="submit" id="btn" onClick={handleClick}>Gerar PIX QR-Code</button>
            </div>

            <br></br>

            <div id="qrcode">
                <h3 id="msgHeader">Seu texto do QR-Code</h3>
                
                <input name="msg" id="msg"></input>
                <button type="submit" id="btn" onClick={handleClick}>Gerar QR-Code</button>
            </div>
        </>
    )
}
export default Index
