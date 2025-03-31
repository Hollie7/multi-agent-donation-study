export const generateSimilarPrompt = `Generate identities in English that are similar to the 'User' based on the provided User Data. The generated content must be a JSON object containing the following fields: 
ageRange, gender, occupation, and ethnicity.

- **ageRange**: Generate an exact integer (not a range!) within the User's specified age range:
  - If the User's age_range is '18-30', generate a random number between 18 and 30, such as 19 or 25.
  - If the User's age_range is '31-50', generate a random number between 31 and 50, such as 33 or 47.
  - If the User's age_range is 'More than 51', generate a random number greater than 51, such as 52 or 65.

- **gender**: Must be exactly the same as the User's gender.
- **ethnicity**: Must be exactly the same as the User's ethnicity.
- **occupation**: Generate a similar but not identical occupation (job position) to the User’s. Follow these strict rules for occupation generation:
  - If the User's occupation is 'Business', randomly select from: ['Business Analyst', 'Project Manager', 'Account Manager', 'Operations Manager', 'Business Development Manager', 'Sales Director', 'Supply Chain Manager', 'Financial Consultant', 'Market Research Analyst', 'Product Manager'].
  - If the User's occupation is 'Medical', randomly select from: ['Nurse', 'Pharmacist', 'Medical Researcher', 'Physician Assistant', 'Radiologist', 'Healthcare Administrator', 'Occupational Therapist', 'Clinical Lab Technician', 'Medical Device Sales Representative', 'Dietitian/Nutritionist'].
  - If the User's occupation is 'Government', randomly select from: ['Policy Analyst', 'Public Relations Specialist', 'Urban Planner', 'Government Affairs Manager', 'Environmental Health Officer', 'Legislative Assistant', 'Community Development Director', 'Emergency Management Specialist', 'Public Health Administrator', 'Intelligence Analyst'].
  - If the User's occupation is 'Education', randomly select from: ['Lecturer', 'School Administrator', 'Educational Consultant', 'Curriculum Developer', 'Academic Advisor', 'Education Policy Analyst', 'Teacher Trainer'].
  - If the User's occupation is 'Service', randomly select from: ['Customer Service Manager', 'Hotel Manager', 'Event Coordinator', 'Restaurant Manager', 'Retail Store Manager', 'Travel Consultant', 'Spa Director', 'Concierge Supervisor', 'Flight Attendant', 'Tour Guide'].
  - If the User's occupation is 'Other', generate a similar but not identical job position.
  - If the User's occupation is 'Prefer not to say', randomly select from: ['Data Analyst', 'Marketing Manager', 'Software Developer', 'Content Creator', 'Graphic Designer', 'Product Designer', 'Digital Marketing Specialist', 'Technical Writer', 'Research Scientist', 'Consultant'].`;
export const generateDifferentPrompt = `Generate a completely different identity (0% similarity) in English based on the given User Data (strictly follow the rules below). 
The generated content must be a JSON object containing the following fields:
ageRange, gender, occupation, and ethnicity.

- **ageRange**: Generate an exact integer (not a range!) that falls outside the User's age range:
  - If the User's age_range is '18-30', generate an integer within '31-50' or 'More than 51', such as 33 or 52.
  - If the User's age_range is '31-50', generate an integer within '18-30' or 'More than 51', such as 25 or 65.
  - If the User's age_range is 'More than 51', generate an integer within '18-30' or '31-50', such as 20, 29, 35, or 47.

- **gender**: Must be a different option from the User's gender, selected from ['Male', 'Female', 'Non-binary'].
- **ethnicity**: Must be a different option from the User's ethnicity, selected from ['European/White', 'Black', 'Asian', 'Indigenous'].
- **occupation**: Must be entirely different from the User's and randomly selected from: ['Software Engineer', 'Human Resources Manager', 'Journalist', 'Sales Manager', 'Financial Analyst', 'Civil Engineer', 'Data Scientist', 'Marketing Specialist', 'Doctor', 'Lawyer', 'Teacher', 'Financial Analyst', 'Mechanical Engineer', 'Architect'].`;
