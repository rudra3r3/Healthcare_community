// state2.js

// ====== Data for NE Indian States ======
const statesData = [
  {
    state: "Assam",
    capital: "Dispur",
    coords: [26.1445, 91.7362],
    districts: [
      { name: "Kamrup", coords: [26.1833, 91.7333] },
      { name: "Guwahati", coords: [26.1445, 91.7362] },
      { name: "Dibrugarh", coords: [27.4728, 94.9114] },
      { name: "Jorhat", coords: [26.7579, 94.2036] },
      { name: "Tezpur", coords: [26.6333, 92.8] }
    ],
    humanDiseases: [
      { name: "Malaria", wiki: "https://en.wikipedia.org/wiki/Malaria" },
      { name: "Dengue", wiki: "https://en.wikipedia.org/wiki/Dengue_fever" },
      { name: "Cholera", wiki: "https://en.wikipedia.org/wiki/Cholera" },
      { name: "Typhoid", wiki: "https://en.wikipedia.org/wiki/Typhoid_fever" },
      { name: "Hepatitis", wiki: "https://en.wikipedia.org/wiki/Hepatitis" }
    ],
    plantDiseases: [
      { name: "Bacterial Blight", wiki: "https://en.wikipedia.org/wiki/Bacterial_blight" },
      { name: "Powdery Mildew", wiki: "https://en.wikipedia.org/wiki/Powdery_mildew" },
      { name: "Leaf Spot", wiki: "https://en.wikipedia.org/wiki/Leaf_spot" }
    ],
    locustInfestations: [
      { name: "Desert Locust", wiki: "https://en.wikipedia.org/wiki/Desert_locust" }
    ]
  },
  {
    state: "Arunachal Pradesh",
    capital: "Itanagar",
    coords: [27.0844, 93.6053],
    districts: [
      { name: "Tawang", coords: [27.5866, 91.8642] },
      { name: "Papum Pare", coords: [27.1, 93.61] },
      { name: "Lohit", coords: [27.3, 95.0] },
      { name: "West Siang", coords: [28.15, 94.77] },
      { name: "East Kameng", coords: [27.6, 92.8] }
    ],
    humanDiseases: [
      { name: "Malaria", wiki: "https://en.wikipedia.org/wiki/Malaria" },
      { name: "Dengue", wiki: "https://en.wikipedia.org/wiki/Dengue_fever" }
    ],
    plantDiseases: [
      { name: "Leaf Spot", wiki: "https://en.wikipedia.org/wiki/Leaf_spot" },
      { name: "Rust", wiki: "https://en.wikipedia.org/wiki/Plant_rust" }
    ],
    locustInfestations: [
      { name: "Migratory Locust", wiki: "https://en.wikipedia.org/wiki/Migratory_locust" }
    ]
  },
  {
    state: "Manipur",
    capital: "Imphal",
    coords: [24.8170, 93.9368],
    districts: [
      { name: "Bishnupur", coords: [24.6167, 93.0] },
      { name: "Churachandpur", coords: [23.35, 93.35] },
      { name: "Imphal East", coords: [24.8170, 94.0] },
      { name: "Imphal West", coords: [24.8, 93.93] },
      { name: "Thoubal", coords: [24.58, 94.02] }
    ],
    humanDiseases: [
      { name: "Malaria", wiki: "https://en.wikipedia.org/wiki/Malaria" },
      { name: "Hepatitis", wiki: "https://en.wikipedia.org/wiki/Hepatitis" }
    ],
    plantDiseases: [
      { name: "Bacterial Blight", wiki: "https://en.wikipedia.org/wiki/Bacterial_blight" },
      { name: "Leaf Spot", wiki: "https://en.wikipedia.org/wiki/Leaf_spot" }
    ],
    locustInfestations: [
      { name: "Desert Locust", wiki: "https://en.wikipedia.org/wiki/Desert_locust" }
    ]
  },
  {
    state: "Meghalaya",
    capital: "Shillong",
    coords: [25.5788, 91.8933],
    districts: [
      { name: "East Khasi Hills", coords: [25.57, 91.88] },
      { name: "West Khasi Hills", coords: [25.5, 91.7] },
      { name: "Jaintia Hills", coords: [25.65, 92.0] },
      { name: "Ri-Bhoi", coords: [25.73, 91.73] }
    ],
    humanDiseases: [
      { name: "Malaria", wiki: "https://en.wikipedia.org/wiki/Malaria" }
    ],
    plantDiseases: [
      { name: "Powdery Mildew", wiki: "https://en.wikipedia.org/wiki/Powdery_mildew" }
    ],
    locustInfestations: [
      { name: "Migratory Locust", wiki: "https://en.wikipedia.org/wiki/Migratory_locust" }
    ]
  },
  {
    state: "Mizoram",
    capital: "Aizawl",
    coords: [23.7271, 92.7176],
    districts: [
      { name: "Aizawl", coords: [23.7271, 92.7176] },
      { name: "Lunglei", coords: [22.9217, 92.7822] },
      { name: "Champhai", coords: [23.2, 93.0] },
      { name: "Serchhip", coords: [23.3, 92.8] }
    ],
    humanDiseases: [
      { name: "Malaria", wiki: "https://en.wikipedia.org/wiki/Malaria" }
    ],
    plantDiseases: [
      { name: "Wilt", wiki: "https://en.wikipedia.org/wiki/Wilt_(plant_disease)" }
    ],
    locustInfestations: [
      { name: "Desert Locust", wiki: "https://en.wikipedia.org/wiki/Desert_locust" }
    ]
  },
  {
    state: "Nagaland",
    capital: "Kohima",
    coords: [25.6751, 94.1105],
    districts: [
      { name: "Kohima", coords: [25.6751, 94.1105] },
      { name: "Dimapur", coords: [25.9, 93.7] },
      { name: "Mokokchung", coords: [26.33, 94.53] },
      { name: "Wokha", coords: [26.1, 94.2] },
      { name: "Peren", coords: [25.6, 93.9] }
    ],
    humanDiseases: [
      { name: "Hepatitis", wiki: "https://en.wikipedia.org/wiki/Hepatitis" }
    ],
    plantDiseases: [
      { name: "Leaf Spot", wiki: "https://en.wikipedia.org/wiki/Leaf_spot" }
    ],
    locustInfestations: [
      { name: "Migratory Locust", wiki: "https://en.wikipedia.org/wiki/Migratory_locust" }
    ]
  },
  {
    state: "Tripura",
    capital: "Agartala",
    coords: [23.8315, 91.2868],
    districts: [
      { name: "West Tripura", coords: [23.8, 91.28] },
      { name: "North Tripura", coords: [24.0, 91.5] },
      { name: "Dhalai", coords: [24.2, 91.9] },
      { name: "South Tripura", coords: [23.6, 91.4] }
    ],
    humanDiseases: [
      { name: "Cholera", wiki: "https://en.wikipedia.org/wiki/Cholera" }
    ],
    plantDiseases: [
      { name: "Bacterial Blight", wiki: "https://en.wikipedia.org/wiki/Bacterial_blight" }
    ],
    locustInfestations: [
      { name: "Desert Locust", wiki: "https://en.wikipedia.org/wiki/Desert_locust" }
    ]
  },
  {
    state: "Sikkim",
    capital: "Gangtok",
    coords: [27.3389, 88.6065],
    districts: [
      { name: "East Sikkim", coords: [27.35, 88.62] },
      { name: "West Sikkim", coords: [27.3, 88.5] },
      { name: "North Sikkim", coords: [27.8, 88.9] },
      { name: "South Sikkim", coords: [27.2, 88.4] }
    ],
    humanDiseases: [
      { name: "Typhoid", wiki: "https://en.wikipedia.org/wiki/Typhoid_fever" }
    ],
    plantDiseases: [
      { name: "Wilt", wiki: "https://en.wikipedia.org/wiki/Wilt_(plant_disease)" }
    ],
    locustInfestations: [
      { name: "Migratory Locust", wiki: "https://en.wikipedia.org/wiki/Migratory_locust" }
    ]
  }
];

// ====== Map Initialization ======
const map = L.map("map").setView([26.1445, 91.7362], 6);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

let markersGroup = L.layerGroup().addTo(map);

// ====== Populate State Dropdown ======
const stateSelect = document.getElementById("state-select");
statesData.forEach((stateObj, index) => {
  const option = document.createElement("option");
  option.value = index;
  option.textContent = stateObj.state;
  stateSelect.appendChild(option);
});

// ====== Elements ======
const stateNamePanel = document.getElementById("selected-state-name-panel");
const stateCapital = document.getElementById("state-capital");
const stateDistricts = document.getElementById("state-districts-content");
const humanDiseasesContent = document.getElementById("human-diseases-content");
const plantDiseasesContent = document.getElementById("plant-diseases-content");
const locustContent = document.getElementById("locust-infestations-content");
const selectedStateDisplay = document.getElementById("selected-state-name-display");

// ====== Display State Info & Map ======
document.getElementById("get-info-button").addEventListener("click", () => {
  const stateIndex = stateSelect.value;
  if (stateIndex === "") return alert("Please select a state");
  const state = statesData[stateIndex];

  stateNamePanel.textContent = state.state;
  selectedStateDisplay.textContent = state.state;
  stateCapital.textContent = state.capital;
  stateDistricts.innerHTML = state.districts.map(d => `<li>${d.name}</li>`).join("");
  humanDiseasesContent.innerHTML = state.humanDiseases.map(d => 
    `<li><a href="${d.wiki}" target="_blank">${d.name}</a></li>`).join("");
  plantDiseasesContent.innerHTML = state.plantDiseases.map(d => 
    `<li><a href="${d.wiki}" target="_blank">${d.name}</a></li>`).join("");
  locustContent.innerHTML = state.locustInfestations.map(d => 
    `<li><a href="${d.wiki}" target="_blank">${d.name}</a></li>`).join("");

  map.setView(state.coords, 7);
  markersGroup.clearLayers();

  state.districts.forEach(d => {
    const marker = L.circleMarker(d.coords, {
      radius: 8,
      color: "#ff5722",
      fillColor: "#ff9800",
      fillOpacity: 0.7
    }).bindPopup(`<strong>${d.name}</strong><br>State: ${state.state}`);
    markersGroup.addLayer(marker);
  });

  // ====== Heatmap Layer ======
  const heatPoints = state.districts.map(d => [...d.coords, 0.5]); // 0.5 intensity for demo
  if (window.heat) map.removeLayer(window.heat); // remove old heat
  window.heat = L.heatLayer(heatPoints, {radius: 25, blur: 15, maxZoom: 10}).addTo(map);
});

// ====== Tab Functionality ======
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");
tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    tabContents.forEach(content => content.style.display = "none");
    document.getElementById(btn.dataset.tab + "-tab").style.display = "block";
  });
});

const toggleButton = document.querySelector('.toggle-button');
    const body = document.body;
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    gsap.from('.sidebar', { duration: 1, x: -50, opacity: 0, ease: 'power2.out' });
window.addEventListener('DOMContentLoaded', () => {
  gsap.from(".cards", {
    duration: 1,
    opacity: 0,   
    y: 50,        
    stagger: 0.2, 
    ease: "back.out(1.7)" 
  });
});

    const cursor = document.getElementById('cursor-main');
    const trail = document.getElementById('cursor-trail');

    let cursorX = window.innerWidth / 2, cursorY = window.innerHeight / 2;
    let trailX = window.innerWidth / 2, trailY = window.innerHeight / 2;
    let cursorTimeout;

    function moveCursor(e) {
        cursorX = e.clientX;
        cursorY = e.clientY;
        gsap.to(cursor, { x: cursorX, y: cursorY, duration: 0.21, ease: "power3.out" });

        clearTimeout(cursorTimeout);
        cursor.style.opacity = 1;
        trail.style.opacity = 0.3;
        cursorTimeout = setTimeout(() => {
            cursor.style.opacity = 0.7;
            trail.style.opacity = 0.08;
        }, 2100);
    }
    window.addEventListener('mousemove', moveCursor);

    gsap.ticker.add(() => {
        trailX += (cursorX - trailX) * 0.19;
        trailY += (cursorY - trailY) * 0.19;
        gsap.set(trail, { x: trailX, y: trailY });
    });

    const interactiveSelectors = ['a', 'button', '.toggle-button', '.card', '#state-select'];
    interactiveSelectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(cursor, { scale: 2.2, background: "#fff", boxShadow: "0 0 40px 10px #0891b2" });
                gsap.to(trail, { scale: 2.8, borderColor: "#fff" });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(cursor, { scale: 1, background: "#0891b2", boxShadow: "0 0 18px 6px rgba(8,145,178,.15)" });
                gsap.to(trail, { scale: 1, borderColor: "#0891b2" });
            });
        });
    });
    
    if (window.matchMedia("(pointer: coarse)").matches) {
        cursor.style.display = "none";
        trail.style.display = "none";
    }