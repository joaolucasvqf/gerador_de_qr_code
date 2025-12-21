import QRCode from "qrcode-svg"

export default(req, res) => {
    const url = req.query.url
    const svg = new QRCode({
        content: url,
        padding: 4,
        ecl: 'Q',
        join: true
    });

    res.statusCode = 200
    res.setHeader('content-type', 'image/svg+xml')
    res.send(svg.svg())
}