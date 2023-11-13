set /p PACKAGE=Enter package name:
npm install %PACKAGE%
npm audit fix
start rebuild.bat