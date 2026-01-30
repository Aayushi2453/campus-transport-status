## Campus Bus Route Status System

A simple full-stack web application that displays the live status of campus bus routes.

## Problem Statement

Students often do not know the arrival time or current status of campus buses. This leads to unnecessary waiting and confusion.

## Solution

This project provides a web interface where users can:

Select a bus route  
View current status (On Time / Delayed)  
See estimated arrival time (ETA)  
Get auto-updates every 10 seconds  

## How the System Works

### Frontend (HTML, CSS, JavaScript)
Displays route information in a UI card
Calls backend API using `fetch()`
Updates UI dynamically
Auto-refreshes data every 10 seconds

### Backend (Node.js + Express)
Stores route data in memory
Provides API endpoint:

- Returns route name, status, and ETA as JSON

## Tech Stack

Node.js  
Express.js  
HTML  
CSS  
JavaScript  

## How to Run the Project

1) Clone the repository
git clone <your-repo-link>
cd <project-folder>
2) insall dependencies
npm install 
3) start the server
node index.js
4) open brower 
click the link in terminal

## Features
Multiple bus routes
Refresh every 10 sec
Status color (Green= On Time, Red== Delayed)
Interavtive Refresh button
Reponsive UI


## Assumptions
Its just a prototype not a whole working app or GPS tracker
No database has been used to make this proejct
Manually defined data is used for bus routes

