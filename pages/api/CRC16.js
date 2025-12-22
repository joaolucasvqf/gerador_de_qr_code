export default function getCRC16(payload) {
    // Parâmetros técnicos do Pix
    const polynomial = 0x1021;
    let crc = 0xFFFF; // Valor inicial (Seed)

    for (let i = 0; i < payload.length; i++) {
        // Obtém o código do caractere e faz a operação XOR com os 8 bits superiores do CRC
        crc ^= (payload.charCodeAt(i) << 8);

        for (let j = 0; j < 8; j++) {
            // Verifica o bit mais significativo (0x8000)
            if ((crc & 0x8000) !== 0) {
                crc = ((crc << 1) ^ polynomial);
            } else {
                crc <<= 1;
            }
        }
    }

    // Garante que o resultado seja um valor de 16 bits (0xFFFF)
    // E converte para hexadecimal em caixa alta, completando com zeros à esquerda
    return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
}

