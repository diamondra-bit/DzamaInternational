#!/bin/bash

# Specify the file name
file="tex2.txt"

# Prompt the user to enter the word to search for
read -p "Enter the word to search for: " word

# Use awk to extract the text between the provided word and the double line break and store it in a variable
deleted_text=$(awk -v word="$word" 'tolower($0) ~ tolower(word), /^$/{if (NR!=1) print ""; print}' "$file")

# Echo the extracted text
echo "The following text will be deleted:"
echo "$deleted_text"

# Use sed to delete the text between the provided word and the double line break and save the changes in-place
sed -i "/$(echo "$word" | sed 's/[\/&]/\\&/g')/,/^$/d" "$file"
