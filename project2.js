document.addEventListener('DOMContentLoaded', () => {
    const stateSelect = document.getElementById('state-select');
    const getInfoBtn = document.getElementById('get-info-btn');
    const selectedStateName = document.getElementById('selected-state-name');
    const diseaseInfoContent = document.getElementById('disease-info-content');

    const waterborneData = {
        "Arunachal Pradesh": {
            "common_diseases": ["Typhoid", "Cholera", "Dysentery"],
            "prevention_measures": [
                "Boil drinking water",
                "Maintain good hygiene",
                "Proper disposal of waste",
                "Avoid open defecation"
            ],
            "additional_info": "Focus on safe drinking water infrastructure in rural areas."
        },
        "Assam": {
            "common_diseases": ["Japanese Encephalitis (vector-borne, but related to water bodies)", "Typhoid", "Diarrhea"],
            "prevention_measures": [
                "Use mosquito nets for vector-borne diseases",
                "Ensure water purification",
                "Hand washing with soap",
                "Monitor water quality regularly"
            ],
            "additional_info": "Flooding during monsoon season exacerbates water contamination issues."
        },
        "Manipur": {
            "common_diseases": ["Typhoid", "Hepatitis A", "Diarrhea"],
            "prevention_measures": [
                "Drink treated water",
                "Sanitize food preparation areas",
                "Vaccination for Hepatitis A where recommended",
                "Community awareness programs"
            ],
            "additional_info": "Challenges in remote areas for access to clean water."
        },
        "Meghalaya": {
            "common_diseases": ["Cholera", "Typhoid", "Gastroenteritis"],
            "prevention_measures": [
                "Protect water sources from contamination",
                "Proper drainage systems",
                "Health education on water safety",
                "Regular medical check-ups"
            ],
            "additional_info": "High rainfall can increase the risk of water contamination."
        },
        "Mizoram": {
            "common_diseases": ["Typhoid", "Diarrhea", "Jaundice"],
            "prevention_measures": [
                "Filter and boil water",
                "Safe food handling practices",
                "Personal hygiene education",
                "Effective waste management"
            ],
            "additional_info": "Topography makes infrastructure development challenging."
        },
        "Nagaland": {
            "common_diseases": ["Typhoid", "Cholera", "Amoebiasis"],
            "prevention_measures": [
                "Use chlorinated water",
                "Avoid raw vegetables washed in unsafe water",
                "Promote household water treatment solutions",
                "Sanitation facilities in public places"
            ],
            "additional_info": "Improvement of water supply schemes is crucial."
        },
        "Sikkim": {
            "common_diseases": ["Typhoid", "Diarrhea", "Hepatitis E"],
            "prevention_measures": [
                "Consume hygienically prepared food",
                "Drink only safe and treated water",
                "Regular water quality testing",
                "Awareness campaigns for tourists and locals"
            ],
            "additional_info": "While generally cleaner, vigilance is necessary for tourism-related exposures."
        },
        "Tripura": {
            "common_diseases": ["Cholera", "Diarrhea", "Dysentery"],
            "prevention_measures": [
                "Access to piped water supply",
                "Rainwater harvesting with proper treatment",
                "Immunization programs",
                "Strict food safety regulations"
            ],
            "additional_info": "Border areas might face specific challenges in disease control."
        },
        "default": {
            "common_diseases": [],
            "prevention_measures": [],
            "additional_info": "Select a state from the dropdown to view specific information."
        }
    };

    getInfoBtn.addEventListener('click', () => {
        const selectedState = stateSelect.value;
        const info = waterborneData[selectedState] || waterborneData["default"];

        selectedStateName.textContent = selectedState || "a State";
        diseaseInfoContent.innerHTML = ''; // Clear previous content

        if (selectedState) {
            let htmlContent = `
                <h3>Common Waterborne Diseases:</h3>
                <ul>
                    ${info.common_diseases.map(disease => `<li>${disease}</li>`).join('')}
                </ul>
                <h3>Prevention Measures:</h3>
                <ul>
                    ${info.prevention_measures.map(measure => `<li>${measure}</li>`).join('')}
                </ul>
                <h3>Additional Information:</h3>
                <p>${info.additional_info}</p>
            `;
            diseaseInfoContent.innerHTML = htmlContent;
        } else {
            diseaseInfoContent.innerHTML = "<p>Please select a state to view relevant information about waterborne diseases.</p>";
        }
    });

    // Initial display on page load
    getInfoBtn.click();
});