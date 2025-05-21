# DevContainer

VSCode with two apps. Start with CodeSpaces.

* App.Server (Azure Function)
* App.Web (Angular)

## Configuration

Folders with config

* .vscode
* .devcontainer

## App.Server Url
Works with curl command. In browser CORS error!
```
echo $GITHUB_TOKEN
echo $CODESPACE_NAME
curl ADDRESS -H "X-Github-Token: TOKEN"

curl "https://"$CODESPACE_NAME"-7070.app.github.dev/api/data" -H "X-Github-Token:"$GITHUB_TOKEN # Returns Welcome to Azure Functions
```

Open Port
```
gh codespace ports forward 7071:7071 -c $CODESPACE_NAME # Open port.
gh codespace ports visibility 7070:public -c $CODESPACE_NAME # Make port public. No token needed. See also devcontainer.json features ghcr.io/devcontainers/features/github-cli:1
```
