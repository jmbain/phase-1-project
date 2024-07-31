# Phase 1 Project

## Intro

Welcome to my school data project that leverages the DOE National Center for Education API to do present various cuts of data. 
[Source] (https://catalog.data.gov/dataset/public-school-characteristics-current-340b1)

## Setup
In order to use the web application, run the following code in your terminal:
```bash
json-server -- watch db.json
```

Then use Visual Studio Code to open another terminal and run...
```bash
live-server
```


## Functionality

This application currently supports the following high-level functionality:
- Filter by state to present schools that have grown/shrunk the most in terms of student count since the start of the pandemic
- Click on school names to show school-specific data