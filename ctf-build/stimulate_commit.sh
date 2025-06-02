# #!/bin/bash

# # CONFIGURATION
# FILE="../data.txt"
# BRANCH="main"
# NUM_COMMITS=50

# # Ensure the file exists
# touch $FILE

# # Arrays for generating conventional commit messages
# TYPES=("feat" "fix" "chore" "docs" "style" "refactor" "perf" "test")
# SCOPES=("auth" "db" "api" "ui" "utils" "core" "deps" "build")
# DESCRIPTIONS=("add login feature" "fix db connection" "update docs" "refactor codebase" "improve UI" "add tests" "cleanup" "update dependencies" "remove unused code" "optimize performance")

# # Function to generate a conventional commit message
# generate_commit_message() {
#   type=${TYPES[$RANDOM % ${#TYPES[@]}]}
#   scope=${SCOPES[$RANDOM % ${#SCOPES[@]}]}
#   description=${DESCRIPTIONS[$RANDOM % ${#DESCRIPTIONS[@]}]}
#   echo "$type($scope): $description"
# }

# # Commit loop
# for ((i = 1; i <= NUM_COMMITS; i++)); do
#   echo "Update line $i - $(date)" >> $FILE
#   git add $FILE
#   msg=$(generate_commit_message)
#   git commit -m "$msg"
#   echo "Committed: $msg"
# done

# # Push once at the end (for speed)
# git push origin $BRANCH

# echo "✅ Done: $NUM_COMMITS commits pushed."

#!/bin/bash

# CONFIGURATION
BRANCH="main"
NUM_COMMITS=50
FILES=("README.md" "src/index.js" "src/utils.js" "config/app.conf" "docs/setup.md")
TYPES=("feat" "fix" "chore" "docs" "style" "refactor" "perf" "test")
SCOPES=("auth" "db" "api" "ui" "utils" "core" "deps" "build")
DESCRIPTIONS=("add login feature" "fix db connection" "update docs" "refactor codebase" "improve UI" "add tests" "cleanup" "update dependencies" "remove unused code" "optimize performance")
NAMES=("Alice Kim" "Jonas Berg" "Maya Patel" "Ethan Zhao" "Leila Morin" "Carlos Nunez")
EMAILS=("alice@example.com" "jonas@example.com" "maya@example.com" "ethan@example.com" "leila@example.com" "carlos@example.com")

# Ensure files exist
for file in "${FILES[@]}"; do
  mkdir -p "$(dirname "$file")"
  touch "$file"
done

# Generate commit message
generate_commit_message() {
  type=${TYPES[$RANDOM % ${#TYPES[@]}]}
  scope=${SCOPES[$RANDOM % ${#SCOPES[@]}]}
  description=${DESCRIPTIONS[$RANDOM % ${#DESCRIPTIONS[@]}]}
  echo "$type($scope): $description"
}

# Realistic file modifications
modify_file() {
  case "$1" in
    *.md)
      echo -e "\n### Update $(date '+%H:%M')\n- Note: $(shuf -n1 -e "Improved explanation" "Clarified section" "Added new point" "Updated formatting")" >> "$1"
      ;;
    *.js)
      FUNC_NAME="func$(shuf -i 100-999 -n1)"
      echo -e "\nfunction $FUNC_NAME() {\n  console.log('Function $FUNC_NAME executed');\n}" >> "$1"
      ;;
    *.ts)
      VAR_NAME="var$(shuf -i 100-999 -n1)"
      echo -e "\nconst $VAR_NAME: string = 'Value for $VAR_NAME';\nconsole.log($VAR_NAME);" >> "$1"
      ;;
    *.conf)
      KEY="setting$(shuf -i 1-100 -n1)"
      VALUE=$(shuf -n1 -e "true" "false" "enabled" "disabled" "auto")
      echo "$KEY=$VALUE" >> "$1"
      ;;
    *)
      echo "# Modified on $(date)" >> "$1"
      ;;
  esac
}

# Main commit loop
for ((i = 1; i <= NUM_COMMITS; i++)); do
  TARGET_FILE=${FILES[$RANDOM % ${#FILES[@]}]}
  INDEX=$((RANDOM % ${#NAMES[@]}))
  AUTHOR_NAME="${NAMES[$INDEX]}"
  AUTHOR_EMAIL="${EMAILS[$INDEX]}"

  modify_file "$TARGET_FILE"
  git add "$TARGET_FILE"

  msg=$(generate_commit_message)
  export GIT_AUTHOR_NAME="$AUTHOR_NAME"
  export GIT_AUTHOR_EMAIL="$AUTHOR_EMAIL"
  export GIT_COMMITTER_NAME="$AUTHOR_NAME"
  export GIT_COMMITTER_EMAIL="$AUTHOR_EMAIL"
  export GIT_COMMITTER_DATE="$(date -d "$((NUM_COMMITS - i)) minutes ago" --iso-8601=seconds)"

  git commit --date "$GIT_COMMITTER_DATE" -m "$msg"
  echo "[$i/$NUM_COMMITS] $AUTHOR_NAME <$AUTHOR_EMAIL> committed: $msg → $TARGET_FILE"
done

# Push once
git push origin "$BRANCH"
echo "✅ Done: $NUM_COMMITS real commits pushed to $BRANCH."
