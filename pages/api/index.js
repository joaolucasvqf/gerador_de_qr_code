import QRCode from "qrcode-svg"
// import QrcodePix from 'qrcode-pix'

export default(req, res) => {

    try {
        var query = req.query
        // if (query.type == pix){
        //     const svg = new QrcodePix({
        //         key: query.url,
        //         name: query.name || 'Nome do Recebedor',
        //         city: query.city || 'SAO PAULO',
        //         amount: query.amount || '0.00',
        //         txId: query.txId || '***',
        //     });
        // } else {
            const svg = new QRCode({
                content: query.url,
                padding: 4,
                width: 256,
                height: 256,
                color: "#000000",
                background: "#ffffff",
                ecl: 'Q',
                join: true
            });
        // }
    
        res.statusCode = 200
        res.setHeader('content-type', 'image/svg+xml')
        res.send(svg.svg())
    } catch (error) {
        alert(error);
    }
}