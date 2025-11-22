create database community;
use community;

CREATE TABLE States (
    state_id INT PRIMARY KEY AUTO_INCREMENT,
    state_name VARCHAR(100) NOT NULL UNIQUE
);


CREATE TABLE DiseaseInfo (
    info_id INT PRIMARY KEY AUTO_INCREMENT,
    state_id INT,
    category VARCHAR(50), -- e.g., 'common_diseases', 'prevention_measures', etc.
    detail TEXT,
    FOREIGN KEY (state_id) REFERENCES States(state_id) ON DELETE CASCADE
);
-- Insert data into the States table
INSERT INTO States (state_name) VALUES
('Arunachal Pradesh'),
('Assam'),
('Manipur'),
('Meghalaya'),
('Mizoram'),
('Nagaland'),
('Sikkim'),
('Tripura');

-- Insert data into the DiseaseInfo table
-- Arunachal Pradesh (state_id = 1, assuming auto-increment starts from 1)
INSERT INTO DiseaseInfo (state_id, category, detail) VALUES
((SELECT state_id FROM States WHERE state_name = 'Arunachal Pradesh'), 'common_diseases', 'Typhoid'),
((SELECT state_id FROM States WHERE state_name = 'Arunachal Pradesh'), 'common_diseases', 'Cholera'),
((SELECT state_id FROM States WHERE state_name = 'Arunachal Pradesh'), 'common_diseases', 'Dysentery'),
((SELECT state_id FROM States WHERE state_name = 'Arunachal Pradesh'), 'prevention_measures', 'Boil drinking water'),
((SELECT state_id FROM States WHERE state_name = 'Arunachal Pradesh'), 'prevention_measures', 'Maintain good hygiene'),
((SELECT state_id FROM States WHERE state_name = 'Arunachal Pradesh'), 'prevention_measures', 'Proper disposal of waste'),
((SELECT state_id FROM States WHERE state_name = 'Arunachal Pradesh'), 'prevention_measures', 'Avoid open defecation'),
((SELECT state_id FROM States WHERE state_name = 'Arunachal Pradesh'), 'additional_info', 'Focus on safe drinking water infrastructure in rural areas.');

-- Assam (state_id = 2)
INSERT INTO DiseaseInfo (state_id, category, detail) VALUES
((SELECT state_id FROM States WHERE state_name = 'Assam'), 'common_diseases', 'Japanese Encephalitis (vector-borne, but related to water bodies)'),
((SELECT state_id FROM States WHERE state_name = 'Assam'), 'common_diseases', 'Typhoid'),
((SELECT state_id FROM States WHERE state_name = 'Assam'), 'common_diseases', 'Diarrhea'),
((SELECT state_id FROM States WHERE state_name = 'Assam'), 'prevention_measures', 'Use mosquito nets for vector-borne diseases'),
((SELECT state_id FROM States WHERE state_name = 'Assam'), 'prevention_measures', 'Ensure water purification'),
((SELECT state_id FROM States WHERE state_name = 'Assam'), 'prevention_measures', 'Hand washing with soap'),
((SELECT state_id FROM States WHERE state_name = 'Assam'), 'prevention_measures', 'Monitor water quality regularly'),
((SELECT state_id FROM States WHERE state_name = 'Assam'), 'additional_info', 'Flooding during monsoon season exacerbates water contamination issues.');

-- Manipur (state_id = 3)
INSERT INTO DiseaseInfo (state_id, category, detail) VALUES
((SELECT state_id FROM States WHERE state_name = 'Manipur'), 'common_diseases', 'Typhoid'),
((SELECT state_id FROM States WHERE state_name = 'Manipur'), 'common_diseases', 'Hepatitis A'),
((SELECT state_id FROM States WHERE state_name = 'Manipur'), 'common_diseases', 'Diarrhea'),
((SELECT state_id FROM States WHERE state_name = 'Manipur'), 'prevention_measures', 'Drink treated water'),
((SELECT state_id FROM States WHERE state_name = 'Manipur'), 'prevention_measures', 'Sanitize food preparation areas'),
((SELECT state_id FROM States WHERE state_name = 'Manipur'), 'prevention_measures', 'Vaccination for Hepatitis A where recommended'),
((SELECT state_id FROM States WHERE state_name = 'Manipur'), 'prevention_measures', 'Community awareness programs'),
((SELECT state_id FROM States WHERE state_name = 'Manipur'), 'additional_info', 'Challenges in remote areas for access to clean water.');

-- Meghalaya (state_id = 4)
INSERT INTO DiseaseInfo (state_id, category, detail) VALUES
((SELECT state_id FROM States WHERE state_name = 'Meghalaya'), 'common_diseases', 'Cholera'),
((SELECT state_id FROM States WHERE state_name = 'Meghalaya'), 'common_diseases', 'Typhoid'),
((SELECT state_id FROM States WHERE state_name = 'Meghalaya'), 'common_diseases', 'Gastroenteritis'),
((SELECT state_id FROM States WHERE state_name = 'Meghalaya'), 'prevention_measures', 'Protect water sources from contamination'),
((SELECT state_id FROM States WHERE state_name = 'Meghalaya'), 'prevention_measures', 'Proper drainage systems'),
((SELECT state_id FROM States WHERE state_name = 'Meghalaya'), 'prevention_measures', 'Health education on water safety'),
((SELECT state_id FROM States WHERE state_name = 'Meghalaya'), 'prevention_measures', 'Regular medical check-ups'),
((SELECT state_id FROM States WHERE state_name = 'Meghalaya'), 'additional_info', 'High rainfall can increase the risk of water contamination.');

-- Mizoram (state_id = 5)
INSERT INTO DiseaseInfo (state_id, category, detail) VALUES
((SELECT state_id FROM States WHERE state_name = 'Mizoram'), 'common_diseases', 'Typhoid'),
((SELECT state_id FROM States WHERE state_name = 'Mizoram'), 'common_diseases', 'Diarrhea'),
((SELECT state_id FROM States WHERE state_name = 'Mizoram'), 'common_diseases', 'Jaundice'),
((SELECT state_id FROM States WHERE state_name = 'Mizoram'), 'prevention_measures', 'Filter and boil water'),
((SELECT state_id FROM States WHERE state_name = 'Mizoram'), 'prevention_measures', 'Safe food handling practices'),
((SELECT state_id FROM States WHERE state_name = 'Mizoram'), 'prevention_measures', 'Personal hygiene education'),
((SELECT state_id FROM States WHERE state_name = 'Mizoram'), 'prevention_measures', 'Effective waste management'),
((SELECT state_id FROM States WHERE state_name = 'Mizoram'), 'additional_info', 'Topography makes infrastructure development challenging.');

-- Nagaland (state_id = 6)
INSERT INTO DiseaseInfo (state_id, category, detail) VALUES
((SELECT state_id FROM States WHERE state_name = 'Nagaland'), 'common_diseases', 'Typhoid'),
((SELECT state_id FROM States WHERE state_name = 'Nagaland'), 'common_diseases', 'Cholera'),
((SELECT state_id FROM States WHERE state_name = 'Nagaland'), 'common_diseases', 'Amoebiasis'),
((SELECT state_id FROM States WHERE state_name = 'Nagaland'), 'prevention_measures', 'Use chlorinated water'),
((SELECT state_id FROM States WHERE state_name = 'Nagaland'), 'prevention_measures', 'Avoid raw vegetables washed in unsafe water'),
((SELECT state_id FROM States WHERE state_name = 'Nagaland'), 'prevention_measures', 'Promote household water treatment solutions'),
((SELECT state_id FROM States WHERE state_name = 'Nagaland'), 'prevention_measures', 'Sanitation facilities in public places'),
((SELECT state_id FROM States WHERE state_name = 'Nagaland'), 'additional_info', 'Improvement of water supply schemes is crucial.');

-- Sikkim (state_id = 7)
INSERT INTO DiseaseInfo (state_id, category, detail) VALUES
((SELECT state_id FROM States WHERE state_name = 'Sikkim'), 'common_diseases', 'Typhoid'),
((SELECT state_id FROM States WHERE state_name = 'Sikkim'), 'common_diseases', 'Diarrhea'),
((SELECT state_id FROM States WHERE state_name = 'Sikkim'), 'common_diseases', 'Hepatitis E'),
((SELECT state_id FROM States WHERE state_name = 'Sikkim'), 'prevention_measures', 'Consume hygienically prepared food'),
((SELECT state_id FROM States WHERE state_name = 'Sikkim'), 'prevention_measures', 'Drink only safe and treated water'),
((SELECT state_id FROM States WHERE state_name = 'Sikkim'), 'prevention_measures', 'Regular water quality testing'),
((SELECT state_id FROM States WHERE state_name = 'Sikkim'), 'prevention_measures', 'Awareness campaigns for tourists and locals'),
((SELECT state_id FROM States WHERE state_name = 'Sikkim'), 'additional_info', 'While generally cleaner, vigilance is necessary for tourism-related exposures.');

-- Tripura (state_id = 8)
INSERT INTO DiseaseInfo (state_id, category, detail) VALUES
((SELECT state_id FROM States WHERE state_name = 'Tripura'), 'common_diseases', 'Cholera'),
((SELECT state_id FROM States WHERE state_name = 'Tripura'), 'common_diseases', 'Diarrhea'),
((SELECT state_id FROM States WHERE state_name = 'Tripura'), 'common_diseases', 'Dysentery'),
((SELECT state_id FROM States WHERE state_name = 'Tripura'), 'prevention_measures', 'Access to piped water supply'),
((SELECT state_id FROM States WHERE state_name = 'Tripura'), 'prevention_measures', 'Rainwater harvesting with proper treatment'),
((SELECT state_id FROM States WHERE state_name = 'Tripura'), 'prevention_measures', 'Immunization programs'),
((SELECT state_id FROM States WHERE state_name = 'Tripura'), 'prevention_measures', 'Strict food safety regulations'),
((SELECT state_id FROM States WHERE state_name = 'Tripura'), 'additional_info', 'Border areas might face specific challenges in disease control.');


use community;


select * from diseaseInfo;
