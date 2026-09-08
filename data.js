// Bihar Progress App - All 38 Districts Data

const defaultData = (headquarters) => ({
    education: {
        literacyRate: "जानकारी उपलब्ध नहीं",
        maleLiteracyRate: "जानकारी उपलब्ध नहीं",
        femaleLiteracyRate: "जानकारी उपलब्ध नहीं",
        year: 2011,
        source: "जानकारी अपडेट की जा रही है"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "जानकारी अपडेट की जा रही है"
    },

    agriculture: {
        mainCrops: "जानकारी उपलब्ध नहीं",
        cultivatedArea: "जानकारी उपलब्ध नहीं",
        source: "जानकारी अपडेट की जा रही है"
    },

    roads: {
        nationalHighway: "जानकारी उपलब्ध नहीं",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "जानकारी अपडेट की जा रही है"
    },

    population: {
        total: "जानकारी उपलब्ध नहीं",
        male: "जानकारी उपलब्ध नहीं",
        female: "जानकारी उपलब्ध नहीं",
        area: "जानकारी उपलब्ध नहीं",
        density: "जानकारी उपलब्ध नहीं",
        sexRatio: "जानकारी उपलब्ध नहीं",
        year: 2011,
        source: "जानकारी अपडेट की जा रही है"
    },

    districtInfo: {
        headquarters: headquarters,
        subdivisions: "जानकारी उपलब्ध नहीं",
        blocks: "जानकारी उपलब्ध नहीं",
        source: "जानकारी अपडेट की जा रही है"
    },

    geography: {
        location: "जानकारी उपलब्ध नहीं",
        majorRivers: "जानकारी उपलब्ध नहीं",
        geographicalRegion: "जानकारी उपलब्ध नहीं",
        source: "जानकारी अपडेट की जा रही है"
    },

    transport: {
        railwayStations: "जानकारी उपलब्ध नहीं",
        nationalHighway: "जानकारी उपलब्ध नहीं",
        airport: "जानकारी उपलब्ध नहीं",
        source: "जानकारी अपडेट की जा रही है"
    }
});


const biharData = {

  // 1. अररिया
araria: {
    education: {
        literacyRate: "53.53%",
        maleLiteracyRate: "62.30%",
        femaleLiteracyRate: "43.93%",
        year: 2011,
        source: "Census 2011 / Araria District Administration"
    },

    health: {
        governmentHospitals: 4,
        primaryHealthCentres: 9,
        healthSubCentres: 224,
        source: "Araria District Administration"
    },

    agriculture: {
        mainCrops: "धान, मक्का, जूट",
        cultivatedArea: "1832.11 sq. km",
        source: "Araria District Administration"
    },

    roads: {
        nationalHighway: "NH-57",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Government of Bihar / Araria District Administration"
    },

    population: {
        total: "28,11,569",
        male: "14,63,333",
        female: "13,48,236",
        area: "2830 sq. km",
        density: "993",
        sexRatio: "921",
        year: 2011,
        source: "Census 2011 / Araria District Administration"
    },

    districtInfo: {
        headquarters: "अररिया",
        subdivisions: 2,
        blocks: 9,
        panchayats: 218,
        villages: 751,
        source: "Araria District Administration"
    },

    geography: {
        location: "उत्तर-पूर्वी बिहार",
        majorRivers: "कोसी, सुवारा, काली, परमार और कोली",
        geographicalRegion: "उत्तर बिहार का मैदानी क्षेत्र",
        source: "Araria District Administration"
    },

    transport: {
        railwayStations: "अररिया कोर्ट, अररिया (R.S.)",
        nationalHighway: "NH-57",
        airport: "पूर्णिया एयरपोर्ट",
        source: "Araria District Administration"
    }
},

// 2. अरवल
arwal: {
    education: {
        literacyRate: 57.14,
        maleLiteracyRate: 66.90,
        femaleLiteracyRate: 46.62,
        year: 2011,
        source: "Arwal District Administration / Census 2011"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: 5,
        healthSubCentres: 47,
        source: "Arwal District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूँ, मक्का",
        cultivatedArea: "495.20 sq. km",
        source: "Arwal District Administration"
    },

    roads: {
        nationalHighway: "जानकारी उपलब्ध नहीं",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "जानकारी अपडेट की जा रही है"
    },

    population: {
        total: "7,00,843",
        male: "3,63,497",
        female: "3,37,346",
        area: "634.23 sq. km",
        density: "1105 प्रति वर्ग किमी",
        sexRatio: "928",
        year: 2011,
        source: "Arwal District Administration / Census 2011"
    },

    districtInfo: {
        headquarters: "अरवल",
        subdivisions: 1,
        blocks: 5,
        panchayats: 65,
        villages: 335,
        source: "Arwal District Administration"
    },

    geography: {
        location: "दक्षिण बिहार",
        majorRivers: "सोन नदी",
        geographicalRegion: "मगध क्षेत्र",
        source: "Arwal District Administration"
    },

    transport: {
        railwayStations: "पटना",
        nationalHighway: "जानकारी उपलब्ध नहीं",
        airport: "पटना एयरपोर्ट",
        source: "Arwal District Administration"
    }
},

    // 3. औरंगाबाद
    aurangabad: {
    education: {
        literacyRate: "70.32%",
        maleLiteracyRate: "80.11%",
        femaleLiteracyRate: "59.71%",
        year: 2011,
        source: "Census 2011 / Aurangabad District Administration"
    },

    health: {
        governmentHospitals: "जानकारी अपडेट आवश्यक",
        primaryHealthCentres: "जानकारी अपडेट आवश्यक",
        healthSubCentres: "जानकारी अपडेट आवश्यक",
        source: "Aurangabad District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूँ, चना, मसूर, सरसों",
        irrigationArea: "कृषि प्रधान क्षेत्र",
        source: "Aurangabad District Administration"
    },

    water: {
        majorRivers: "पुनपुन, मदर, औरंगा, बताने, मोरहर",
        source: "Aurangabad District Administration"
    },

    environment: {
        geographicalRegion: "मगध क्षेत्र",
        climate: "उष्णकटिबंधीय मानसूनी जलवायु",
        source: "Aurangabad District Administration"
    },

    employment: {
        mainEmployment: "कृषि एवं कृषि आधारित रोजगार",
        industries: "बिजली उत्पादन, सीमेंट उद्योग, कृषि आधारित उद्योग",
        source: "Aurangabad District Administration"
    },

    districtInfo: {
        headquarters: "औरंगाबाद",
        area: "3,305 वर्ग किलोमीटर",
        population: "25,40,073",
        density: "769 व्यक्ति प्रति वर्ग किलोमीटर",
        sexRatio: "926",
        subdivision: "2",
        blocks: "11",
        panchayats: "202",
        villages: "1884",
        source: "Census 2011 / Aurangabad District Administration"
    },

    geography: {
        location: "बिहार के दक्षिण-पश्चिमी भाग में",
        geographicalRegion: "मगध क्षेत्र",
        majorRivers: "पुनपुन, मदर, औरंगा, बताने, मोरहर",
        northernBorder: "अरवल एवं जहानाबाद",
        southernBorder: "झारखंड",
        easternBorder: "गया",
        westernBorder: "रोहतास एवं कैमूर क्षेत्र",
        source: "Aurangabad District Administration"
    },

    transport: {
        railwayStations: "औरंगाबाद रोड क्षेत्र के निकट स्टेशन, रफीगंज, नवीनगर रोड",
        nationalHighway: "NH-19 एवं अन्य प्रमुख सड़क मार्ग",
        airport: "निकटतम प्रमुख हवाई अड्डा: गया / पटना",
        source: "Aurangabad District Administration"
    }
},

    // 4. बांका
    banka: {
    education: {
        literacyRate: "58.17%",
        maleLiteracyRate: "71.32%",
        femaleLiteracyRate: "44.31%",
        year: 2011,
        source: "Census 2011 / Banka District Administration"
    },

    health: {
        governmentHospitals: "जानकारी अपडेट आवश्यक",
        primaryHealthCentres: "जानकारी अपडेट आवश्यक",
        healthSubCentres: "जानकारी अपडेट आवश्यक",
        source: "Banka District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूँ, मक्का, दलहन, तिलहन",
        irrigationArea: "कृषि प्रधान क्षेत्र",
        source: "Banka District Administration"
    },

    water: {
        majorRivers: "चंदन, बदुआ, ओढ़नी",
        source: "Banka District Administration"
    },

    environment: {
        geographicalRegion: "बिहार का दक्षिण-पूर्वी भाग",
        climate: "उष्णकटिबंधीय मानसूनी जलवायु",
        source: "Banka District Administration"
    },

    employment: {
        mainEmployment: "कृषि एवं कृषि आधारित रोजगार",
        industries: "कृषि आधारित एवं छोटे उद्योग",
        source: "Banka District Administration"
    },

    districtInfo: {
        headquarters: "बांका",
        area: "3,020 वर्ग किलोमीटर",
        population: "20,34,763",
        density: "672 व्यक्ति प्रति वर्ग किलोमीटर",
        sexRatio: "907",
        subdivision: "2",
        blocks: "11",
        panchayats: "185",
        villages: "2114",
        source: "Census 2011 / Banka District Administration"
    },

    geography: {
        location: "बिहार के दक्षिण-पूर्वी भाग में",
        geographicalRegion: "अंग क्षेत्र",
        majorRivers: "चंदन, बदुआ, ओढ़नी",
        northernBorder: "भागलपुर",
        southernBorder: "झारखंड",
        easternBorder: "गोड्डा एवं झारखंड क्षेत्र",
        westernBorder: "जमुई",
        source: "Banka District Administration"
    },

    transport: {
        railwayStations: "बांका, कटोरिया क्षेत्र के निकट प्रमुख स्टेशन",
        nationalHighway: "प्रमुख राज्य एवं जिला सड़क मार्ग",
        airport: "निकटतम प्रमुख हवाई अड्डा: देवघर / पटना",
        source: "Banka District Administration"
    }
},

    // 5. बेगूसराय
    begusarai: {
    education: {
        literacyRate: "63.87%",
        maleLiteracyRate: "73.55%",
        femaleLiteracyRate: "53.16%",
        year: 2011,
        source: "Census 2011 / Begusarai District Administration"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Begusarai District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूँ, मक्का, दलहन, तिलहन, गन्ना एवं सब्जियां",
        irrigationArea: "कृषि प्रधान क्षेत्र",
        source: "Begusarai District Administration"
    },

    water: {
        majorRivers: "गंगा, बूढ़ी गंडक, बलान",
        source: "Begusarai District Administration"
    },

    environment: {
        geographicalRegion: "उत्तर बिहार का गंगा मैदानी क्षेत्र",
        climate: "उष्णकटिबंधीय मानसूनी जलवायु",
        source: "Begusarai District Administration"
    },

    employment: {
        mainEmployment: "कृषि, उद्योग एवं सेवा क्षेत्र",
        industries: "बरौनी रिफाइनरी, उर्वरक, थर्मल पावर एवं अन्य औद्योगिक गतिविधियां",
        source: "Begusarai District Administration"
    },

    districtInfo: {
        headquarters: "बेगूसराय",
        area: "1,918 वर्ग किलोमीटर",
        population: "29,70,541",
        density: "1,549 व्यक्ति प्रति वर्ग किलोमीटर",
        sexRatio: "895",
        subdivisions: 5,
        blocks: 18,
        panchayats: 257,
        villages: 1229,
        source: "Census 2011 / Begusarai District Administration"
    },

    geography: {
        location: "उत्तर-मध्य बिहार",
        geographicalRegion: "गंगा नदी के उत्तरी मैदानी क्षेत्र",
        majorRivers: "गंगा, बूढ़ी गंडक, बलान",
        northernBorder: "समस्तीपुर",
        southernBorder: "गंगा नदी एवं लखीसराय",
        easternBorder: "खगड़िया",
        westernBorder: "समस्तीपुर एवं वैशाली",
        source: "Begusarai District Administration"
    },

    transport: {
        railwayStations: "बेगूसराय, बरौनी जंक्शन, लखमिनिया",
        nationalHighway: "NH-31",
        airport: "निकटतम प्रमुख हवाई अड्डा: दरभंगा / पटना",
        source: "Begusarai District Administration"
    }
},

    // 6. भागलपुर
    bhagalpur: {
    education: {
        literacyRate: 63.14,
        maleLiteracyRate: "जानकारी उपलब्ध नहीं",
        femaleLiteracyRate: "जानकारी उपलब्ध नहीं",
        year: 2011,
        source: "Census 2011 / Bhagalpur District Administration"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Bhagalpur District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूँ, मक्का, दलहन, तिलहन एवं सब्जियां",
        irrigationArea: "कृषि प्रधान क्षेत्र",
        source: "Bhagalpur District Administration"
    },

    water: {
        majorRivers: "गंगा, कोसी एवं अन्य स्थानीय नदियाँ",
        source: "Bhagalpur District Administration"
    },

    environment: {
        geographicalRegion: "अंग क्षेत्र एवं गंगा के दक्षिणी मैदानी क्षेत्र",
        climate: "उष्णकटिबंधीय मानसूनी जलवायु",
        source: "Bhagalpur District Administration"
    },

    employment: {
        mainEmployment: "कृषि, रेशम उद्योग, व्यापार एवं सेवा क्षेत्र",
        industries: "भागलपुरी सिल्क, कपड़ा एवं कृषि आधारित उद्योग",
        source: "Bhagalpur District Administration"
    },

    districtInfo: {
        headquarters: "भागलपुर",
        area: "2569 वर्ग किलोमीटर",
        population: "30,37,766",
        density: "1183 व्यक्ति प्रति वर्ग किलोमीटर",
        sexRatio: "879",
        subdivisions: 3,
        blocks: 16,
        panchayats: 242,
        villages: 1514,
        source: "Census 2011 / Bhagalpur District Administration"
    },

    geography: {
        location: "बिहार के पूर्वी भाग में",
        geographicalRegion: "अंग क्षेत्र",
        majorRivers: "गंगा, कोसी",
        northernBorder: "पूर्णिया एवं कटिहार क्षेत्र",
        southernBorder: "बांका एवं झारखंड",
        easternBorder: "कटिहार",
        westernBorder: "मुंगेर",
        source: "Bhagalpur District Administration"
    },

    transport: {
        railwayStations: "भागलपुर जंक्शन, कहलगांव, नवगछिया",
        nationalHighway: "NH-80",
        airport: "निकटतम प्रमुख हवाई अड्डा: देवघर / पटना",
        source: "Bhagalpur District Administration"
    }
},

    // 7. भोजपुर
    bhojpur: {
    education: {
        literacyRate: 70.47,
        maleLiteracyRate: 81.07,
        femaleLiteracyRate: 58.92,
        year: 2011,
        source: "Census 2011 / Bhojpur District Administration"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Bhojpur District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूँ, मक्का, दलहन, तिलहन एवं सब्जियां",
        irrigationArea: "कृषि प्रधान क्षेत्र",
        source: "Bhojpur District Administration"
    },

    water: {
        majorRivers: "गंगा, सोन, गेरुआ एवं अन्य स्थानीय नदियाँ",
        source: "Bhojpur District Administration"
    },

    environment: {
        geographicalRegion: "मध्य बिहार का गंगा मैदानी क्षेत्र",
        climate: "उष्णकटिबंधीय मानसूनी जलवायु",
        source: "Bhojpur District Administration"
    },

    employment: {
        mainEmployment: "कृषि, व्यापार एवं सेवा क्षेत्र",
        industries: "कृषि आधारित एवं छोटे उद्योग",
        source: "Bhojpur District Administration"
    },

    districtInfo: {
        headquarters: "आरा",
        area: "2473 वर्ग किलोमीटर",
        population: "27,28,407",
        density: "1103 व्यक्ति प्रति वर्ग किलोमीटर",
        sexRatio: "907",
        subdivisions: 3,
        blocks: 14,
        panchayats: 228,
        villages: 1228,
        source: "Census 2011 / Bhojpur District Administration"
    },

    geography: {
        location: "बिहार के पश्चिमी-मध्य भाग में",
        geographicalRegion: "गंगा एवं सोन नदी के मैदानी क्षेत्र",
        majorRivers: "गंगा, सोन",
        northernBorder: "सारण एवं गंगा नदी",
        southernBorder: "रोहतास",
        easternBorder: "पटना एवं अरवल",
        westernBorder: "बक्सर",
        source: "Bhojpur District Administration"
    },

    transport: {
        railwayStations: "आरा जंक्शन, बिहिया, कोईलवर",
        nationalHighway: "NH-922",
        airport: "निकटतम प्रमुख हवाई अड्डा: जयप्रकाश नारायण अंतरराष्ट्रीय हवाई अड्डा, पटना",
        source: "Bhojpur District Administration"
    }
},

    // 8. बक्सर
    buxar: {
    education: {
        literacyRate: 70.14,
        maleLiteracyRate: 81.30,
        femaleLiteracyRate: 57.80,
        year: 2011,
        source: "Census 2011 / Buxar District Administration"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Buxar District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूँ, मक्का, दलहन, तिलहन एवं सब्जियां",
        irrigationArea: "कृषि प्रधान क्षेत्र",
        source: "Buxar District Administration"
    },

    water: {
        majorRivers: "गंगा, कर्मनाशा एवं अन्य स्थानीय नदियाँ",
        source: "Buxar District Administration"
    },

    environment: {
        geographicalRegion: "पश्चिमी बिहार का गंगा मैदानी क्षेत्र",
        climate: "उष्णकटिबंधीय मानसूनी जलवायु",
        source: "Buxar District Administration"
    },

    employment: {
        mainEmployment: "कृषि, व्यापार एवं सेवा क्षेत्र",
        industries: "कृषि आधारित एवं छोटे उद्योग",
        source: "Buxar District Administration"
    },

    districtInfo: {
        headquarters: "बक्सर",
        area: "1703 वर्ग किलोमीटर",
        population: "17,06,352",
        density: "1002 व्यक्ति प्रति वर्ग किलोमीटर",
        sexRatio: "922",
        subdivisions: 2,
        blocks: 11,
        panchayats: 142,
        villages: 1088,
        source: "Census 2011 / Buxar District Administration"
    },

    geography: {
        location: "बिहार के पश्चिमी भाग में",
        geographicalRegion: "गंगा नदी का उपजाऊ मैदानी क्षेत्र",
        majorRivers: "गंगा, कर्मनाशा",
        northernBorder: "उत्तर प्रदेश",
        southernBorder: "कैमूर",
        easternBorder: "भोजपुर",
        westernBorder: "उत्तर प्रदेश",
        source: "Buxar District Administration"
    },

    transport: {
        railwayStations: "बक्सर, डुमरांव",
        nationalHighway: "NH-922",
        airport: "निकटतम प्रमुख हवाई अड्डा: वाराणसी / पटना",
        source: "Buxar District Administration"
    }
},

    // 9. दरभंगा
    darbhanga: {
    education: {
        literacyRate: 56.56,
        maleLiteracyRate: 66.32,
        femaleLiteracyRate: 46.09,
        year: 2011,
        source: "Census 2011 / Darbhanga District Administration"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Darbhanga District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूँ, मक्का, दलहन, तिलहन एवं सब्जियां",
        irrigationArea: "कृषि प्रधान क्षेत्र",
        source: "Darbhanga District Administration"
    },

    water: {
        majorRivers: "बागमती, कमला, करेह, अधवारा समूह की नदियाँ",
        source: "Darbhanga District Administration"
    },

    environment: {
        geographicalRegion: "मिथिला क्षेत्र का उपजाऊ मैदानी एवं बाढ़ प्रभावित क्षेत्र",
        climate: "उष्णकटिबंधीय मानसूनी जलवायु",
        source: "Darbhanga District Administration"
    },

    employment: {
        mainEmployment: "कृषि, व्यापार, शिक्षा एवं सेवा क्षेत्र",
        industries: "कृषि आधारित, खाद्य प्रसंस्करण एवं छोटे उद्योग",
        source: "Darbhanga District Administration"
    },

    districtInfo: {
        headquarters: "दरभंगा",
        area: "2279 वर्ग किलोमीटर",
        population: "39,37,385",
        density: "1728 व्यक्ति प्रति वर्ग किलोमीटर",
        sexRatio: "911",
        subdivisions: 3,
        blocks: 18,
        panchayats: 324,
        villages: 1269,
        source: "Census 2011 / Darbhanga District Administration"
    },

    geography: {
        location: "उत्तर बिहार",
        geographicalRegion: "मिथिला क्षेत्र",
        majorRivers: "बागमती, कमला, करेह एवं अधवारा समूह की नदियाँ",
        northernBorder: "मधुबनी",
        southernBorder: "समस्तीपुर",
        easternBorder: "सहरसा",
        westernBorder: "मुजफ्फरपुर एवं सीतामढ़ी",
        source: "Darbhanga District Administration"
    },

    transport: {
        railwayStations: "दरभंगा जंक्शन, लहेरियासराय, सकरी जंक्शन",
        nationalHighway: "NH-27",
        airport: "दरभंगा हवाई अड्डा",
        source: "Darbhanga District Administration"
    }
},

    // 10. पूर्वी चंपारण
    eastChamparan: {
    education: {
        literacyRate: 55.79,
        maleLiteracyRate: 67.34,
        femaleLiteracyRate: 43.46,
        year: 2011,
        source: "Census 2011 / East Champaran District Administration"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "East Champaran District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूँ, मक्का, गन्ना, दलहन, तिलहन एवं सब्जियां",
        irrigationArea: "कृषि प्रधान क्षेत्र",
        source: "East Champaran District Administration"
    },

    water: {
        majorRivers: "गंडक, बूढ़ी गंडक, लालबकेया, बागमती एवं अन्य स्थानीय नदियाँ",
        source: "East Champaran District Administration"
    },

    environment: {
        geographicalRegion: "उत्तर बिहार का तराई एवं उपजाऊ मैदानी क्षेत्र",
        climate: "उष्णकटिबंधीय मानसूनी जलवायु",
        source: "East Champaran District Administration"
    },

    employment: {
        mainEmployment: "कृषि एवं कृषि आधारित रोजगार",
        industries: "चीनी उद्योग, कृषि आधारित एवं छोटे उद्योग",
        source: "East Champaran District Administration"
    },

    districtInfo: {
        headquarters: "मोतिहारी",
        area: "3968 वर्ग किलोमीटर",
        population: "50,99,371",
        density: "1285 व्यक्ति प्रति वर्ग किलोमीटर",
        sexRatio: "901",
        subdivisions: 6,
        blocks: 27,
        panchayats: 405,
        villages: 1344,
        source: "Census 2011 / East Champaran District Administration"
    },

    geography: {
        location: "बिहार के उत्तर-पश्चिमी भाग में",
        geographicalRegion: "चंपारण का तराई एवं मैदानी क्षेत्र",
        majorRivers: "गंडक, बूढ़ी गंडक, लालबकेया, बागमती",
        northernBorder: "नेपाल",
        southernBorder: "मुजफ्फरपुर एवं वैशाली",
        easternBorder: "शिवहर एवं सीतामढ़ी",
        westernBorder: "पश्चिम चंपारण",
        source: "East Champaran District Administration"
    },

    transport: {
        railwayStations: "मोतिहारी, बापूधाम मोतिहारी, चकिया, रक्सौल",
        nationalHighway: "NH-27",
        airport: "निकटतम प्रमुख हवाई अड्डा: कुशीनगर / पटना",
        source: "East Champaran District Administration"
    }
},

    // 11. गया
   gaya: {

    education: {
        literacyRate: 54.8,
        maleLiteracyRate: 63.0,
        femaleLiteracyRate: 46.1,
        year: 2011,
        source: "Census 2011 / Gaya District Administration"
    },

    health: {
        governmentHospitals: 1,
        primaryHealthCentres: 24,
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Magadh Division Statistics / Gaya"
    },

    agriculture: {
        mainCrops: "धान, गेहूं, आलू, दलहन",
        cultivatedArea: "169111 hectares",
        source: "Magadh Division Statistics / Gaya"
    },

    roads: {
        nationalHighway: "जानकारी उपलब्ध नहीं",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Government Data - अपडेट किया जाएगा"
    },

    population: {
        total: "43,79,383",
        male: "22,66,865",
        female: "21,12,518",
        area: "4976 sq. km",
        density: "880 प्रति वर्ग किमी",
        sexRatio: "932",
        year: 2011,
        source: "Census 2011 / Gaya District Administration"
    },

    districtInfo: {
        headquarters: "गया",
        area: "4976 वर्ग किमी",
        subdivisions: 4,
        blocks: 24,
        villages: 2886,
        panchayats: 332,
        source: "Gaya District Administration"
    },

    geography: {
        location: "दक्षिण बिहार",
        geographicalRegion: "मगध क्षेत्र",
        majorRivers: "फल्गु, निरंजना, मोरहर",
        northernBorder: "जहानाबाद",
        source: "Gaya District Administration / Magadh Division"
    },

    transport: {
        railwayStations: "गया जंक्शन, मानपुर जंक्शन",
        nationalHighway: "जानकारी उपलब्ध नहीं",
        airport: "गया अंतरराष्ट्रीय हवाई अड्डा",
        source: "Gaya District Administration"
    }
},

    // 12. गोपालगंज
    gopalganj: {
    education: {
        literacyRate: 53.98,
        maleLiteracyRate: 62.63,
        femaleLiteracyRate: 45.51,
        year: 2011,
        source: "Census 2011 / Gopalganj District Administration"
    },

    health: {
        governmentHospitals: "जिला स्वास्थ्य विभाग के अनुसार",
        primaryHealthCentres: "ब्लॉक स्तर पर उपलब्ध",
        healthSubCentres: "जिले में विभिन्न स्थानों पर",
        source: "Gopalganj District Administration"
    },

    agriculture: {
        mainCrops: "गेहूँ, धान, मक्का, सब्जियाँ, गन्ना, आलू",
        cultivatedArea: "कृषि प्रधान जिला",
        irrigation: "गंडक नहर एवं नलकूप",
        source: "Gopalganj District Agriculture Department"
    },

    roads: {
        nationalHighway: "NH-27 (पूर्व में NH-28)",
        stateHighway: "राज्य राजमार्ग एवं जिला सड़कें",
        districtRoad: "सभी प्रखंड मुख्यालयों से सड़क संपर्क",
        source: "Gopalganj District Administration"
    },

    geography: {
        location: "बिहार के उत्तर-पश्चिमी भाग में",
        geographicalRegion: "इंडो-गंगा का मैदानी क्षेत्र",
        majorRivers: "गंडक नदी, घाघरा नदी क्षेत्र",
        northernBorder: "उत्तर प्रदेश",
        southernBorder: "सिवान जिला",
        easternBorder: "गंडक नदी एवं सारण क्षेत्र",
        westernBorder: "उत्तर प्रदेश",
        source: "Gopalganj District Administration"
    },

    transport: {
        railwayStations: "गोपालगंज, थावे जंक्शन, हथुआ सहित अन्य स्टेशन",
        nationalHighway: "NH-27",
        airport: "निकटतम हवाई सुविधा - सबेया, हथुआ क्षेत्र / प्रमुख वाणिज्यिक हवाई अड्डा पटना",
        source: "Gopalganj District Administration"
    },

    districtInfo: {
        headquarters: "गोपालगंज",
        established: "2 अक्टूबर 1973",
        area: "2033 वर्ग किलोमीटर",
        population: 2562012,
        subdivisions: 2,
        blocks: 14,
        villages: 1566,
        panchayats: 234,
        source: "Census 2011 / Gopalganj District Administration"
    }
},

    // 13. जमुई
    jamui: {

    education: {
        literacyRate: 59.79,
        maleLiteracyRate: "जानकारी उपलब्ध नहीं",
        femaleLiteracyRate: "जानकारी उपलब्ध नहीं",
        year: 2011,
        source: "Census 2011 / Jamui District Profile"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Jamui District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूं, मक्का, दलहन",
        cultivationArea: "जानकारी उपलब्ध नहीं",
        source: "Jamui District Administration"
    },

    roads: {
        nationalHighway: "जानकारी उपलब्ध नहीं",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Government Data / Jamui District"
    },

    population: {
        total: "17,60,405",
        male: "9,16,064",
        female: "8,44,341",
        area: "3122.80 sq. km",
        density: "567 प्रति वर्ग किमी",
        sexRatio: "922",
        year: 2011,
        source: "Jamui District Administration / Census 2011"
    },

    districtInfo: {
        headquarters: "जमुई",
        established: "21 फरवरी 1991",
        area: "3122.80 वर्ग किमी",
        subdivisions: 1,
        blocks: 10,
        villages: 1528,
        panchayats: 153,
        source: "Jamui District Administration"
    },

    geography: {
        location: "दक्षिण-पूर्वी बिहार",
        geographicalRegion: "पहाड़ी एवं मैदानी क्षेत्र",
        majorRivers: "किऊल, उलई",
        northernBorder: "मुंगेर",
        southernBorder: "गिरिडीह एवं देवघर, झारखंड",
        source: "Jamui District Administration"
    },

    transport: {
        railwayStations: "जमुई, झाझा जंक्शन",
        nationalHighway: "जानकारी उपलब्ध नहीं",
        airport: "निकटतम प्रमुख हवाई अड्डा: पटना",
        source: "Jamui District Administration"
    }
},

    // 14. जहानाबाद
    jehanabad: {

    education: {
        literacyRate: 68.27,
        maleLiteracyRate: 66.71,
        femaleLiteracyRate: 50.95,
        year: 2011,
        source: "Jehanabad District Administration / Census 2011"
    },

    health: {
        governmentHospitals: 1,
        primaryHealthCentres: 7,
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Jehanabad District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूं, मक्का, गन्ना, आलू, दलहन, सब्जियां",
        cultivationArea: "78,000 हेक्टेयर (Net Area Under Cultivation)",
        source: "Magadh Division Statistics / Jehanabad"
    },

    roads: {
        nationalHighway: "NH-83, NH-110",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Government Data / Jehanabad District"
    },

    population: {
        total: "11,24,176",
        male: "5,86,202",
        female: "5,37,974",
        area: "931 sq. km",
        density: "जानकारी उपलब्ध नहीं",
        sexRatio: "922",
        year: 2011,
        source: "Jehanabad District Administration / Census 2011"
    },

    districtInfo: {
        headquarters: "जहानाबाद",
        established: "1 अगस्त 1986",
        area: "931 वर्ग किमी",
        subdivisions: 1,
        blocks: 7,
        panchayats: 93,
        source: "Jehanabad District Administration"
    },

    geography: {
        location: "दक्षिण बिहार",
        geographicalRegion: "गंगा के दक्षिण का उपजाऊ मैदानी क्षेत्र",
        majorRivers: "दरधा, जमुना",
        northernBorder: "पटना",
        southernBorder: "गया",
        easternBorder: "नालंदा",
        westernBorder: "अरवल",
        source: "Jehanabad District Administration / Magadh Division"
    },

    transport: {
        railwayStations: "जहानाबाद जंक्शन सहित स्थानीय रेलवे स्टेशन",
        nationalHighway: "NH-83, NH-110",
        airport: "निकटतम प्रमुख हवाई अड्डा: जयप्रकाश नारायण अंतरराष्ट्रीय हवाई अड्डा, पटना",
        source: "Jehanabad District Administration"
    }
},

    // 15. खगड़िया
    khagaria: {

    education: {
        literacyRate: 57.92,
        maleLiteracyRate: 65.25,
        femaleLiteracyRate: 49.56,
        year: 2011,
        source: "Census 2011 / Khagaria District Administration"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: 7,
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Khagaria District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूं, मक्का, दलहन, तिलहन",
        cultivationArea: "जानकारी उपलब्ध नहीं",
        source: "Khagaria District Administration"
    },

    roads: {
        nationalHighway: "जानकारी उपलब्ध नहीं",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Government Data / Khagaria District"
    },

    population: {
        total: "16,66,886",
        male: "8,83,786",
        female: "7,83,100",
        area: "1486 sq. km",
        density: "जानकारी उपलब्ध नहीं",
        sexRatio: "886",
        year: 2011,
        source: "Census 2011 / Khagaria District Administration"
    },

    districtInfo: {
        headquarters: "खगड़िया",
        established: "10 मई 1981",
        area: "1486 वर्ग किमी",
        subdivisions: 2,
        blocks: 7,
        villages: 306,
        panchayats: 129,
        source: "Khagaria District Administration"
    },

    geography: {
        location: "उत्तर बिहार",
        geographicalRegion: "गंगा एवं कोसी नदी का मैदानी और बाढ़ प्रभावित क्षेत्र",
        majorRivers: "गंगा, गंडक, बागमती, कमला, कोसी",
        northernBorder: "सहरसा एवं सुपौल क्षेत्र",
        source: "Khagaria District Administration"
    },

    transport: {
        railwayStations: "खगड़िया जंक्शन, मानसी जंक्शन, महेशखूंट",
        nationalHighway: "जानकारी उपलब्ध नहीं",
        airport: "निकटतम प्रमुख हवाई अड्डा: जयप्रकाश नारायण अंतरराष्ट्रीय हवाई अड्डा, पटना",
        source: "Khagaria District Administration"
    }
},

    // 16. किशनगंज
    kishanganj: {

    education: {
        literacyRate: 57.04,
        maleLiteracyRate: "जानकारी उपलब्ध नहीं",
        femaleLiteracyRate: "जानकारी उपलब्ध नहीं",
        year: 2011,
        source: "Kishanganj District Administration / Census 2011"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Kishanganj District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूं, मक्का, जूट, चाय, केला, आलू, सब्जियां",
        cultivatedArea: "जानकारी उपलब्ध नहीं",
        source: "Kishanganj District Profile"
    },

    roads: {
        nationalHighway: "NH-31",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Kishanganj District Administration"
    },

    population: {
        total: "16,90,948",
        male: "8,66,970",
        female: "8,23,978",
        area: "1884 sq. km",
        density: "897 प्रति वर्ग किमी",
        sexRatio: "950",
        year: 2011,
        source: "Kishanganj District Administration / Census 2011"
    },

    districtInfo: {
        headquarters: "किशनगंज",
        established: "14 जनवरी 1990",
        area: "1884 वर्ग किमी",
        subdivisions: 1,
        blocks: 7,
        villages: 771,
        panchayats: 124,
        source: "Kishanganj District Administration"
    },

    geography: {
        location: "बिहार के उत्तर-पूर्वी भाग में",
        geographicalRegion: "उत्तर बिहार का मैदानी एवं तराई क्षेत्र",
        majorRivers: "महानंदा, कंकई, मेची, डोंक, रतुआ",
        northernBorder: "नेपाल",
        southernBorder: "पश्चिम बंगाल एवं पूर्णिया क्षेत्र",
        easternBorder: "पश्चिम बंगाल",
        westernBorder: "अररिया",
        source: "Kishanganj District Administration"
    },

    transport: {
        railwayStations: "किशनगंज रेलवे स्टेशन, ठाकुरगंज, बहादुरगंज क्षेत्र के स्थानीय स्टेशन",
        nationalHighway: "NH-31",
        airport: "निकटतम प्रमुख हवाई अड्डा: बागडोगरा अंतरराष्ट्रीय हवाई अड्डा",
        source: "Kishanganj District Administration"
    }
},

    // 17. कैमूर
    kaimur: {

    education: {
        literacyRate: 71.01,
        maleLiteracyRate: 81.49,
        femaleLiteracyRate: 59.56,
        year: 2011,
        source: "Kaimur District Administration / Census 2011"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Kaimur District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूं, चना, दलहन, तिलहन, गन्ना",
        cultivationArea: "जानकारी उपलब्ध नहीं",
        source: "Government of Bihar / Kaimur District Profile"
    },

    roads: {
        nationalHighway: "NH-2",
        stateHighway: "राज्य राजमार्ग उपलब्ध",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Census of India / Kaimur District"
    },

    population: {
        total: "16,26,384",
        male: "8,47,006",
        female: "7,79,378",
        area: "3332 sq. km",
        density: "488 प्रति वर्ग किमी",
        sexRatio: "920",
        year: 2011,
        source: "Census 2011 / Kaimur District Administration"
    },

    districtInfo: {
        headquarters: "भभुआ",
        area: "3332 वर्ग किमी",
        subdivisions: 2,
        blocks: 11,
        villages: 1695,
        panchayats: 146,
        source: "Kaimur District Administration"
    },

    geography: {
        location: "बिहार के दक्षिण-पश्चिमी भाग में",
        geographicalRegion: "कैमूर पठार एवं मैदानी क्षेत्र",
        majorRivers: "कर्मनाशा, दुर्गावती, कुदरा",
        northernBorder: "बक्सर एवं गाज़ीपुर (उत्तर प्रदेश)",
        southernBorder: "गढ़वा (झारखंड)",
        easternBorder: "रोहतास",
        westernBorder: "चंदौली एवं मिर्जापुर (उत्तर प्रदेश)",
        source: "Kaimur District Administration"
    },

    transport: {
        railwayStations: "भभुआ रोड (मोहनिया), कुदरा, दुर्गावती",
        nationalHighway: "NH-2",
        airport: "निकटतम प्रमुख हवाई अड्डा: वाराणसी / पटना",
        source: "Kaimur District Administration"
    }
},

    // 18. कटिहार
    katihar: {

    education: {
        literacyRate: 52.24,
        maleLiteracyRate: 59.36,
        femaleLiteracyRate: 44.39,
        year: 2011,
        source: "Census 2011 / Katihar District Administration"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Katihar District Administration"
    },

    agriculture: {
        mainCrops: "मक्का, गेहूं, केला, धान, आलू, प्याज, फूलगोभी एवं अन्य सब्जियां",
        cultivationArea: "जानकारी उपलब्ध नहीं",
        source: "Katihar District Administration"
    },

    roads: {
        nationalHighway: "जानकारी उपलब्ध नहीं",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Government Data / Katihar District"
    },

    population: {
        total: "30,71,029",
        male: "16,02,831",
        female: "14,68,198",
        area: "3056 sq. km",
        density: "1004 प्रति वर्ग किमी",
        sexRatio: "916",
        year: 2011,
        source: "Census 2011 / Katihar District Administration"
    },

    districtInfo: {
        headquarters: "कटिहार",
        established: "1973",
        area: "3056 वर्ग किमी",
        subdivisions: 3,
        blocks: 16,
        villages: 1547,
        panchayats: 235,
        source: "Katihar District Administration"
    },

    geography: {
        location: "बिहार के उत्तर-पूर्वी भाग में",
        geographicalRegion: "पूर्णिया प्रमंडल का मैदानी एवं नदी प्रभावित क्षेत्र",
        majorRivers: "गंगा, कोसी, महानंदा, रिघा",
        source: "Katihar District Administration"
    },

    transport: {
        railwayStations: "कटिहार जंक्शन, बारसोई जंक्शन, मनिहारी",
        nationalHighway: "जानकारी उपलब्ध नहीं",
        airport: "निकटतम प्रमुख हवाई अड्डा: बागडोगरा / पूर्णिया",
        source: "Katihar District Administration"
    }
},

    // 19. लखीसराय
    lakhisarai: {

    education: {
        literacyRate: 62.42,
        maleLiteracyRate: "जानकारी उपलब्ध नहीं",
        femaleLiteracyRate: "जानकारी उपलब्ध नहीं",
        year: 2011,
        source: "Census 2011 / Lakhisarai District Administration"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Lakhisarai District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूं, मक्का, दलहन एवं अन्य खाद्यान्न फसलें",
        cultivationArea: "जानकारी उपलब्ध नहीं",
        source: "Lakhisarai District Agriculture Department"
    },

    roads: {
        nationalHighway: "NH-80",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Lakhisarai District Administration"
    },

    population: {
        total: "10,00,912",
        male: "जानकारी उपलब्ध नहीं",
        female: "जानकारी उपलब्ध नहीं",
        area: "1228 sq. km",
        density: "815 प्रति वर्ग किमी",
        sexRatio: "902",
        year: 2011,
        source: "Census 2011 / Lakhisarai District Administration"
    },

    districtInfo: {
        headquarters: "लखीसराय",
        established: "3 जुलाई 1994",
        area: "1228 वर्ग किमी",
        subdivisions: 1,
        blocks: 7,
        villages: 479,
        panchayats: 80,
        source: "Lakhisarai District Administration"
    },

    geography: {
        location: "दक्षिण-मध्य बिहार",
        geographicalRegion: "पहाड़ी, बाढ़ प्रभावित एवं मैदानी क्षेत्र",
        majorRivers: "गंगा, किऊल, हरुहर",
        northernBorder: "पटना",
        easternBorder: "मुंगेर",
        southernBorder: "शेखपुरा",
        westernBorder: "बेगूसराय",
        source: "Lakhisarai District Administration"
    },

    transport: {
        railwayStations: "किऊल जंक्शन, लखीसराय रेलवे स्टेशन",
        nationalHighway: "NH-80",
        airport: "निकटतम प्रमुख हवाई अड्डा: जयप्रकाश नारायण अंतरराष्ट्रीय हवाई अड्डा, पटना",
        source: "Lakhisarai District Administration"
    }
},

    // 20. मधेपुरा
    madhepura: {

    education: {
        literacyRate: 52.25,
        maleLiteracyRate: "जानकारी उपलब्ध नहीं",
        femaleLiteracyRate: "जानकारी उपलब्ध नहीं",
        year: 2011,
        source: "Census 2011 / Madhepura District Administration"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Madhepura District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूं, मक्का, जूट, दलहन एवं तिलहन",
        cultivationArea: "जानकारी उपलब्ध नहीं",
        source: "Madhepura District Administration"
    },

    roads: {
        nationalHighway: "जानकारी उपलब्ध नहीं",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Government Data / Madhepura District"
    },

    population: {
        total: "20,01,762",
        male: "जानकारी उपलब्ध नहीं",
        female: "जानकारी उपलब्ध नहीं",
        area: "1787 sq. km",
        density: "जानकारी उपलब्ध नहीं",
        sexRatio: "जानकारी उपलब्ध नहीं",
        year: 2011,
        source: "Census 2011 / Madhepura District Administration"
    },

    districtInfo: {
        headquarters: "मधेपुरा",
        established: "9 मई 1981",
        area: "1787 वर्ग किमी",
        subdivisions: 2,
        blocks: 13,
        villages: 449,
        panchayats: 170,
        source: "Madhepura District Administration"
    },

    geography: {
        location: "उत्तर बिहार",
        geographicalRegion: "कोसी नदी का मैदानी एवं बाढ़ प्रभावित क्षेत्र",
        majorRivers: "कोसी, कमला, भेंगा",
        northernBorder: "अररिया एवं सुपौल",
        southernBorder: "खगड़िया एवं भागलपुर",
        easternBorder: "पूर्णिया",
        westernBorder: "सहरसा",
        source: "Madhepura District Administration"
    },

    transport: {
        railwayStations: "मधेपुरा, मुरलीगंज, बिहारीगंज",
        nationalHighway: "जानकारी उपलब्ध नहीं",
        airport: "निकटतम प्रमुख हवाई अड्डा: पूर्णिया / पटना",
        source: "Madhepura District Administration"
    }
},

    // 21. मधुबनी
    madhubani: {

    education: {
        literacyRate: 58.62,
        maleLiteracyRate: 70.14,
        femaleLiteracyRate: 46.16,
        year: 2011,
        source: "Census 2011 / Madhubani District Administration"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Madhubani District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूं, मक्का, दलहन, तिलहन, गन्ना एवं सब्जियां",
        cultivationArea: "जानकारी उपलब्ध नहीं",
        source: "Madhubani District Administration"
    },

    roads: {
        nationalHighway: "जानकारी उपलब्ध नहीं",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Government Data / Madhubani District"
    },

    population: {
        total: "44,87,379",
        male: "23,29,313",
        female: "21,58,066",
        area: "3501 sq. km",
        density: "1282 प्रति वर्ग किमी",
        sexRatio: "926",
        year: 2011,
        source: "Census 2011 / Madhubani District Administration"
    },

    districtInfo: {
        headquarters: "मधुबनी",
        established: "1972",
        area: "3501 वर्ग किमी",
        subdivisions: 5,
        blocks: 21,
        villages: 1115,
        panchayats: 399,
        source: "Madhubani District Administration"
    },

    geography: {
        location: "बिहार के उत्तर-पूर्वी भाग में",
        geographicalRegion: "मिथिला क्षेत्र का उपजाऊ मैदानी क्षेत्र",
        majorRivers: "कमला, बलान, कोसी एवं अन्य स्थानीय नदियाँ",
        northernBorder: "नेपाल",
        southernBorder: "दरभंगा",
        easternBorder: "सुपौल",
        westernBorder: "सीतामढ़ी",
        source: "Madhubani District Administration"
    },

    transport: {
        railwayStations: "मधुबनी, जयनगर, झंझारपुर",
        nationalHighway: "जानकारी उपलब्ध नहीं",
        airport: "निकटतम प्रमुख हवाई अड्डा: दरभंगा हवाई अड्डा",
        source: "Madhubani District Administration"
    }
},

    // 22. मुंगेर
    munger: {

    education: {
        literacyRate: 70.46,
        maleLiteracyRate: 77.74,
        femaleLiteracyRate: 62.08,
        year: 2011,
        source: "Munger District Administration / Census 2011"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Munger District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूं, मक्का, दलहन एवं तिलहन",
        cultivationArea: "8,600 हेक्टेयर (Cultivable Area)",
        source: "Munger District Profile"
    },

    roads: {
        nationalHighway: "NH-80",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Munger District Administration"
    },

    population: {
        total: "13,67,765",
        male: "53.23%",
        female: "46.75%",
        area: "1419.7 sq. km",
        density: "964 प्रति वर्ग किमी",
        sexRatio: "876",
        year: 2011,
        source: "Munger District Administration / Census 2011"
    },

    districtInfo: {
        headquarters: "मुंगेर",
        area: "1419.7 वर्ग किमी",
        subdivisions: 3,
        blocks: 9,
        villages: 923,
        panchayats: 101,
        source: "Munger District Administration"
    },

    geography: {
        location: "पूर्वी बिहार",
        geographicalRegion: "गंगा नदी के दक्षिणी तट का मैदानी एवं पहाड़ी क्षेत्र",
        majorRivers: "गंगा, किऊल",
        source: "Munger District Administration"
    },

    transport: {
        railwayStations: "मुंगेर, जमालपुर जंक्शन, किऊल जंक्शन के निकटवर्ती रेल संपर्क",
        nationalHighway: "NH-80",
        airport: "निकटतम प्रमुख हवाई अड्डा: जयप्रकाश नारायण अंतरराष्ट्रीय हवाई अड्डा, पटना",
        source: "Munger District Administration"
    }
},

    // 23. मुजफ्फरपुर
    muzaffarpur: {

    education: {
        literacyRate: 63.43,
        maleLiteracyRate: "जानकारी उपलब्ध नहीं",
        femaleLiteracyRate: "जानकारी उपलब्ध नहीं",
        year: 2011,
        source: "Census 2011 / Muzaffarpur District Administration"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Muzaffarpur District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूं, मक्का, लीची, आम, सब्जियां",
        cultivationArea: "जानकारी उपलब्ध नहीं",
        source: "Muzaffarpur District Administration"
    },

    roads: {
        nationalHighway: "NH-22",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Government Data / Muzaffarpur District"
    },

    population: {
        total: "48,01,062",
        male: "25,27,497",
        female: "22,73,565",
        area: "3122.56 sq. km",
        density: "जानकारी उपलब्ध नहीं",
        sexRatio: "900",
        year: 2011,
        source: "Census 2011 / Muzaffarpur District Administration"
    },

    districtInfo: {
        headquarters: "मुजफ्फरपुर",
        established: "1875",
        area: "3122.56 वर्ग किमी",
        subdivisions: 2,
        blocks: 16,
        villages: 1811,
        panchayats: 373,
        source: "Muzaffarpur District Administration"
    },

    geography: {
        location: "उत्तर बिहार",
        geographicalRegion: "गंगा के उत्तरी मैदानी क्षेत्र",
        majorRivers: "बूढ़ी गंडक, बागमती, लखनदेई",
        northernBorder: "सीतामढ़ी एवं पूर्वी चंपारण",
        southernBorder: "वैशाली एवं सारण",
        easternBorder: "दरभंगा एवं समस्तीपुर",
        westernBorder: "सारण एवं गोपालगंज",
        source: "Muzaffarpur District Administration"
    },

    transport: {
        railwayStations: "मुजफ्फरपुर जंक्शन, रामदयालुनगर, ढोली",
        nationalHighway: "NH-22",
        airport: "निकटतम प्रमुख हवाई अड्डा: जयप्रकाश नारायण अंतरराष्ट्रीय हवाई अड्डा, पटना",
        source: "Muzaffarpur District Administration"
    }
},

    // 24. नालंदा
    nalanda: {

    education: {
        literacyRate: 64.43,
        maleLiteracyRate: "जानकारी उपलब्ध नहीं",
        femaleLiteracyRate: "जानकारी उपलब्ध नहीं",
        year: 2011,
        source: "Census 2011 / Nalanda District Administration"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Nalanda District Administration"
    },

    agriculture: {
        mainCrops: "धान, आलू, प्याज, गेहूं एवं अन्य फसलें",
        cultivationArea: "जानकारी उपलब्ध नहीं",
        source: "Nalanda District Administration"
    },

    roads: {
        nationalHighway: "जानकारी उपलब्ध नहीं",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Government Data / Nalanda District"
    },

    population: {
        total: "23,68,327",
        male: "12,36,467",
        female: "11,31,860",
        area: "2367 sq. km",
        density: "1006 प्रति वर्ग किमी",
        sexRatio: "915",
        year: 2011,
        source: "Nalanda District Administration / Census 2011"
    },

    districtInfo: {
        headquarters: "बिहारशरीफ",
        established: "9 नवंबर 1972",
        area: "2367 वर्ग किमी",
        subdivisions: 3,
        blocks: 20,
        villages: 1084,
        panchayats: "जानकारी अपडेट की जाएगी",
        source: "Nalanda District Administration"
    },

    geography: {
        location: "दक्षिण-मध्य बिहार",
        geographicalRegion: "मगध क्षेत्र का मैदानी एवं पहाड़ी क्षेत्र",
        majorRivers: "फल्गु, मोहाने",
        source: "Nalanda District Administration"
    },

    transport: {
        railwayStations: "बिहारशरीफ, राजगीर, नालंदा, हरनौत",
        nationalHighway: "जानकारी उपलब्ध नहीं",
        airport: "निकटतम प्रमुख हवाई अड्डा: जयप्रकाश नारायण अंतरराष्ट्रीय हवाई अड्डा, पटना",
        source: "Nalanda District Administration"
    }
},nalanda: {

    education: {
        literacyRate: 64.43,
        maleLiteracyRate: "जानकारी उपलब्ध नहीं",
        femaleLiteracyRate: "जानकारी उपलब्ध नहीं",
        year: 2011,
        source: "Census 2011 / Nalanda District Administration"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Nalanda District Administration"
    },

    agriculture: {
        mainCrops: "धान, आलू, प्याज, गेहूं एवं अन्य फसलें",
        cultivationArea: "जानकारी उपलब्ध नहीं",
        source: "Nalanda District Administration"
    },

    roads: {
        nationalHighway: "जानकारी उपलब्ध नहीं",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Government Data / Nalanda District"
    },

    population: {
        total: "23,68,327",
        male: "12,36,467",
        female: "11,31,860",
        area: "2367 sq. km",
        density: "1006 प्रति वर्ग किमी",
        sexRatio: "915",
        year: 2011,
        source: "Nalanda District Administration / Census 2011"
    },

    districtInfo: {
        headquarters: "बिहारशरीफ",
        established: "9 नवंबर 1972",
        area: "2367 वर्ग किमी",
        subdivisions: 3,
        blocks: 20,
        villages: 1084,
        panchayats: "जानकारी अपडेट की जाएगी",
        source: "Nalanda District Administration"
    },

    geography: {
        location: "दक्षिण-मध्य बिहार",
        geographicalRegion: "मगध क्षेत्र का मैदानी एवं पहाड़ी क्षेत्र",
        majorRivers: "फल्गु, मोहाने",
        source: "Nalanda District Administration"
    },

    transport: {
        railwayStations: "बिहारशरीफ, राजगीर, नालंदा, हरनौत",
        nationalHighway: "जानकारी उपलब्ध नहीं",
        airport: "निकटतम प्रमुख हवाई अड्डा: जयप्रकाश नारायण अंतरराष्ट्रीय हवाई अड्डा, पटना",
        source: "Nalanda District Administration"
    }
},

    // 25. नवादा
    nawada: {

    education: {
        literacyRate: 59.76,
        maleLiteracyRate: 69.98,
        femaleLiteracyRate: 48.86,
        year: 2011,
        source: "Census 2011 / Nawada District Administration"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Nawada District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूं, मक्का, चना, तिलहन, मूंगफली एवं आलू",
        cultivationArea: "कृषि मुख्य आजीविका का आधार",
        source: "Nawada District Administration"
    },

    roads: {
        nationalHighway: "NH-31, NH-82",
        stateHighway: "4 राज्य राजमार्ग",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Nawada District Administration"
    },

    population: {
        total: "22,19,146",
        male: "11,44,668",
        female: "10,74,478",
        area: "2494 sq. km",
        density: "890 प्रति वर्ग किमी",
        sexRatio: "939",
        year: 2011,
        source: "Census 2011 / Nawada District Administration"
    },

    districtInfo: {
        headquarters: "नवादा",
        established: "26 जनवरी 1973",
        area: "2494 वर्ग किमी",
        subdivisions: 2,
        blocks: 14,
        villages: 1099,
        panchayats: 182,
        source: "Nawada District Administration"
    },

    geography: {
        location: "दक्षिण बिहार",
        geographicalRegion: "दक्षिण-पश्चिम जलोढ़ मैदान एवं झारखंड सीमा का पहाड़ी क्षेत्र",
        majorRivers: "सकरी, खुरी, पंचाने, भूसरी, तिलैया, धनरजय",
        northernBorder: "नालंदा",
        easternBorder: "शेखपुरा एवं जमुई",
        westernBorder: "गया",
        southernBorder: "कोडरमा एवं गिरिडीह, झारखंड",
        source: "Nawada District Administration"
    },

    transport: {
        railwayStations: "नवादा, वारिसलीगंज, हिसुआ, तिलैया क्षेत्र के रेल संपर्क",
        nationalHighway: "NH-31, NH-82",
        airport: "निकटतम हवाई अड्डा: गया अंतरराष्ट्रीय हवाई अड्डा (लगभग 58 किमी)",
        source: "Nawada District Administration"
    }
},


    // 26. पटना
    patna: {
    education: {
        literacyRate: 70.68,
        maleLiteracyRate: 78.48,
        femaleLiteracyRate: 61.96,
        year: 2011,
        source: "Census of India 2011 / Patna District Administration"
    },

    health: {
        governmentHospitals: 1,
        primaryHealthCentres: 23,
        healthSubCentres: 234,
        source: "Bihar Economic Survey 2018 / Patna District Health Department"
    },

    agriculture: {
        mainCrops: "धान, गेहूं, मक्का, दालें, तिलहन, सब्जियां",
        cultivatedArea: "जानकारी अपडेट की जाएगी",
        source: "Patna District Administration"
    },

    roads: {
        nationalHighway: "जानकारी अपडेट की जाएगी",
        stateHighway: "जानकारी अपडेट की जाएगी",
        districtRoad: "जानकारी अपडेट की जाएगी",
        ruralRoad: "जानकारी अपडेट की जाएगी",
        source: "Government of Bihar / Patna District"
    },

    population: {
        total: "58,38,465",
        male: "30,78,512",
        female: "27,59,953",
        area: "3202 वर्ग किमी",
        density: "1823 प्रति वर्ग किमी",
        sexRatio: "897",
        year: 2011,
        source: "Census of India 2011 / Patna District Administration"
    },

    districtInfo: {
        headquarters: "पटना",
        subdivisions: 6,
        blocks: 23,
        panchayats: 322,
        villages: 1395,
        source: "Patna District Administration"
    },

    geography: {
        location: "बिहार के मध्य भाग में, गंगा नदी के दक्षिणी तट पर",
        geographicalRegion: "गंगा का उपजाऊ मैदानी क्षेत्र",
        majorRivers: "गंगा, सोन, पुनपुन",
        source: "Patna District Administration"
    },

    transport: {
        railwayStations: "पटना जंक्शन, राजेंद्र नगर टर्मिनल, दानापुर जंक्शन, पाटलिपुत्र जंक्शन",
        nationalHighway: "NH-22, NH-31",
        airport: "जयप्रकाश नारायण अंतरराष्ट्रीय हवाई अड्डा, पटना",
        source: "Patna District Administration"
    }
},


    // 27. पूर्णिया
    purnia: {

    education: {
        literacyRate: 52.49,
        maleLiteracyRate: 61.09,
        femaleLiteracyRate: 43.19,
        year: 2011,
        source: "Census 2011 / Purnea District Administration"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Purnea District Administration"
    },

    agriculture: {
        mainCrops: "धान, जूट, गेहूं, मक्का, बाजरा, केला",
        cultivationArea: "2,08,302 हेक्टेयर (Net Area Sown)",
        source: "Purnea District Administration"
    },

    roads: {
        nationalHighway: "जानकारी उपलब्ध नहीं",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Government Data / Purnea District"
    },

    population: {
        total: "32,64,619",
        male: "16,99,370",
        female: "15,65,249",
        area: "3229 sq. km",
        density: "1011 प्रति वर्ग किमी",
        sexRatio: "930",
        year: 2011,
        source: "Census 2011 / Purnea District Administration"
    },

    districtInfo: {
        headquarters: "पूर्णिया",
        area: "3229 वर्ग किमी",
        subdivisions: 4,
        blocks: 14,
        villages: 1226,
        panchayats: 246,
        source: "Purnea District Administration"
    },

    geography: {
        location: "बिहार के उत्तर-पूर्वी भाग में",
        geographicalRegion: "गंगा के उत्तरी जलोढ़ मैदान",
        majorRivers: "कोसी, महानंदा, पनार, सुवाड़ा काली, कोली",
        northernBorder: "अररिया",
        southernBorder: "कटिहार",
        easternBorder: "किशनगंज एवं पश्चिम बंगाल क्षेत्र",
        westernBorder: "मधेपुरा एवं अररिया",
        source: "Purnea District Administration"
    },

    transport: {
        railwayStations: "पूर्णिया जंक्शन, पूर्णिया कोर्ट, बनमनखी",
        nationalHighway: "जानकारी उपलब्ध नहीं",
        airport: "पूर्णिया हवाई अड्डा",
        source: "Purnea District Administration"
    }
},

    // 28. रोहतास
    rohtas: {

    education: {
        literacyRate: 75.59,
        maleLiteracyRate: "जानकारी उपलब्ध नहीं",
        femaleLiteracyRate: "जानकारी उपलब्ध नहीं",
        year: 2011,
        source: "Rohtas District Administration / Census 2011"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Rohtas District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूं, मक्का, दलहन, तिलहन एवं सब्जियां",
        cultivationArea: "जानकारी उपलब्ध नहीं",
        source: "Rohtas District Administration"
    },

    roads: {
        nationalHighway: "NH-19 (पुराना NH-2)",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Rohtas District Administration"
    },

    population: {
        total: "29,62,593",
        male: "15,47,856",
        female: "14,14,737",
        area: "3847.82 sq. km",
        density: "जानकारी उपलब्ध नहीं",
        sexRatio: "914",
        year: 2011,
        source: "Rohtas District Administration / Census 2011"
    },

    districtInfo: {
        headquarters: "सासाराम",
        established: "10 नवंबर 1972",
        area: "3847.82 वर्ग किमी",
        subdivisions: 3,
        blocks: 19,
        villages: 2072,
        panchayats: 245,
        source: "Rohtas District Administration"
    },

    geography: {
        location: "दक्षिण-पश्चिम बिहार",
        geographicalRegion: "मैदानी एवं कैमूर पठारी क्षेत्र",
        majorRivers: "सोन, कर्मनाशा, दुर्गावती",
        northernBorder: "भोजपुर एवं बक्सर",
        southernBorder: "पलामू एवं गढ़वा, झारखंड",
        easternBorder: "औरंगाबाद एवं गया",
        westernBorder: "कैमूर",
        source: "Rohtas District Administration"
    },

    transport: {
        railwayStations: "सासाराम जंक्शन, डेहरी-ऑन-सोन, बिक्रमगंज",
        nationalHighway: "NH-19",
        airport: "निकटतम प्रमुख हवाई अड्डा: गया, पटना एवं वाराणसी",
        source: "Rohtas District Administration"
    }
},rohtas: {

    education: {
        literacyRate: 75.59,
        maleLiteracyRate: "जानकारी उपलब्ध नहीं",
        femaleLiteracyRate: "जानकारी उपलब्ध नहीं",
        year: 2011,
        source: "Rohtas District Administration / Census 2011"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Rohtas District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूं, मक्का, दलहन, तिलहन एवं सब्जियां",
        cultivationArea: "जानकारी उपलब्ध नहीं",
        source: "Rohtas District Administration"
    },

    roads: {
        nationalHighway: "NH-19 (पुराना NH-2)",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Rohtas District Administration"
    },

    population: {
        total: "29,62,593",
        male: "15,47,856",
        female: "14,14,737",
        area: "3847.82 sq. km",
        density: "जानकारी उपलब्ध नहीं",
        sexRatio: "914",
        year: 2011,
        source: "Rohtas District Administration / Census 2011"
    },

    districtInfo: {
        headquarters: "सासाराम",
        established: "10 नवंबर 1972",
        area: "3847.82 वर्ग किमी",
        subdivisions: 3,
        blocks: 19,
        villages: 2072,
        panchayats: 245,
        source: "Rohtas District Administration"
    },

    geography: {
        location: "दक्षिण-पश्चिम बिहार",
        geographicalRegion: "मैदानी एवं कैमूर पठारी क्षेत्र",
        majorRivers: "सोन, कर्मनाशा, दुर्गावती",
        northernBorder: "भोजपुर एवं बक्सर",
        southernBorder: "पलामू एवं गढ़वा, झारखंड",
        easternBorder: "औरंगाबाद एवं गया",
        westernBorder: "कैमूर",
        source: "Rohtas District Administration"
    },

    transport: {
        railwayStations: "सासाराम जंक्शन, डेहरी-ऑन-सोन, बिक्रमगंज",
        nationalHighway: "NH-19",
        airport: "निकटतम प्रमुख हवाई अड्डा: गया, पटना एवं वाराणसी",
        source: "Rohtas District Administration"
    }
},

    // 29. सहरसा
    saharsa: {

    education: {
        literacyRate: 53.20,
        maleLiteracyRate: "जानकारी उपलब्ध नहीं",
        femaleLiteracyRate: "जानकारी उपलब्ध नहीं",
        year: 2011,
        source: "Census 2011 / Saharsa District Administration"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Saharsa District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूं, मक्का, जूट, दलहन एवं मखाना",
        cultivationArea: "जानकारी उपलब्ध नहीं",
        source: "Saharsa District Administration"
    },

    roads: {
        nationalHighway: "जानकारी उपलब्ध नहीं",
        stateHighway: "SH-95",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Government of Bihar / Saharsa District"
    },

    population: {
        total: "19,00,661",
        male: "9,97,174",
        female: "9,03,487",
        area: "1687 sq. km",
        density: "1127 प्रति वर्ग किमी",
        sexRatio: "906",
        year: 2011,
        source: "Census 2011 / Saharsa District Administration"
    },

    districtInfo: {
        headquarters: "सहरसा",
        established: "1 अप्रैल 1954",
        area: "1687 वर्ग किमी",
        subdivisions: 2,
        blocks: 10,
        villages: 445,
        panchayats: 135,
        source: "Saharsa District Administration"
    },

    geography: {
        location: "उत्तर बिहार",
        geographicalRegion: "कोसी नदी बेसिन का मैदानी एवं बाढ़ प्रभावित क्षेत्र",
        majorRivers: "कोसी, बलान, तिलावे",
        northernBorder: "सुपौल एवं मधेपुरा",
        southernBorder: "खगड़िया",
        easternBorder: "मधेपुरा",
        westernBorder: "दरभंगा एवं समस्तीपुर क्षेत्र",
        source: "Saharsa District Administration"
    },

    transport: {
        railwayStations: "सहरसा जंक्शन, सिमरी बख्तियारपुर, सोनबरसा कचहरी",
        nationalHighway: "जानकारी उपलब्ध नहीं",
        airport: "निकटतम प्रमुख हवाई अड्डा: दरभंगा एवं पटना",
        source: "Saharsa District Administration"
    }
},

    // 30. समस्तीपुर
    samastipur: {

    education: {
        literacyRate: 61.86,
        maleLiteracyRate: 71.25,
        femaleLiteracyRate: 51.51,
        year: 2011,
        source: "Census 2011 / Samastipur District Administration"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Samastipur District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूं, मक्का, दलहन, तिलहन, गन्ना एवं सब्जियां",
        cultivationArea: "जानकारी उपलब्ध नहीं",
        source: "Samastipur District Administration"
    },

    roads: {
        nationalHighway: "NH-28",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Samastipur District Administration"
    },

    population: {
        total: "42,61,566",
        male: "22,30,003",
        female: "20,31,563",
        area: "2904 sq. km",
        density: "1467 प्रति वर्ग किमी",
        sexRatio: "911",
        year: 2011,
        source: "Census 2011 / Samastipur District Administration"
    },

    districtInfo: {
        headquarters: "समस्तीपुर",
        established: "14 नवंबर 1972",
        area: "2904 वर्ग किमी",
        subdivisions: 4,
        blocks: 20,
        villages: 1260,
        panchayats: 343,
        source: "Samastipur District Administration"
    },

    geography: {
        location: "उत्तर बिहार",
        geographicalRegion: "गंगा के उत्तरी उपजाऊ मैदानी क्षेत्र",
        majorRivers: "बागमती, बूढ़ी गंडक, गंगा",
        northernBorder: "दरभंगा",
        southernBorder: "गंगा नदी",
        easternBorder: "बेगूसराय एवं खगड़िया",
        westernBorder: "वैशाली एवं मुजफ्फरपुर",
        source: "Samastipur District Administration"
    },

    transport: {
        railwayStations: "समस्तीपुर जंक्शन, दलसिंहसराय, रोसड़ा",
        nationalHighway: "NH-28",
        airport: "निकटतम प्रमुख हवाई अड्डा: दरभंगा एवं जयप्रकाश नारायण अंतरराष्ट्रीय हवाई अड्डा, पटना",
        source: "Samastipur District Administration"
    }
},

    // 31. सारण
    saran: {

    education: {
        literacyRate: 65.96,
        maleLiteracyRate: 77.03,
        femaleLiteracyRate: 54.42,
        year: 2011,
        source: "Census 2011 / Saran District Administration"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Saran District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूं, मक्का, दलहन, तिलहन, गन्ना एवं सब्जियां",
        cultivationArea: "जानकारी उपलब्ध नहीं",
        source: "Saran District Administration"
    },

    roads: {
        nationalHighway: "जानकारी उपलब्ध नहीं",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Government Data / Saran District"
    },

    population: {
        total: "39,51,862",
        male: "20,22,821",
        female: "19,29,041",
        area: "2641 sq. km",
        density: "1496 प्रति वर्ग किमी",
        sexRatio: "954",
        year: 2011,
        source: "Census 2011 / Saran District Administration"
    },

    districtInfo: {
        headquarters: "छपरा",
        area: "2641 वर्ग किमी",
        subdivisions: 3,
        blocks: 20,
        villages: 1807,
        panchayats: "जानकारी उपलब्ध नहीं",
        source: "Saran District Administration"
    },

    geography: {
        location: "उत्तर-पश्चिम बिहार",
        geographicalRegion: "गंगा के उत्तरी उपजाऊ मैदानी क्षेत्र",
        majorRivers: "गंगा, घाघरा, गंडक",
        northernBorder: "गोपालगंज एवं मुजफ्फरपुर",
        southernBorder: "गंगा नदी एवं पटना",
        easternBorder: "वैशाली",
        westernBorder: "सीवान एवं उत्तर प्रदेश",
        source: "Saran District Administration"
    },

    transport: {
        railwayStations: "छपरा जंक्शन, छपरा कचहरी, सोनपुर जंक्शन",
        nationalHighway: "जानकारी उपलब्ध नहीं",
        airport: "निकटतम प्रमुख हवाई अड्डा: जयप्रकाश नारायण अंतरराष्ट्रीय हवाई अड्डा, पटना",
        source: "Saran District Administration"
    }
},

    // 32. शेखपुरा
    sheikhpura: {

    education: {
        literacyRate: 65.96,
        maleLiteracyRate: "जानकारी उपलब्ध नहीं",
        femaleLiteracyRate: "जानकारी उपलब्ध नहीं",
        year: 2011,
        source: "Census 2011 / Sheikhpura District Administration"
    },

    health: {
        governmentHospitals: 2,
        primaryHealthCentres: 3,
        healthSubCentres: 74,
        source: "Sheikhpura District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूं, मक्का, दलहन, तिलहन एवं सब्जियां",
        cultivationArea: "49,766 हेक्टेयर",
        source: "Sheikhpura District Administration"
    },

    roads: {
        nationalHighway: "1 राष्ट्रीय राजमार्ग",
        stateHighway: "39.9 km",
        districtRoad: "105 km (PWD Roads)",
        ruralRoad: "326 km",
        source: "Sheikhpura District Administration"
    },

    population: {
        total: "6,36,342",
        male: "3,29,743",
        female: "3,06,599",
        area: "689 sq. km",
        density: "922 प्रति वर्ग किमी",
        sexRatio: "926",
        year: 2011,
        source: "Census 2011 / Sheikhpura District Administration"
    },

    districtInfo: {
        headquarters: "शेखपुरा",
        established: "31 जुलाई 1994",
        area: "689 वर्ग किमी",
        subdivisions: 1,
        blocks: 6,
        villages: 310,
        panchayats: 54,
        source: "Sheikhpura District Administration"
    },

    geography: {
        location: "दक्षिण-मध्य बिहार",
        geographicalRegion: "पहाड़ी एवं उपजाऊ मैदानी क्षेत्र",
        majorRivers: "सोमी, कोरिहारी, टाटी, कच्ची, रिजाउन",
        northernBorder: "नालंदा एवं पटना",
        southernBorder: "नवादा एवं जमुई",
        easternBorder: "लखीसराय",
        westernBorder: "नालंदा एवं नवादा",
        source: "Sheikhpura District Administration"
    },

    transport: {
        railwayStations: "शेखपुरा, बरबीघा एवं अन्य स्थानीय स्टेशन",
        nationalHighway: "NH-333A",
        airport: "निकटतम प्रमुख हवाई अड्डा: जयप्रकाश नारायण अंतरराष्ट्रीय हवाई अड्डा, पटना",
        source: "Sheikhpura District Administration"
    }
},

    // 33. शिवहर
    sheohar: {

    education: {
        literacyRate: 53.78,
        maleLiteracyRate: 61.31,
        femaleLiteracyRate: 45.26,
        year: 2011,
        source: "Census 2011 / Sheohar District Administration"
    },

    health: {
        governmentHospitals: "15 अस्पताल",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Sheohar District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूं, मक्का, दलहन, तिलहन एवं सब्जियां",
        cultivationArea: "जानकारी उपलब्ध नहीं",
        source: "Sheohar District Administration"
    },

    roads: {
        nationalHighway: "जानकारी उपलब्ध नहीं",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Sheohar District Administration"
    },

    population: {
        total: "6,56,246",
        male: "3,46,673",
        female: "3,09,573",
        area: "442.99 sq. km",
        density: "1882 प्रति वर्ग किमी",
        sexRatio: "893",
        year: 2011,
        source: "Census 2011 / Sheohar District Administration"
    },

    districtInfo: {
        headquarters: "शिवहर",
        established: "1994",
        area: "442.99 वर्ग किमी",
        subdivisions: 1,
        blocks: 5,
        villages: 203,
        panchayats: 53,
        source: "Sheohar District Administration"
    },

    geography: {
        location: "उत्तर बिहार",
        geographicalRegion: "तिरहुत प्रमंडल का मैदानी एवं बाढ़ प्रभावित क्षेत्र",
        majorRivers: "बागमती, बूढ़ी गंडक",
        northernBorder: "सीतामढ़ी",
        easternBorder: "सीतामढ़ी",
        southernBorder: "मुजफ्फरपुर",
        westernBorder: "पूर्वी चंपारण",
        source: "Sheohar District Administration"
    },

    transport: {
        railwayStations: "शिवहर में प्रमुख रेलवे स्टेशन उपलब्ध नहीं",
        nationalHighway: "जानकारी उपलब्ध नहीं",
        airport: "निकटतम प्रमुख हवाई अड्डा: दरभंगा / पटना",
        source: "Sheohar District Administration"
    }
},

    // 34. सीतामढ़ी
    sitamarhi: {

    education: {
        literacyRate: 52.05,
        maleLiteracyRate: "जानकारी उपलब्ध नहीं",
        femaleLiteracyRate: "जानकारी उपलब्ध नहीं",
        year: 2011,
        source: "Census 2011 / Sitamarhi District Administration"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Sitamarhi District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूं, मक्का, गन्ना, दलहन, तिलहन एवं सब्जियां",
        cultivationArea: "जानकारी उपलब्ध नहीं",
        source: "Sitamarhi District Administration"
    },

    roads: {
        nationalHighway: "जानकारी उपलब्ध नहीं",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Government Data / Sitamarhi District"
    },

    population: {
        total: "34,23,574",
        male: "जानकारी उपलब्ध नहीं",
        female: "जानकारी उपलब्ध नहीं",
        area: "2294 sq. km",
        density: "जानकारी उपलब्ध नहीं",
        sexRatio: "जानकारी उपलब्ध नहीं",
        year: 2011,
        source: "Census 2011 / Sitamarhi District Administration"
    },

    districtInfo: {
        headquarters: "डुमरा",
        established: "11 दिसंबर 1972",
        area: "2294 वर्ग किमी",
        subdivisions: 3,
        blocks: 17,
        villages: 845,
        panchayats: 258,
        source: "Sitamarhi District Administration"
    },

    geography: {
        location: "उत्तर बिहार",
        geographicalRegion: "तिरहुत क्षेत्र का उपजाऊ मैदानी एवं बाढ़ प्रभावित क्षेत्र",
        majorRivers: "बागमती, लखनदेई, अधवारा समूह की नदियाँ",
        northernBorder: "नेपाल",
        southernBorder: "मुजफ्फरपुर",
        easternBorder: "दरभंगा एवं मधुबनी",
        westernBorder: "पूर्वी चंपारण एवं शिवहर",
        source: "Sitamarhi District Administration"
    },

    transport: {
        railwayStations: "सीतामढ़ी जंक्शन, बैरगनिया, जनकपुर रोड (पुपरी)",
        nationalHighway: "जानकारी उपलब्ध नहीं",
        airport: "निकटतम प्रमुख हवाई अड्डा: दरभंगा हवाई अड्डा / पटना हवाई अड्डा",
        source: "Sitamarhi District Administration"
    }
},

    // 35. सीवान
    siwan: {

    education: {
        literacyRate: 69.45,
        maleLiteracyRate: 80.23,
        femaleLiteracyRate: 58.66,
        year: 2011,
        source: "Census 2011 / Siwan District Administration"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Siwan District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूं, मक्का, गन्ना, दलहन, तिलहन एवं सब्जियां",
        cultivationArea: "जानकारी उपलब्ध नहीं",
        source: "Siwan District Administration"
    },

    roads: {
        nationalHighway: "जानकारी उपलब्ध नहीं",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Government Data / Siwan District"
    },

    population: {
        total: "33,30,464",
        male: "16,75,090",
        female: "16,55,374",
        area: "2219 sq. km",
        density: "1501 प्रति वर्ग किमी",
        sexRatio: "988",
        year: 2011,
        source: "Census 2011 / Siwan District Administration"
    },

    districtInfo: {
        headquarters: "सिवान",
        established: "1972",
        area: "2219 वर्ग किमी",
        subdivisions: 2,
        blocks: 19,
        villages: 1528,
        panchayats: 293,
        source: "Siwan District Administration"
    },

    geography: {
        location: "बिहार के पश्चिमी भाग में",
        geographicalRegion: "गंगा के उत्तरी उपजाऊ मैदानी क्षेत्र",
        majorRivers: "घाघरा, दाहा एवं स्थानीय नदियाँ",
        northernBorder: "गोपालगंज",
        easternBorder: "सारण",
        southernBorder: "बलिया, उत्तर प्रदेश",
        westernBorder: "देवरिया, उत्तर प्रदेश",
        source: "Siwan District Administration"
    },

    transport: {
        railwayStations: "सिवान जंक्शन, मैरवा, महाराजगंज",
        nationalHighway: "जानकारी उपलब्ध नहीं",
        airport: "निकटतम प्रमुख हवाई अड्डा: कुशीनगर / पटना",
        source: "Siwan District Administration"
    }
},

    // 36. सुपौल
    supaul: {

    education: {
        literacyRate: 57.67,
        maleLiteracyRate: 69.62,
        femaleLiteracyRate: 44.77,
        year: 2011,
        source: "Census 2011 / Supaul District Administration"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "Supaul District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूं, मक्का, जूट, दलहन, तिलहन एवं सब्जियां",
        cultivationArea: "जानकारी उपलब्ध नहीं",
        source: "Supaul District Administration"
    },

    roads: {
        nationalHighway: "जानकारी उपलब्ध नहीं",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Government of Bihar / Supaul District"
    },

    population: {
        total: "22,29,076",
        male: "जानकारी उपलब्ध नहीं",
        female: "जानकारी उपलब्ध नहीं",
        area: "2425 sq. km",
        density: "जानकारी उपलब्ध नहीं",
        sexRatio: "जानकारी उपलब्ध नहीं",
        year: 2011,
        source: "Census 2011 / Supaul District Administration"
    },

    districtInfo: {
        headquarters: "सुपौल",
        area: "2425 वर्ग किमी",
        subdivisions: 4,
        blocks: 11,
        villages: "जानकारी उपलब्ध नहीं",
        panchayats: 181,
        source: "Supaul District Administration"
    },

    geography: {
        location: "उत्तर-पूर्वी बिहार",
        geographicalRegion: "कोसी नदी बेसिन का मैदानी एवं बाढ़ प्रभावित क्षेत्र",
        majorRivers: "कोसी, तिलयुगा एवं अन्य स्थानीय नदियाँ",
        northernBorder: "नेपाल",
        southernBorder: "सहरसा एवं मधेपुरा",
        easternBorder: "अररिया एवं मधेपुरा",
        westernBorder: "सहरसा",
        source: "Supaul District Administration"
    },

    transport: {
        railwayStations: "सुपौल, निर्मली, राघोपुर, सरायगढ़",
        nationalHighway: "जानकारी उपलब्ध नहीं",
        airport: "निकटतम प्रमुख हवाई अड्डा: दरभंगा एवं पूर्णिया",
        source: "Supaul District Administration"
    }
},

    // 37. वैशाली
    vaishali: {

    education: {
        literacyRate: 68.6,
        maleLiteracyRate: 77.0,
        femaleLiteracyRate: 59.1,
        year: 2011,
        source: "Vaishali District Administration / Census 2011"
    },

    health: {
        governmentHospitals: 4,
        primaryHealthCentres: 16,
        healthSubCentres: 490,
        source: "Vaishali District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूं, मक्का, दलहन, तिलहन, गन्ना एवं सब्जियां",
        cultivationArea: "जानकारी उपलब्ध नहीं",
        source: "Vaishali District Administration"
    },

    roads: {
        nationalHighway: "जानकारी उपलब्ध नहीं",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "Government of Bihar / Vaishali District"
    },

    population: {
        total: "34,95,249",
        male: "18,47,049",
        female: "16,48,191",
        area: "2036 sq. km",
        density: "1717 प्रति वर्ग किमी",
        sexRatio: "957",
        year: 2011,
        source: "Vaishali District Administration / Census 2011"
    },

    districtInfo: {
        headquarters: "हाजीपुर",
        area: "2036 वर्ग किमी",
        subdivisions: 3,
        blocks: 16,
        villages: 1569,
        panchayats: 290,
        source: "Vaishali District Administration"
    },

    geography: {
        location: "उत्तर बिहार",
        geographicalRegion: "गंगा के उत्तरी उपजाऊ मैदानी क्षेत्र",
        majorRivers: "गंगा, गंडक, बाया एवं अन्य स्थानीय नदियाँ",
        northernBorder: "मुजफ्फरपुर",
        southernBorder: "गंगा नदी एवं पटना",
        easternBorder: "समस्तीपुर",
        westernBorder: "सारण",
        source: "Vaishali District Administration"
    },

    transport: {
        railwayStations: "हाजीपुर जंक्शन, सोनपुर जंक्शन, महनार रोड",
        nationalHighway: "जानकारी उपलब्ध नहीं",
        airport: "निकटतम प्रमुख हवाई अड्डा: जयप्रकाश नारायण अंतरराष्ट्रीय हवाई अड्डा, पटना",
        source: "Vaishali District Administration"
    }
},

    // 38. पश्चिमी चंपारण
    westChamparan: {

    education: {
        literacyRate: 55.70,
        maleLiteracyRate: "जानकारी उपलब्ध नहीं",
        femaleLiteracyRate: "जानकारी उपलब्ध नहीं",
        year: 2011,
        source: "Census 2011 / West Champaran District Administration"
    },

    health: {
        governmentHospitals: "जानकारी उपलब्ध नहीं",
        primaryHealthCentres: "जानकारी उपलब्ध नहीं",
        healthSubCentres: "जानकारी उपलब्ध नहीं",
        source: "West Champaran District Administration"
    },

    agriculture: {
        mainCrops: "धान, गेहूं, गन्ना, मक्का एवं अन्य कृषि फसलें",
        cultivationArea: "जानकारी उपलब्ध नहीं",
        source: "West Champaran District Administration"
    },

    roads: {
        nationalHighway: "जानकारी उपलब्ध नहीं",
        stateHighway: "जानकारी उपलब्ध नहीं",
        districtRoad: "जानकारी उपलब्ध नहीं",
        ruralRoad: "जानकारी उपलब्ध नहीं",
        source: "West Champaran District Administration"
    },

    population: {
        total: "39,35,042",
        male: "जानकारी उपलब्ध नहीं",
        female: "जानकारी उपलब्ध नहीं",
        area: "5228 sq. km",
        density: "753 प्रति वर्ग किमी",
        sexRatio: "909",
        year: 2011,
        source: "Census 2011 / West Champaran District Administration"
    },

    districtInfo: {
        headquarters: "बेतिया",
        established: "1972",
        area: "5228 वर्ग किमी",
        subdivisions: 3,
        blocks: 18,
        villages: 1483,
        panchayats: 303,
        source: "West Champaran District Administration"
    },

    geography: {
        location: "बिहार का उत्तर-पश्चिमी भाग",
        geographicalRegion: "तराई एवं गंगा के उत्तरी मैदानी क्षेत्र",
        majorRivers: "गंडक, पंडई, हरहा एवं अन्य स्थानीय नदियाँ",
        northernBorder: "नेपाल",
        southernBorder: "गोपालगंज एवं पूर्वी चंपारण का भाग",
        easternBorder: "पूर्वी चंपारण",
        westernBorder: "पडरौना एवं देवरिया, उत्तर प्रदेश",
        source: "West Champaran District Administration"
    },

    transport: {
        railwayStations: "बेतिया, नरकटियागंज जंक्शन, बगहा, वाल्मीकिनगर रोड",
        nationalHighway: "जानकारी उपलब्ध नहीं",
        airport: "निकटतम प्रमुख हवाई अड्डा: कुशीनगर / पटना",
        source: "West Champaran District Administration"
    }
},
};
