# Powershell script for ask-cli pre-deploy hook for Node.js
# Script Usage: pre_deploy_hook.ps1 <SKILL_NAME> <DO_DEBUG> <TARGET>
 
# SKILL_NAME is the preformatted name passed from the CLI, after removing special characters.
# DO_DEBUG is boolean value for debug logging
# TARGET is the deploy TARGET provided to the CLI. (eg: all, skill, lambda etc.)
 
# Run this script under the skill root folder
 
# The script does the following:
#  - Run "npm install" in each sourceDir in skill.json

param( 
    [string] $SKILL_NAME,
    [bool] $DO_DEBUG = $False,
    [string] $TARGET = "all"
)

function install_dependencies ($CWD, $SOURCE_DIR) {
    Set-Location $SOURCE_DIR
    Invoke-Expression "npm install" 2>&1 | Out-Null
    $EXEC_RESULT = $?
    Set-Location $CWD
    return $EXEC_RESULT
}

if ($DO_DEBUG) {
    Write-Output "###########################"
    Write-Output "##### pre-deploy hook #####"
    Write-Output "###########################"
}

if ($TARGET -eq "all" -Or $TARGET -eq "lambda") {
    $ALL_SOURCE_DIRS = Get-Content -Path "skill.json" | select-string  -Pattern "sourceDir" -CaseSensitive
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
}

exit 0
