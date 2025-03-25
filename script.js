// List of 100+ cards with premium countries
const cards = [
    { id: 1, bin: "524366", country: "UNITED STATES", flag: "🇺🇸", validThru: "05/28", cardNumber: "5243661234567890", expiry: "05/28", cvv: "123", brand: "MASTERCARD", type: "CREDIT", level: "PLATINUM", issuer: "HOME STATE BANK", price: "$14.00", refund: "YES", new: true },
    { id: 2, bin: "427082", country: "UNITED STATES", flag: "🇺🇸", validThru: "03/28", cardNumber: "4270829876543210", expiry: "03/28", cvv: "456", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "CHASE BANK", price: "$14.00", refund: "YES", new: true },
    { id: 3, bin: "517805", country: "UNITED STATES", flag: "🇺🇸", validThru: "04/26", cardNumber: "5178054567891234", expiry: "04/26", cvv: "789", brand: "MASTERCARD", type: "CREDIT", level: "GOLD", issuer: "WELLS FARGO", price: "$14.00", refund: "YES", new: true },
    { id: 4, bin: "510805", country: "UNITED STATES", flag: "🇺🇸", validThru: "02/29", cardNumber: "5108056543219876", expiry: "02/29", cvv: "321", brand: "MASTERCARD", type: "CREDIT", level: "N/A", issuer: "BANK OF AMERICA", price: "$14.00", refund: "YES", new: true },
    { id: 5, bin: "498824", country: "UNITED KINGDOM", flag: "🇬🇧", validThru: "03/29", cardNumber: "4988247891234567", expiry: "03/29", cvv: "654", brand: "VISA", type: "CREDIT", level: "PLATINUM", issuer: "BARCLAYS", price: "$14.00", refund: "YES", new: true },
    { id: 6, bin: "469955", country: "UNITED STATES", flag: "🇺🇸", validThru: "04/26", cardNumber: "4699553216549870", expiry: "04/26", cvv: "987", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "CITIBANK", price: "$14.00", refund: "YES", new: true },
    { id: 7, bin: "498503", country: "UNITED STATES", flag: "🇺🇸", validThru: "10/27", cardNumber: "4985034567891234", expiry: "10/27", cvv: "123", brand: "VISA", type: "CREDIT", level: "GOLD", issuer: "CAPITAL ONE", price: "$14.00", refund: "YES", new: true },
    { id: 8, bin: "517546", country: "UNITED STATES", flag: "🇺🇸", validThru: "01/30", cardNumber: "5175469876543210", expiry: "01/30", cvv: "456", brand: "MASTERCARD", type: "CREDIT", level: "N/A", issuer: "DISCOVER", price: "$14.00", refund: "YES", new: true },
    { id: 9, bin: "485954", country: "TAIWAN", flag: "🇹🇼", validThru: "05/28", cardNumber: "4859541234567890", expiry: "05/28", cvv: "789", brand: "VISA", type: "CREDIT", level: "PLATINUM", issuer: "CTBC BANK", price: "$14.00", refund: "YES", new: true },
    { id: 10, bin: "474773", country: "UNITED STATES", flag: "🇺🇸", validThru: "06/28", cardNumber: "4747736543219876", expiry: "06/28", cvv: "321", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "US BANK", price: "$14.00", refund: "YES", new: true },
    { id: 11, bin: "423223", country: "UNITED STATES", flag: "🇺🇸", validThru: "03/27", cardNumber: "4232237891234567", expiry: "03/27", cvv: "654", brand: "VISA", type: "CREDIT", level: "GOLD", issuer: "PNC BANK", price: "$14.00", refund: "YES", new: true },
    { id: 12, bin: "413331", country: "UNITED STATES", flag: "🇺🇸", validThru: "03/29", cardNumber: "4133314567891234", expiry: "03/29", cvv: "987", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "TD BANK", price: "$14.00", refund: "YES", new: true },
    { id: 13, bin: "462845", country: "SINGAPORE", flag: "🇸🇬", validThru: "01/29", cardNumber: "4628459876543210", expiry: "01/29", cvv: "123", brand: "VISA", type: "CREDIT", level: "PLATINUM", issuer: "DBS BANK", price: "$14.00", refund: "YES", new: true },
    { id: 14, bin: "463225", country: "MALAYSIA", flag: "🇲🇾", validThru: "10/32", cardNumber: "4632251234567890", expiry: "10/32", cvv: "456", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "MAYBANK", price: "$14.00", refund: "YES", new: true },
    { id: 15, bin: "524367", country: "GERMANY", flag: "🇩🇪", validThru: "07/27", cardNumber: "5243676543219876", expiry: "07/27", cvv: "789", brand: "MASTERCARD", type: "CREDIT", level: "GOLD", issuer: "DEUTSCHE BANK", price: "€14.00", refund: "YES", new: true },
    { id: 16, bin: "427083", country: "UNITED KINGDOM", flag: "🇬🇧", validThru: "02/28", cardNumber: "4270837891234567", expiry: "02/28", cvv: "321", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "HSBC", price: "£14.00", refund: "YES", new: true },
    { id: 17, bin: "517806", country: "CANADA", flag: "🇨🇦", validThru: "05/29", cardNumber: "5178064567891234", expiry: "05/29", cvv: "654", brand: "MASTERCARD", type: "CREDIT", level: "PLATINUM", issuer: "RBC", price: "$14.00", refund: "YES", new: true },
    { id: 18, bin: "510806", country: "AUSTRALIA", flag: "🇦🇺", validThru: "03/30", cardNumber: "5108069876543210", expiry: "03/30", cvv: "987", brand: "MASTERCARD", type: "CREDIT", level: "N/A", issuer: "ANZ", price: "$14.00", refund: "YES", new: true },
    { id: 19, bin: "498825", country: "FRANCE", flag: "🇫🇷", validThru: "04/27", cardNumber: "4988251234567890", expiry: "04/27", cvv: "123", brand: "VISA", type: "CREDIT", level: "GOLD", issuer: "BNP PARIBAS", price: "€14.00", refund: "YES", new: true },
    { id: 20, bin: "469956", country: "JAPAN", flag: "🇯🇵", validThru: "06/28", cardNumber: "4699566543219876", expiry: "06/28", cvv: "456", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "SMBC", price: "¥1500", refund: "YES", new: true },
    { id: 21, bin: "498504", country: "SOUTH KOREA", flag: "🇰🇷", validThru: "02/29", cardNumber: "4985047891234567", expiry: "02/29", cvv: "789", brand: "VISA", type: "CREDIT", level: "PLATINUM", issuer: "SHINHAN BANK", price: "₩15000", refund: "YES", new: true },
    { id: 22, bin: "517547", country: "ITALY", flag: "🇮🇹", validThru: "01/31", cardNumber: "5175474567891234", expiry: "01/31", cvv: "321", brand: "MASTERCARD", type: "CREDIT", level: "N/A", issuer: "UNICREDIT", price: "€14.00", refund: "YES", new: true },
    { id: 23, bin: "485955", country: "SPAIN", flag: "🇪🇸", validThru: "05/29", cardNumber: "4859559876543210", expiry: "05/29", cvv: "654", brand: "VISA", type: "CREDIT", level: "GOLD", issuer: "SANTANDER", price: "€14.00", refund: "YES", new: true },
    { id: 24, bin: "474774", country: "SWITZERLAND", flag: "🇨🇭", validThru: "03/28", cardNumber: "4747741234567890", expiry: "03/28", cvv: "987", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "UBS", price: "CHF14.00", refund: "YES", new: true },
    { id: 25, bin: "423224", country: "NETHERLANDS", flag: "🇳🇱", validThru: "04/27", cardNumber: "4232246543219876", expiry: "04/27", cvv: "123", brand: "VISA", type: "CREDIT", level: "PLATINUM", issuer: "ING", price: "€14.00", refund: "YES", new: true },
    { id: 26, bin: "413332", country: "SWEDEN", flag: "🇸🇪", validThru: "02/30", cardNumber: "4133327891234567", expiry: "02/30", cvv: "456", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "NORDEA", price: "SEK140", refund: "YES", new: true },
    { id: 27, bin: "462846", country: "NORWAY", flag: "🇳🇴", validThru: "01/29", cardNumber: "4628464567891234", expiry: "01/29", cvv: "789", brand: "VISA", type: "CREDIT", level: "GOLD", issuer: "DNB", price: "NOK140", refund: "YES", new: true },
    { id: 28, bin: "463226", country: "DENMARK", flag: "🇩🇰", validThru: "05/28", cardNumber: "4632269876543210", expiry: "05/28", cvv: "321", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "DANSKE BANK", price: "DKK100", refund: "YES", new: true },
    { id: 29, bin: "524368", country: "FINLAND", flag: "🇫🇮", validThru: "03/29", cardNumber: "5243681234567890", expiry: "03/29", cvv: "654", brand: "MASTERCARD", type: "CREDIT", level: "PLATINUM", issuer: "OP BANK", price: "€14.00", refund: "YES", new: true },
    { id: 30, bin: "427084", country: "IRELAND", flag: "🇮🇪", validThru: "04/27", cardNumber: "4270846543219876", expiry: "04/27", cvv: "987", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "AIB", price: "€14.00", refund: "YES", new: true },
    { id: 31, bin: "517807", country: "BELGIUM", flag: "🇧🇪", validThru: "02/28", cardNumber: "5178077891234567", expiry: "02/28", cvv: "123", brand: "MASTERCARD", type: "CREDIT", level: "GOLD", issuer: "KBC", price: "€14.00", refund: "YES", new: true },
    { id: 32, bin: "510807", country: "AUSTRIA", flag: "🇦🇹", validThru: "01/30", cardNumber: "5108074567891234", expiry: "01/30", cvv: "456", brand: "MASTERCARD", type: "CREDIT", level: "N/A", issuer: "RAIFFEISEN", price: "€14.00", refund: "YES", new: true },
    { id: 33, bin: "498826", country: "SINGAPORE", flag: "🇸🇬", validThru: "05/29", cardNumber: "4988269876543210", expiry: "05/29", cvv: "789", brand: "VISA", type: "CREDIT", level: "PLATINUM", issuer: "OCBC", price: "$14.00", refund: "YES", new: true },
    { id: 34, bin: "469957", country: "NEW ZEALAND", flag: "🇳🇿", validThru: "03/28", cardNumber: "4699571234567890", expiry: "03/28", cvv: "321", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "ANZ", price: "$14.00", refund: "YES", new: true },
    { id: 35, bin: "498505", country: "UAE", flag: "🇦🇪", validThru: "04/27", cardNumber: "4985056543219876", expiry: "04/27", cvv: "654", brand: "VISA", type: "CREDIT", level: "GOLD", issuer: "EMIRATES NBD", price: "AED50", refund: "YES", new: true },
    { id: 36, bin: "517548", country: "SAUDI ARABIA", flag: "🇸🇦", validThru: "02/29", cardNumber: "5175487891234567", expiry: "02/29", cvv: "987", brand: "MASTERCARD", type: "CREDIT", level: "N/A", issuer: "AL RAJHI BANK", price: "SAR50", refund: "YES", new: true },
    { id: 37, bin: "485956", country: "QATAR", flag: "🇶🇦", validThru: "01/31", cardNumber: "4859564567891234", expiry: "01/31", cvv: "123", brand: "VISA", type: "CREDIT", level: "PLATINUM", issuer: "QNB", price: "QAR50", refund: "YES", new: true },
    { id: 38, bin: "474775", country: "ISRAEL", flag: "🇮🇱", validThru: "05/28", cardNumber: "4747759876543210", expiry: "05/28", cvv: "456", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "LEUMI", price: "ILS50", refund: "YES", new: true },
    { id: 39, bin: "423225", country: "UNITED STATES", flag: "🇺🇸", validThru: "03/29", cardNumber: "4232251234567890", expiry: "03/29", cvv: "789", brand: "VISA", type: "CREDIT", level: "GOLD", issuer: "CHASE BANK", price: "$14.00", refund: "YES", new: true },
    { id: 40, bin: "413333", country: "UNITED STATES", flag: "🇺🇸", validThru: "04/27", cardNumber: "4133336543219876", expiry: "04/27", cvv: "321", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "WELLS FARGO", price: "$14.00", refund: "YES", new: true },
    { id: 41, bin: "462847", country: "UNITED KINGDOM", flag: "🇬🇧", validThru: "02/28", cardNumber: "4628477891234567", expiry: "02/28", cvv: "654", brand: "VISA", type: "CREDIT", level: "PLATINUM", issuer: "LLOYDS", price: "£14.00", refund: "YES", new: true },
    { id: 42, bin: "463227", country: "CANADA", flag: "🇨🇦", validThru: "01/30", cardNumber: "4632274567891234", expiry: "01/30", cvv: "987", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "TD CANADA", price: "$14.00", refund: "YES", new: true },
    { id: 43, bin: "524369", country: "AUSTRALIA", flag: "🇦🇺", validThru: "05/29", cardNumber: "5243699876543210", expiry: "05/29", cvv: "123", brand: "MASTERCARD", type: "CREDIT", level: "GOLD", issuer: "WESTPAC", price: "$14.00", refund: "YES", new: true },
    { id: 44, bin: "427085", country: "FRANCE", flag: "🇫🇷", validThru: "03/28", cardNumber: "4270851234567890", expiry: "03/28", cvv: "456", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "SOCIETE GENERALE", price: "€14.00", refund: "YES", new: true },
    { id: 45, bin: "517808", country: "GERMANY", flag: "🇩🇪", validThru: "04/27", cardNumber: "5178086543219876", expiry: "04/27", cvv: "789", brand: "MASTERCARD", type: "CREDIT", level: "PLATINUM", issuer: "COMMERZBANK", price: "€14.00", refund: "YES", new: true },
    { id: 46, bin: "510808", country: "JAPAN", flag: "🇯🇵", validThru: "02/29", cardNumber: "5108087891234567", expiry: "02/29", cvv: "321", brand: "MASTERCARD", type: "CREDIT", level: "N/A", issuer: "MUFG", price: "¥1500", refund: "YES", new: true },
    { id: 47, bin: "498827", country: "SOUTH KOREA", flag: "🇰🇷", validThru: "01/31", cardNumber: "4988274567891234", expiry: "01/31", cvv: "654", brand: "VISA", type: "CREDIT", level: "GOLD", issuer: "HANA BANK", price: "₩15000", refund: "YES", new: true },
    { id: 48, bin: "469958", country: "ITALY", flag: "🇮🇹", validThru: "05/28", cardNumber: "4699589876543210", expiry: "05/28", cvv: "987", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "INTESA SANPAOLO", price: "€14.00", refund: "YES", new: true },
    { id: 49, bin: "498506", country: "SPAIN", flag: "🇪🇸", validThru: "03/29", cardNumber: "4985061234567890", expiry: "03/29", cvv: "123", brand: "VISA", type: "CREDIT", level: "PLATINUM", issuer: "BBVA", price: "€14.00", refund: "YES", new: true },
    { id: 50, bin: "517549", country: "SWITZERLAND", flag: "🇨🇭", validThru: "04/27", cardNumber: "5175496543219876", expiry: "04/27", cvv: "456", brand: "MASTERCARD", type: "CREDIT", level: "N/A", issuer: "CREDIT SUISSE", price: "CHF14.00", refund: "YES", new: true },
    { id: 51, bin: "485957", country: "NETHERLANDS", flag: "🇳🇱", validThru: "02/28", cardNumber: "4859577891234567", expiry: "02/28", cvv: "789", brand: "VISA", type: "CREDIT", level: "GOLD", issuer: "ABN AMRO", price: "€14.00", refund: "YES", new: true },
    { id: 52, bin: "474776", country: "SWEDEN", flag: "🇸🇪", validThru: "01/30", cardNumber: "4747764567891234", expiry: "01/30", cvv: "321", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "SEB", price: "SEK140", refund: "YES", new: true },
    { id: 53, bin: "423226", country: "NORWAY", flag: "🇳🇴", validThru: "05/29", cardNumber: "4232269876543210", expiry: "05/29", cvv: "654", brand: "VISA", type: "CREDIT", level: "PLATINUM", issuer: "SPAREBANK", price: "NOK140", refund: "YES", new: true },
    { id: 54, bin: "413334", country: "DENMARK", flag: "🇩🇰", validThru: "03/28", cardNumber: "4133341234567890", expiry: "03/28", cvv: "987", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "NORDEA", price: "DKK100", refund: "YES", new: true },
    { id: 55, bin: "462848", country: "FINLAND", flag: "🇫🇮", validThru: "04/27", cardNumber: "4628486543219876", expiry: "04/27", cvv: "123", brand: "VISA", type: "CREDIT", level: "GOLD", issuer: "SAMMON", price: "€14.00", refund: "YES", new: true },
    { id: 56, bin: "463228", country: "IRELAND", flag: "🇮🇪", validThru: "02/29", cardNumber: "4632287891234567", expiry: "02/29", cvv: "456", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "BOI", price: "€14.00", refund: "YES", new: true },
    { id: 57, bin: "524370", country: "BELGIUM", flag: "🇧🇪", validThru: "01/31", cardNumber: "5243704567891234", expiry: "01/31", cvv: "789", brand: "MASTERCARD", type: "CREDIT", level: "PLATINUM", issuer: "BELFIUS", price: "€14.00", refund: "YES", new: true },
    { id: 58, bin: "427086", country: "AUSTRIA", flag: "🇦🇹", validThru: "05/28", cardNumber: "4270869876543210", expiry: "05/28", cvv: "321", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "ERSTE BANK", price: "€14.00", refund: "YES", new: true },
    { id: 59, bin: "517809", country: "SINGAPORE", flag: "🇸🇬", validThru: "03/29", cardNumber: "5178091234567890", expiry: "03/29", cvv: "654", brand: "MASTERCARD", type: "CREDIT", level: "GOLD", issuer: "UOB", price: "$14.00", refund: "YES", new: true },
    { id: 60, bin: "510809", country: "NEW ZEALAND", flag: "🇳🇿", validThru: "04/27", cardNumber: "5108096543219876", expiry: "04/27", cvv: "987", brand: "MASTERCARD", type: "CREDIT", level: "N/A", issuer: "WESTPAC", price: "$14.00", refund: "YES", new: true },
    { id: 61, bin: "498828", country: "UAE", flag: "🇦🇪", validThru: "02/28", cardNumber: "4988287891234567", expiry: "02/28", cvv: "123", brand: "VISA", type: "CREDIT", level: "PLATINUM", issuer: "ADCB", price: "AED50", refund: "YES", new: true },
    { id: 62, bin: "469959", country: "SAUDI ARABIA", flag: "🇸🇦", validThru: "01/30", cardNumber: "4699594567891234", expiry: "01/30", cvv: "456", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "SAMBA", price: "SAR50", refund: "YES", new: true },
    { id: 63, bin: "498507", country: "QATAR", flag: "🇶🇦", validThru: "05/29", cardNumber: "4985079876543210", expiry: "05/29", cvv: "789", brand: "VISA", type: "CREDIT", level: "GOLD", issuer: "DOHA BANK", price: "QAR50", refund: "YES", new: true },
    { id: 64, bin: "517550", country: "ISRAEL", flag: "🇮🇱", validThru: "03/28", cardNumber: "5175501234567890", expiry: "03/28", cvv: "321", brand: "MASTERCARD", type: "CREDIT", level: "N/A", issuer: "HAPOALIM", price: "ILS50", refund: "YES", new: true },
    { id: 65, bin: "485958", country: "UNITED STATES", flag: "🇺🇸", validThru: "04/27", cardNumber: "4859586543219876", expiry: "04/27", cvv: "654", brand: "VISA", type: "CREDIT", level: "PLATINUM", issuer: "CHASE BANK", price: "$14.00", refund: "YES", new: true },
    { id: 66, bin: "474777", country: "UNITED STATES", flag: "🇺🇸", validThru: "02/29", cardNumber: "4747777891234567", expiry: "02/29", cvv: "987", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "WELLS FARGO", price: "$14.00", refund: "YES", new: true },
    { id: 67, bin: "423227", country: "UNITED KINGDOM", flag: "🇬🇧", validThru: "01/31", cardNumber: "4232274567891234", expiry: "01/31", cvv: "123", brand: "VISA", type: "CREDIT", level: "GOLD", issuer: "BARCLAYS", price: "£14.00", refund: "YES", new: true },
    { id: 68, bin: "413335", country: "CANADA", flag: "🇨🇦", validThru: "05/28", cardNumber: "4133359876543210", expiry: "05/28", cvv: "456", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "CIBC", price: "$14.00", refund: "YES", new: true },
    { id: 69, bin: "462849", country: "AUSTRALIA", flag: "🇦🇺", validThru: "03/29", cardNumber: "4628491234567890", expiry: "03/29", cvv: "789", brand: "VISA", type: "CREDIT", level: "PLATINUM", issuer: "NAB", price: "$14.00", refund: "YES", new: true },
    { id: 70, bin: "463229", country: "FRANCE", flag: "🇫🇷", validThru: "04/27", cardNumber: "4632296543219876", expiry: "04/27", cvv: "321", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "CREDIT AGRICOLE", price: "€14.00", refund: "YES", new: true },
    { id: 71, bin: "524371", country: "GERMANY", flag: "🇩🇪", validThru: "02/28", cardNumber: "5243717891234567", expiry: "02/28", cvv: "654", brand: "MASTERCARD", type: "CREDIT", level: "GOLD", issuer: "SPARKASSE", price: "€14.00", refund: "YES", new: true },
    { id: 72, bin: "427087", country: "JAPAN", flag: "🇯🇵", validThru: "01/30", cardNumber: "4270874567891234", expiry: "01/30", cvv: "987", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "RAKUTEN", price: "¥1500", refund: "YES", new: true },
    { id: 73, bin: "517810", country: "SOUTH KOREA", flag: "🇰🇷", validThru: "05/29", cardNumber: "5178109876543210", expiry: "05/29", cvv: "123", brand: "MASTERCARD", type: "CREDIT", level: "PLATINUM", issuer: "SAMSUNG CARD", price: "₩15000", refund: "YES", new: true },
    { id: 74, bin: "510810", country: "ITALY", flag: "🇮🇹", validThru: "03/28", cardNumber: "5108101234567890", expiry: "03/28", cvv: "456", brand: "MASTERCARD", type: "CREDIT", level: "N/A", issuer: "MONTE DEI PASCHI", price: "€14.00", refund: "YES", new: true },
    { id: 75, bin: "498829", country: "SPAIN", flag: "🇪🇸", validThru: "04/27", cardNumber: "4988296543219876", expiry: "04/27", cvv: "789", brand: "VISA", type: "CREDIT", level: "GOLD", issuer: "CAIXABANK", price: "€14.00", refund: "YES", new: true },
    { id: 76, bin: "469960", country: "SWITZERLAND", flag: "🇨🇭", validThru: "02/29", cardNumber: "4699607891234567", expiry: "02/29", cvv: "321", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "ZKB", price: "CHF14.00", refund: "YES", new: true },
    { id: 77, bin: "498508", country: "NETHERLANDS", flag: "🇳🇱", validThru: "01/31", cardNumber: "4985084567891234", expiry: "01/31", cvv: "654", brand: "VISA", type: "CREDIT", level: "PLATINUM", issuer: "RABOBANK", price: "€14.00", refund: "YES", new: true },
    { id: 78, bin: "517551", country: "SWEDEN", flag: "🇸🇪", validThru: "05/28", cardNumber: "5175519876543210", expiry: "05/28", cvv: "987", brand: "MASTERCARD", type: "CREDIT", level: "N/A", issuer: "HANDELSBANKEN", price: "SEK140", refund: "YES", new: true },
    { id: 79, bin: "485959", country: "NORWAY", flag: "🇳🇴", validThru: "03/29", cardNumber: "4859591234567890", expiry: "03/29", cvv: "123", brand: "VISA", type: "CREDIT", level: "GOLD", issuer: "GJENSIDIGE", price: "NOK140", refund: "YES", new: true },
    { id: 80, bin: "474778", country: "DENMARK", flag: "🇩🇰", validThru: "04/27", cardNumber: "4747786543219876", expiry: "04/27", cvv: "456", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "JYSKE BANK", price: "DKK100", refund: "YES", new: true },
    { id: 81, bin: "423228", country: "FINLAND", flag: "🇫🇮", validThru: "02/28", cardNumber: "4232287891234567", expiry: "02/28", cvv: "789", brand: "VISA", type: "CREDIT", level: "PLATINUM", issuer: "NORDEA", price: "€14.00", refund: "YES", new: true },
    { id: 82, bin: "413336", country: "IRELAND", flag: "🇮🇪", validThru: "01/30", cardNumber: "4133364567891234", expiry: "01/30", cvv: "321", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "ULSTER BANK", price: "€14.00", refund: "YES", new: true },
    { id: 83, bin: "462850", country: "BELGIUM", flag: "🇧🇪", validThru: "05/29", cardNumber: "4628509876543210", expiry: "05/29", cvv: "654", brand: "VISA", type: "CREDIT", level: "GOLD", issuer: "ARGENTA", price: "€14.00", refund: "YES", new: true },
    { id: 84, bin: "463230", country: "AUSTRIA", flag: "🇦🇹", validThru: "03/28", cardNumber: "4632301234567890", expiry: "03/28", cvv: "987", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "BAWAG", price: "€14.00", refund: "YES", new: true },
    { id: 85, bin: "524372", country: "SINGAPORE", flag: "🇸🇬", validThru: "04/27", cardNumber: "5243726543219876", expiry: "04/27", cvv: "123", brand: "MASTERCARD", type: "CREDIT", level: "PLATINUM", issuer: "CITIBANK", price: "$14.00", refund: "YES", new: true },
    { id: 86, bin: "427088", country: "NEW ZEALAND", flag: "🇳🇿", validThru: "02/29", cardNumber: "4270887891234567", expiry: "02/29", cvv: "456", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "BNZ", price: "$14.00", refund: "YES", new: true },
    { id: 87, bin: "517811", country: "UAE", flag: "🇦🇪", validThru: "01/31", cardNumber: "5178114567891234", expiry: "01/31", cvv: "789", brand: "MASTERCARD", type: "CREDIT", level: "GOLD", issuer: "FAB", price: "AED50", refund: "YES", new: true },
    { id: 88, bin: "510811", country: "SAUDI ARABIA", flag: "🇸🇦", validThru: "05/28", cardNumber: "5108119876543210", expiry: "05/28", cvv: "321", brand: "MASTERCARD", type: "CREDIT", level: "N/A", issuer: "NCB", price: "SAR50", refund: "YES", new: true },
    { id: 89, bin: "498830", country: "QATAR", flag: "🇶🇦", validThru: "03/29", cardNumber: "4988301234567890", expiry: "03/29", cvv: "654", brand: "VISA", type: "CREDIT", level: "PLATINUM", issuer: "CBQ", price: "QAR50", refund: "YES", new: true },
    { id: 90, bin: "469961", country: "ISRAEL", flag: "🇮🇱", validThru: "04/27", cardNumber: "4699616543219876", expiry: "04/27", cvv: "987", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "DISCOUNT BANK", price: "ILS50", refund: "YES", new: true },
    { id: 91, bin: "498509", country: "UNITED STATES", flag: "🇺🇸", validThru: "02/28", cardNumber: "4985097891234567", expiry: "02/28", cvv: "123", brand: "VISA", type: "CREDIT", level: "GOLD", issuer: "BANK OF AMERICA", price: "$14.00", refund: "YES", new: true },
    { id: 92, bin: "517552", country: "UNITED STATES", flag: "🇺🇸", validThru: "01/30", cardNumber: "5175524567891234", expiry: "01/30", cvv: "456", brand: "MASTERCARD", type: "CREDIT", level: "N/A", issuer: "CITIBANK", price: "$14.00", refund: "YES", new: true },
    { id: 93, bin: "485960", country: "UNITED KINGDOM", flag: "🇬🇧", validThru: "05/29", cardNumber: "4859609876543210", expiry: "05/29", cvv: "789", brand: "VISA", type: "CREDIT", level: "PLATINUM", issuer: "NATWEST", price: "£14.00", refund: "YES", new: true },
    { id: 94, bin: "474779", country: "CANADA", flag: "🇨🇦", validThru: "03/28", cardNumber: "4747791234567890", expiry: "03/28", cvv: "321", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "SCOTIABANK", price: "$14.00", refund: "YES", new: true },
    { id: 95, bin: "423229", country: "AUSTRALIA", flag: "🇦🇺", validThru: "04/27", cardNumber: "4232296543219876", expiry: "04/27", cvv: "654", brand: "VISA", type: "CREDIT", level: "GOLD", issuer: "COMMONWEALTH", price: "$14.00", refund: "YES", new: true },
    { id: 96, bin: "413337", country: "FRANCE", flag: "🇫🇷", validThru: "02/29", cardNumber: "4133377891234567", expiry: "02/29", cvv: "987", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "LCL", price: "€14.00", refund: "YES", new: true },
    { id: 97, bin: "462851", country: "GERMANY", flag: "🇩🇪", validThru: "01/31", cardNumber: "4628514567891234", expiry: "01/31", cvv: "123", brand: "VISA", type: "CREDIT", level: "PLATINUM", issuer: "HYPOVEREINSBANK", price: "€14.00", refund: "YES", new: true },
    { id: 98, bin: "463231", country: "JAPAN", flag: "🇯🇵", validThru: "05/28", cardNumber: "4632319876543210", expiry: "05/28", cvv: "456", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "JCB", price: "¥1500", refund: "YES", new: true },
    { id: 99, bin: "524373", country: "SOUTH KOREA", flag: "🇰🇷", validThru: "03/29", cardNumber: "5243731234567890", expiry: "03/29", cvv: "789", brand: "MASTERCARD", type: "CREDIT", level: "GOLD", issuer: "WOORI BANK", price: "₩15000", refund: "YES", new: true },
    { id: 100, bin: "427089", country: "ITALY", flag: "🇮🇹", validThru: "04/27", cardNumber: "4270896543219876", expiry: "04/27", cvv: "321", brand: "VISA", type: "CREDIT", level: "N/A", issuer: "BPER", price: "€14.00", refund: "YES", new: true },
    { id: 101, bin: "517812", country: "SPAIN", flag: "🇪🇸", validThru: "02/28", cardNumber: "5178127891234567", expiry: "02/28", cvv: "654", brand: "MASTERCARD", type: "CREDIT", level: "PLATINUM", issuer: "SABADELL", price: "€14.00", refund: "YES", new: true },
    { id: 102, bin: "510812", country: "SWITZERLAND", flag: "🇨🇭", validThru: "01/30", cardNumber: "5108124567891234", expiry: "01/30", cvv: "987", brand: "MASTERCARD", type: "CREDIT", level: "N/A", issuer: "MIGROS", price: "CHF14.00", refund: "YES", new: true }
];

// Load saved username and password from LocalStorage
window.onload = function() {
    // Initially hide all sections except loading
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("ccListSection").style.display = "none";
    document.getElementById("paymentPopup").style.display = "none";
    document.getElementById("cardDetailsSection").style.display = "none";

    // Show loading spinner for 2 seconds, then show login form
    setTimeout(function() {
        document.getElementById("loading").style.display = "none";
        document.getElementById("loginContainer").style.display = "block";
    }, 2000);

    // Check if username and password are saved in LocalStorage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername) {
        document.getElementById("username").value = savedUsername;
    }
    if (savedPassword) {
        document.getElementById("password").value = savedPassword;
    }

    // Load all cards into the table
    const ccTableBody = document.getElementById("ccTableBody");
    cards.forEach(card => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${card.bin} <img src="${card.brand === 'VISA' ? 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png' : 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg'}" alt="${card.brand}"></td>
            <td>${card.flag} ${card.country}</td>
            <td>${card.validThru}</td>
            <td>
                <button class="details-btn" onclick="buyCard(${card.id})">👁️</button>
                ${card.new ? '<span class="new-tag">new! MARCH 2025 (TTCV6666001)</span>' : ''}
            </td>
            <td>${card.price}</td>
            <td class="${card.refund === 'YES' ? 'refund-yes' : 'refund-no'}">${card.refund} -</td>
        `;
        ccTableBody.appendChild(row);
    });
};

// Save username and password to LocalStorage on form submit
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Access Granted! Credentials saved.");
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("ccListSection").style.display = "block";
});

// Toggle Password Visibility
function togglePassword() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

// Buy Card
let selectedCard = null;
function buyCard(cardId) {
    selectedCard = cards.find(card => card.id === cardId);
    const paymentPopup = document.getElementById("paymentPopup");
    paymentPopup.style.display = "flex";
}

// Complete Payment
function completePayment() {
    document.getElementById("paymentPopup").style.display = "none";
    document.getElementById("ccListSection").style.display = "none";
    document.getElementById("cardDetailsSection").style.display = "block";

    // Show card details
    document.getElementById("cardNumber").textContent = selectedCard.cardNumber;
    document.getElementById("expiryDate").textContent = selectedCard.expiry;
    document.getElementById("cvv").textContent = selectedCard.cvv;
    document.getElementById("brand").textContent = selectedCard.brand;
    document.getElementById("type").textContent = selectedCard.type;
    document.getElementById("level").textContent = selectedCard.level;
    document.getElementById("issuer").textContent = selectedCard.issuer;
    document.getElementById("country").textContent = selectedCard.country;
}

// Back to List
function backToList() {
    document.getElementById("cardDetailsSection").style.display = "none";
    document.getElementById("ccListSection").style.display = "block";
     }
