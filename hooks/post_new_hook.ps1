# Powershell script for ask-cli post-new hook for Node.js
# Script Usage: post_new_hook.ps1 <SKILL_NAME> <DO_DEBUG> <TARGET>
 
# SKILL_NAME is the preformatted name passed from the CLI, after removing special characters.
# DO_DEBUG is boolean value for debug logging
 
# Run this script one level outside of the skill root folder
 
# The script does the following:
#  - Run "npm install" in each sourceDir in skill.json

param( 
    [string] $SKILL_NAME,
    [bool] $DO_DEBUG = $False
)

if ($DO_DEBUG) {
    Write-Output "###########################"
    Write-Output "###### post-new hook ######"
    Write-Output "###########################"
}

function install_dependencies ($CWD, $SOURCE_DIR) {
    $INSTALL_PATH = $SKILL_NAME + "\" +$SOURCE_DIR
    Set-Location $INSTALL_PATH
    Invoke-Expression "npm install" 2>&1 | Out-Null
    $EXEC_RESULT = $?
    Set-Location $CWD
    return $EXEC_RESULT
}

$SKILL_FILE_PATH = $SKILL_NAME + "\skill.json"
$ALL_SOURCE_DIRS = Get-Content -Path $SKILL_FILE_PATH | select-string  -Pattern "sourceDir" -CaseSensitive
Foreach ($SOURCE_DIR in $ALL_SOURCE_DIRS) {
    $FILTER_SOURCE_DIR = $SOURCE_DIR -replace "`"", "" -replace "\s", "" -replace ",","" -replace "sourceDir:", ""
    $CWD = (Get-Location).Path
    if (install_dependencies $CWD $FILTER_SOURCE_DIR) {
        if ($DO_DEBUG) {
            Write-Output "Codebase ($FILTER_SOURCE_DIR) built successfully."
        }
    } else {
        if ($DO_DEBUG) {
            Write-Output "There was a problem installing dependencies for ($FILTER_SOURCE_DIR)."
        }
        exit 1
    }
}

if ($DO_DEBUG) {
    Write-Output "###########################"
}

exit 0
