// ==========================================
// BIHAR PROGRESS APP - MAIN JAVASCRIPT
// ==========================================


// ==========================================
// 1. DISTRICT NAMES
// ==========================================

const districtNames = {
    araria: "अररिया",
    arwal: "अरवल",
    aurangabad: "औरंगाबाद",
    banka: "बांका",
    begusarai: "बेगूसराय",
    bhagalpur: "भागलपुर",
    bhojpur: "भोजपुर",
    buxar: "बक्सर",
    darbhanga: "दरभंगा",
    eastChamparan: "पूर्वी चंपारण",
    gaya: "गया",
    gopalganj: "गोपालगंज",
    jamui: "जमुई",
    jehanabad: "जहानाबाद",
    khagaria: "खगड़िया",
    kishanganj: "किशनगंज",
    kaimur: "कैमूर",
    katihar: "कटिहार",
    khagaria: "खगड़िया",
    lakhisarai: "लखीसराय",
    madhepura: "मधेपुरा",
    madhubani: "मधुबनी",
    munger: "मुंगेर",
    muzaffarpur: "मुजफ्फरपुर",
    nalanda: "नालंदा",
    nawada: "नवादा",
    patna: "पटना",
    purnia: "पूर्णिया",
    rohtas: "रोहतास",
    saharsa: "सहरसा",
    samastipur: "समस्तीपुर",
    saran: "सारण",
    sheikhpura: "शेखपुरा",
    sheohar: "शिवहर",
    sitamarhi: "सीतामढ़ी",
    siwan: "सिवान",
    supaul: "सुपौल",
    vaishali: "वैशाली",
    westChamparan: "पश्चिम चंपारण"
};


// ==========================================
// 2. DISTRICT DROPDOWN
// ==========================================

const districtSelect = document.getElementById("districtSelect");


// अगर data.js में district मौजूद हैं
if (typeof biharData !== "undefined") {

    Object.keys(biharData).forEach(function (district) {

        // पहले से option मौजूद है या नहीं
        const existingOption =
            districtSelect.querySelector(`option[value="${district}"]`);

        if (!existingOption) {

            const option = document.createElement("option");

            option.value = district;

            option.textContent =
                districtNames[district] || district;

            districtSelect.appendChild(option);
        }

    });

}


// ==========================================
// 3. DASHBOARD FUNCTION
// ==========================================

function showDistrictDashboard(district) {

    // पुराना dashboard हटाएं
    const oldDashboard =
        document.getElementById("dashboard");

    if (oldDashboard) {
        oldDashboard.remove();
    }


    // जिला select नहीं है
    if (!district) {
        return;
    }


    // Data check
    if (typeof biharData === "undefined") {

        alert("data.js load नहीं हुआ है।");

        return;
    }


    const data = biharData[district];


    if (!data) {

        alert("इस जिले का data अभी उपलब्ध नहीं है।");

        return;
    }


    // Dashboard बनाएं
    const dashboard =
        document.createElement("div");

    dashboard.id = "dashboard";


    dashboard.innerHTML = `

        <div class="district-header">

            <h2>
                ${districtNames[district] || district}
            </h2>

            <p>
                जिले के विकास की जानकारी
            </p>

        </div>


        <!-- ================= शिक्षा ================= -->

        <div class="section-title">
            <h2>📚 शिक्षा</h2>
        </div>

        <div class="progress-grid">

            <div class="progress-card">
                <div class="progress-icon">📖</div>
                <h3>साक्षरता दर</h3>
                <strong>
                    ${data.education?.literacyRate ?? "जानकारी उपलब्ध नहीं"}
                </strong>
            </div>


            <div class="progress-card">
                <div class="progress-icon">👨‍🎓</div>
                <h3>पुरुष साक्षरता</h3>
                <strong>
                    ${data.education?.maleLiteracyRate ?? "जानकारी उपलब्ध नहीं"}
                </strong>
            </div>


            <div class="progress-card">
                <div class="progress-icon">👩‍🎓</div>
                <h3>महिला साक्षरता</h3>
                <strong>
                    ${data.education?.femaleLiteracyRate ?? "जानकारी उपलब्ध नहीं"}
                </strong>
            </div>


            <div class="progress-card">
                <div class="progress-icon">📅</div>
                <h3>डेटा वर्ष</h3>
                <strong>
                    ${data.education?.year ?? "जानकारी उपलब्ध नहीं"}
                </strong>
            </div>

        </div>


        <!-- ================= स्वास्थ्य ================= -->

        <div class="section-title">
            <h2>🏥 स्वास्थ्य</h2>
        </div>

        <div class="progress-grid">

            <div class="progress-card">
                <div class="progress-icon">🏥</div>
                <h3>सरकारी अस्पताल</h3>
                <strong>
                    ${data.health?.governmentHospitals ?? "जानकारी उपलब्ध नहीं"}
                </strong>
            </div>


            <div class="progress-card">
                <div class="progress-icon">🏥</div>
                <h3>प्राथमिक स्वास्थ्य केंद्र</h3>
                <strong>
                    ${data.health?.primaryHealthCentres ?? "जानकारी उपलब्ध नहीं"}
                </strong>
            </div>


            <div class="progress-card">
                <div class="progress-icon">🩺</div>
                <h3>उप स्वास्थ्य केंद्र</h3>
                <strong>
                    ${data.health?.healthSubCentres ?? "जानकारी उपलब्ध नहीं"}
                </strong>
            </div>

        </div>


        <!-- ================= कृषि ================= -->

        <div class="section-title">
            <h2>🌾 कृषि</h2>
        </div>

        <div class="progress-grid">

            <div class="progress-card">
                <div class="progress-icon">🌾</div>
                <h3>मुख्य फसलें</h3>
                <p>
                    ${data.agriculture?.mainCrops ?? "जानकारी उपलब्ध नहीं"}
                </p>
            </div>


            <div class="progress-card">
                <div class="progress-icon">🚜</div>
                <h3>कृषि क्षेत्र</h3>
                <p>
                    ${data.agriculture?.cultivatedArea ??
                      data.agriculture?.irrigationArea ??
                      "जानकारी उपलब्ध नहीं"}
                </p>
            </div>

        </div>


        <!-- ================= जनसंख्या ================= -->

        <div class="section-title">
            <h2>👥 जनसंख्या</h2>
        </div>

        <div class="progress-grid">

            <div class="progress-card">
                <div class="progress-icon">👥</div>
                <h3>कुल जनसंख्या</h3>
                <strong>
                    ${data.population?.total ??
                      data.districtInfo?.population ??
                      "जानकारी उपलब्ध नहीं"}
                </strong>
            </div>


            <div class="progress-card">
                <div class="progress-icon">👨</div>
                <h3>पुरुष</h3>
                <strong>
                    ${data.population?.male ??
                      "जानकारी उपलब्ध नहीं"}
                </strong>
            </div>


            <div class="progress-card">
                <div class="progress-icon">👩</div>
                <h3>महिला</h3>
                <strong>
                    ${data.population?.female ??
                      "जानकारी उपलब्ध नहीं"}
                </strong>
            </div>


            <div class="progress-card">
                <div class="progress-icon">⚖️</div>
                <h3>लिंग अनुपात</h3>
                <strong>
                    ${data.population?.sexRatio ??
                      data.districtInfo?.sexRatio ??
                      "जानकारी उपलब्ध नहीं"}
                </strong>
            </div>

        </div>


        <!-- ================= सड़क ================= -->

        <div class="section-title">
            <h2>🛣️ सड़क</h2>
        </div>

        <div class="progress-grid">

            <div class="progress-card">
                <div class="progress-icon">🛣️</div>
                <h3>राष्ट्रीय राजमार्ग</h3>
                <p>
                    ${data.roads?.nationalHighway ??
                      data.transport?.nationalHighway ??
                      "जानकारी उपलब्ध नहीं"}
                </p>
            </div>


            <div class="progress-card">
                <div class="progress-icon">🛤️</div>
                <h3>राज्य राजमार्ग</h3>
                <p>
                    ${data.roads?.stateHighway ??
                      "जानकारी उपलब्ध नहीं"}
                </p>
            </div>


            <div class="progress-card">
                <div class="progress-icon">🚗</div>
                <h3>जिला सड़क</h3>
                <p>
                    ${data.roads?.districtRoad ??
                      "जानकारी उपलब्ध नहीं"}
                </p>
            </div>

        </div>


        <!-- ================= परिवहन ================= -->

        <div class="section-title">
            <h2>🚆 परिवहन</h2>
        </div>

        <div class="progress-grid">

            <div class="progress-card">
                <div class="progress-icon">🚆</div>
                <h3>रेलवे स्टेशन</h3>
                <p>
                    ${data.transport?.railwayStations ??
                      "जानकारी उपलब्ध नहीं"}
                </p>
            </div>


            <div class="progress-card">
                <div class="progress-icon">✈️</div>
                <h3>हवाई अड्डा</h3>
                <p>
                    ${data.transport?.airport ??
                      "जानकारी उपलब्ध नहीं"}
                </p>
            </div>

        </div>


        <!-- ================= भूगोल ================= -->

        <div class="section-title">
            <h2>🌍 भौगोलिक जानकारी</h2>
        </div>

        <div class="progress-grid">

            <div class="progress-card">
                <div class="progress-icon">📍</div>
                <h3>स्थान</h3>
                <p>
                    ${data.geography?.location ??
                      "जानकारी उपलब्ध नहीं"}
                </p>
            </div>


            <div class="progress-card">
                <div class="progress-icon">🌊</div>
                <h3>प्रमुख नदियाँ</h3>
                <p>
                    ${data.geography?.majorRivers ??
                      data.water?.majorRivers ??
                      "जानकारी उपलब्ध नहीं"}
                </p>
            </div>


            <div class="progress-card">
                <div class="progress-icon">🗺️</div>
                <h3>भौगोलिक क्षेत्र</h3>
                <p>
                    ${data.geography?.geographicalRegion ??
                      data.environment?.geographicalRegion ??
                      "जानकारी उपलब्ध नहीं"}
                </p>
            </div>

        </div>


        <!-- ================= जिला जानकारी ================= -->

        <div class="section-title">
            <h2>🏛️ जिला जानकारी</h2>
        </div>

        <div class="progress-grid">

            <div class="progress-card">
                <div class="progress-icon">🏢</div>
                <h3>मुख्यालय</h3>
                <p>
                    ${data.districtInfo?.headquarters ??
                      "जानकारी उपलब्ध नहीं"}
                </p>
            </div>


            <div class="progress-card">
                <div class="progress-icon">📊</div>
                <h3>अनुमंडल</h3>
                <p>
                    ${data.districtInfo?.subdivisions ??
                      data.districtInfo?.subdivision ??
                      "जानकारी उपलब्ध नहीं"}
                </p>
            </div>


            <div class="progress-card">
                <div class="progress-icon">🏘️</div>
                <h3>प्रखंड</h3>
                <p>
                    ${data.districtInfo?.blocks ??
                      "जानकारी उपलब्ध नहीं"}
                </p>
            </div>

        </div>


        <!-- ================= SOURCE ================= -->

        <div class="source-box">

            <p>
                <strong>Source:</strong>
                ${data.education?.source ||
                  data.districtInfo?.source ||
                  data.geography?.source ||
                  "Government Data"}
            </p>

        </div>

    `;


    // Dashboard जोड़ें
    document.body.appendChild(dashboard);


    // Dashboard तक scroll
    dashboard.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// ==========================================
// 4. DROPDOWN CHANGE
// ==========================================

districtSelect.addEventListener("change", function () {

    const district = this.value;

    showDistrictDashboard(district);

});

// 🔎 हिंदी जिला Search

const districtSearch = document.getElementById("districtSearch");

districtSearch.addEventListener("input", function () {

    const searchText = this.value.trim();

    const options = districtSelect.querySelectorAll("option");

    let matchedOption = null;

    options.forEach(function (option, index) {

        if (index === 0) return;

        const districtName = option.textContent.trim();

        // Search के अनुसार option छिपाएँ
        option.hidden = searchText !== "" &&
                        !districtName.includes(searchText);

        // Exact district मिलने पर उसे select करें
        if (districtName === searchText) {
            matchedOption = option;
        }
    });

    // जिला मिल गया तो automatically select करें
    if (matchedOption) {

        districtSelect.value = matchedOption.value;

        showDistrictDashboard(matchedOption.value);
    }

});


// ==========================================
// 5. BIHAR MAP
// ==========================================

let selectedDistrictLayer = null;

const map = L.map("biharMap", {
    center: [25.8, 85.7],
    zoom: 7,
    minZoom: 7,
    maxZoom: 11,
    zoomControl: true,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    dragging: true,
    zoomAnimation: false,
    fadeAnimation: false,
    markerZoomAnimation: false
});


L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);

setTimeout(function () {
    map.invalidateSize();
    map.setView([25.8, 85.7], 7, {
        animate: false
    });
}, 500);


// ==========================================
// 6. DISTRICT NAME → DATA KEY
// ==========================================

function getDistrictKey(name) {

    if (!name) return null;

    // नाम को standard format में बदलना
    const cleanName = name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]/g, "");

    // Special district names
    const aliases = {

        // Champaran
        "westchamparan": "westChamparan",
        "paschimchamparan": "westChamparan",
        "pashchimchamparan": "westChamparan",

        "eastchamparan": "eastChamparan",
        "purbachamparan": "eastChamparan",
        "purvachamparan": "eastChamparan",

        // Kaimur / Bhabua
        "kaimur": "kaimur",
        "kaimurbhabua": "kaimur",

        // Saran / Chapra
        "saran": "saran",
        "saranchapra": "saran",
        "saranchhapra": "saran",
        "chapra": "saran"
    };

    // पहले special names check करें
    if (aliases[cleanName]) {
        return aliases[cleanName];
    }

    // बाकी districts को data.js की keys से automatically match करें
    for (const key of Object.keys(biharData)) {

        const normalizedKey = key
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "");

        if (normalizedKey === cleanName) {
            return key;
        }
    }

    // अगर district नहीं मिला
    console.log("Data key नहीं मिला:", name);
    return null;
}


// ==========================================
// 7. GEOJSON LOAD
// ==========================================

fetch("bihar-districts.geojson")

    .then(response => {

        if (!response.ok) {
            throw new Error(
                "GeoJSON file नहीं मिला"
            );
        }

        return response.json();

    })

    .then(data => {

        L.geoJSON(data, {

            style: {

                color: "#333",

                weight: 1,

                fillColor: "#4CAF50",

                fillOpacity: 0.6

            },


            onEachFeature:
                function(feature, layer) {

                    if (!feature.properties) {
                        return;
                    }


                    const districtName =

                        feature.properties.DISTRICT ||

                        feature.properties.district ||

                        feature.properties.District ||

                        feature.properties.NAME ||

                        feature.properties.name ||

                        "Bihar District";

                        // District name को Hindi में बदलें
const hindiDistrictNames = {
    araria: "अररिया",
    arwal: "अरवल",
    aurangabad: "औरंगाबाद",
    banka: "बांका",
    begusarai: "बेगूसराय",
    bhagalpur: "भागलपुर",
    bhojpur: "भोजपुर",
    buxar: "बक्सर",
    darbhanga: "दरभंगा",
    eastChamparan: "पूर्वी चंपारण",
    gaya: "गया",
    gopalganj: "गोपालगंज",
    jamui: "जमुई",
    jehanabad: "जहानाबाद",
    khagaria: "खगड़िया",
    kishanganj: "किशनगंज",
    kaimur: "कैमूर",
    katihar: "कटिहार",
    lakhisarai: "लखीसराय",
    madhepura: "मधेपुरा",
    madhubani: "मधुबनी",
    munger: "मुंगेर",
    muzaffarpur: "मुजफ्फरपुर",
    nalanda: "नालंदा",
    nawada: "नवादा",
    patna: "पटना",
    purnia: "पूर्णिया",
    rohtas: "रोहतास",
    saharsa: "सहरसा",
    samastipur: "समस्तीपुर",
    saran: "सारण",
    sheikhpura: "शेखपुरा",
    sheohar: "शिवहर",
    sitamarhi: "सीतामढ़ी",
    siwan: "सिवान",
    supaul: "सुपौल",
    vaishali: "वैशाली",
    westChamparan: "पश्चिम चंपारण"
};

const districtKey = getDistrictKey(districtName);

const hindiName =
    hindiDistrictNames[districtKey] || districtName;

layer.bindPopup(hindiName);

// Mouse hover effect
layer.on({
    mouseover: function () {
        if (selectedDistrictLayer !== layer) {
            layer.setStyle({
                fillColor: "#66BB6A",
                fillOpacity: 0.8,
                weight: 2
            });
        }
    },

    mouseout: function () {
        if (selectedDistrictLayer !== layer) {
            layer.setStyle({
                fillColor: "#4CAF50",
                fillOpacity: 0.6,
                color: "#333",
                weight: 1
            });
        }
    }
});

// Map पर district का नाम दिखाएँ
const label = L.divIcon({
    className: "district-label",
    html: `<span>${hindiName}</span>`,
    iconSize: null
});

L.marker(layer.getBounds().getCenter(), {
    icon: label,
    interactive: false
}).addTo(map);


                    // ==================================
                    // MAP DISTRICT CLICK
                    // ==================================

                    layer.on(
                        "click",
                        function() {

                            console.log(
                                "District clicked:",
                                districtName
                            );

                            // पहले वाले जिले का रंग वापस करें
if (selectedDistrictLayer) {
    selectedDistrictLayer.setStyle({
        fillColor: "#4CAF50",
        fillOpacity: 0.6,
        color: "#333",
        weight: 1
    });
}

// नए जिले को highlight करें
layer.setStyle({
    fillColor: "#ff9800",
    fillOpacity: 0.8,
    color: "#222",
    weight: 2
});

selectedDistrictLayer = layer;


                            // District key निकालें
                            const districtKey =
    getDistrictKey(districtName) ||
    (
        districtName.toLowerCase().includes("champaran")
            ? (
                districtName.toLowerCase().includes("paschim") ||
                districtName.toLowerCase().includes("pashchim") ||
                districtName.toLowerCase().includes("west")
                    ? "westChamparan"
                    : "eastChamparan"
              )
            : null
    );


                            if (districtKey) {

                                // Dropdown में select करें
                                districtSelect.value =
                                    districtKey;


                                // Dashboard खोलें
                                showDistrictDashboard(
                                    districtKey
                                );


                                // Map को district पर zoom करें
                                try {

    map.setView(
        layer.getBounds().getCenter(),
        9,
        {
            animate: true
        }
    );

} catch (error) {

    console.log("Map view error:", error);

}
                            } else {

                                console.log(
                                    "Data key नहीं मिला:",
                                    districtName
                                );

                            }

                        }
                    );

                }

        }).addTo(map);

    })

    .catch(error => {

        console.error(
            "GeoJSON Error:",
            error
        );

    });

    function showEducation() {
    document.getElementById("districtSelect").focus();

    alert("शिक्षा की जानकारी देखने के लिए पहले जिला चुनें।");
}