import QRCode from "qrcode-svg";
import { PIXObj } from "./pixObj";

export default(req, res) => {
    try {
        var query = req.query
        
        var url = ''
        if (query.type == 'pix'){
            console.log("Entrou no pix")
            var pix = new PIXObj(query.pixType, query.key, query.name, query.city, query.txID, query.message)
            url = pix.getPixInfo();
            console.log("url gerada do pix: " + url)
        } else {
            console.log("Não entrou no pix")
            url = query.url
        }

        const svg = new QRCode({
            content: url,
            padding: 4,
            width: 256,
            height: 256,
            color: "#000000",
            background: "#ffffff",
            ecl: 'Q',
            join: true
        })
    
        res.statusCode = 200
        res.setHeader('content-type', 'image/svg+xml')
        res.send(svg.svg())
    } catch (error) {
        console.log(error);
        res.statusCode = 500
        res.json({ error: error.message })
    }
}