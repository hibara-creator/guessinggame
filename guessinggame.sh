
#!/bin/bash

# Function to count regular files in the current directory
count_files() {
    find . -maxdepth 1 -type f | wc -l
}

# Get the number of files
file_count=$(count_files)

echo "Welcome to the Guessing Game!"
echo "How many files are in the current directory?"

# Keep asking until the correct answer is given
while true
do
    read -r -p "Enter your guess: " guess

    # Check that the input is a positive integer or zero
    if ! [[ "$guess" =~ ^[0-9]+$ ]]
    then
        echo "Please enter a valid number."
        continue
    fi

    guess=$((10#$guess))

    # Compare the guess with the actual number
    if [ "$guess" -lt "$file_count" ]
    then
        echo "Too low! Try again."

    elif [ "$guess" -gt "$file_count" ]
    then
        echo "Too high! Try again."

    else
        echo "Congratulations! You guessed correctly!"
        break
    fi
done
