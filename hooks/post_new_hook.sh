#!/bin/bash
# Shell script for ask-cli post-new hook for Node.js
# Script Usage: post_new_hook.sh <SKILL_NAME> <DO_DEBUG> <TARGET>
 
# SKILL_NAME is the preformatted name passed from the CLI, after removing special characters.
# DO_DEBUG is boolean value for debug logging
 
# Run this script one level outside of the skill root folder
 
# The script does the following:
#  - Run "npm install" in each sourceDir in skill.json

SKILL_NAME=$1
DO_DEBUG=${2:-false}

if [ $DO_DEBUG == false ]
then
    exec > /dev/null 2>&1
fi

install_dependencies() {
    npm install --prefix "$SKILL_NAME/$1" >/dev/null 2>&1
    return $?
}

echo "###########################"
echo "###### post-new hook ######"
echo "###########################"

grep "sourceDir" $SKILL_NAME/skill.json | cut -d: -f2 |  sed 's/"//g' | sed 's/,//g' | while read -r SOURCE_DIR; do
    if install_dependencies $SOURCE_DIR; then
        echo "Codebase ($SOURCE_DIR) built successfully."
    else
        echo "There was a problem installing dependencies for ($SOURCE_DIR)."
        exit 1
    fi
done
echo "###########################"

exit 0

