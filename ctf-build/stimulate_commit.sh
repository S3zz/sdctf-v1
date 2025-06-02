#!/bin/bash

# CONFIGURATION
FILE="data.txt"
BRANCH="main"
NUM_COMMITS=50

# Ensure the file exists
touch $FILE

# Arrays for generating conventional commit messages
TYPES=("feat" "fix" "chore" "docs" "style" "refactor" "perf" "test")
SCOPES=("auth" "db" "api" "ui" "utils" "core" "deps" "build")
DESCRIPTIONS=("add login feature" "fix db connection" "update docs" "refactor codebase" "improve UI" "add tests" "cleanup" "update dependencies" "remove unused code" "optimize performance")

# Function to generate a conventional commit message
generate_commit_message() {
  type=${TYPES[$RANDOM % ${#TYPES[@]}]}
  scope=${SCOPES[$RANDOM % ${#SCOPES[@]}]}
  description=${DESCRIPTIONS[$RANDOM % ${#DESCRIPTIONS[@]}]}
  echo "$type($scope): $description"
}

# Commit loop
for ((i = 1; i <= NUM_COMMITS; i++)); do
  echo "Update line $i - $(date)" >> $FILE
  git add $FILE
  msg=$(generate_commit_message)
  git commit -m "$msg"
  echo "Committed: $msg"
done

# Push once at the end (for speed)
git push origin $BRANCH

echo "✅ Done: $NUM_COMMITS commits pushed."
