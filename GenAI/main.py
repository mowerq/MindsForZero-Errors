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

wrong_labels = []

for student in data['students']:
    wrong_labels.clear()
    for response in student['responses']:
        q_id : int = response['question_id']

        # Find the question with the same id
        question_info = next((q for q in data['test']['questions'] if q['question_id'] == q_id), None)
        correct_answer = question_info['correct_answer']

        if response['selected_option'] == correct_answer:
            response['is_correct'] = True
        else:
            response['is_correct'] = False
            question_label = question_info['question_label']
            wrong_labels.append(question_label)

    print("suggestions: " + 55*"-")

    print("Suggest a study topic based on the following question labels: " + ', '.join(wrong_labels))
    suggestion_AI = model.generate_content("Suggest a one-sentence study recommendation for an elementary "
                                           "school child who is making mistakes in the following subjects: " + ', '.join(wrong_labels))
    print(suggestion_AI.text)
    student['study_suggestion'] = suggestion_AI.text




# Save the updated json file
with open('updated_json.json', 'w') as f:
    json.dump(data, f, indent=1)