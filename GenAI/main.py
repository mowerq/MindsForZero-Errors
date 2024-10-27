import json
import os
import google.generativeai as genai

def find_question_label(text):
    start = text.find('**') + 2  # Find the index after the first **
    end = text.find('**', start)  # Find the index of the second **

    # Extract the word
    category_label = text[start:end]

    return category_label


# Load json file
json_file = "sample.json"
with open(json_file, 'r') as f:
    data = json.load(f)

# Set up gemini ai
genai.configure(api_key=os.environ["API_KEY"])
model = genai.GenerativeModel("gemini-1.5-flash")

# Loop through the questions
for question in data['test']['questions']:
    question_root = question['question_root']

    # Generate the content
    response = model.generate_content("Determine the detailed category label for the following question: " + question_root)

    # Debugging
    print(response.text)
    print(find_question_label(response.text))

    # Update the question label
    question['question_label'] = find_question_label(response.text)

# Save the updated json file
with open('updated_json.json', 'w') as f:
    json.dump(data, f, indent=1)