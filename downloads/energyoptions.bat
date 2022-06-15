@echo off
color 0a
title Energy Options
goto this
:error
cls
color 0c
echo Error
echo:
pause
goto end
:this
echo Type s to shut the pc off
echo Type r to restart the pc
echo:
set /p command="Option="
if %command%==s shutdown /s /t 10 && goto end
if %command%==r shutdown /r /t 10 && goto end
goto error
:end