Note : 

trigger:
- main -> Menggunakan repository branch main

pool:
  vmImage: ubuntu-latest -> Menggunakan Virtual Machine ubuntu-lastest

steps:
- task: NodeTool@0
  inputs:
    versionSpec: '10.x'
  displayName: 'Install Node.js' -> Install Nodejs

- script: |
    npm install
    npm run build
  displayName: 'npm install and build' -> Running npm

- script: |
    npx cypress run --reporter mochawesome --headed chrome -> Running file cypress menggunakan report mochawesome
  displayName: 'Running cypress with moachawesome report'
