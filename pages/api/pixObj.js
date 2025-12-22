import Crc16 from './CRC16';

export class PIXObj {
    constructor(pixType, key, name = 'Fulano de Tal', city = 'BRASILIA', txID = '***', message = '') {
        if (pixType.toString() == 'phone') {
            this.key = '+55' + key;
        } else {
            this.key = key ?? '+5513981441336';
        }
        this.name = name ?? 'Fulano de Tal';
        this.city = city ?? 'BRASILIA';
        this.txId = txID ?? '***';
        this.message = message ?? '';
    }

    getPixInfo() {
        let payloadFormat = '000201';
        let key = '01' + this.key.length.toString().padStart(2, '0') + this.key;
        let merchantAccountInfo = '26' + (key.length+18).toString().padStart(2, '0') + '0014br.gov.bcb.pix'
        let merchantCategory = '52040000';
        let transactionCurrency = '5303986'
        let countryCode = '5802BR';
        let marchantName = '59' + this.name.length.toString().padStart(2, '0') + this.name;
        let merchantCity = '60' + this.city.length.toString().padStart(2, '0') + this.city;
        let additionalInfoPrefix = '6207';
        let txIdField = '05' + (this.txId.length.toString().padStart(2, '0')) + this.txId;
        let CR16prefix = '6304';

        var payload = `${payloadFormat}${merchantAccountInfo}${key}${merchantCategory}${transactionCurrency}${countryCode}${marchantName}${merchantCity}${additionalInfoPrefix}${txIdField}${CR16prefix}`;

        var validationConde = Crc16(payload);

        return payload + validationConde;
    }
}