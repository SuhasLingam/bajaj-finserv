# Bajaj Finserv Health Dev Challenge - Full Stack Application

This project was created for the **Bajaj Finserv Health Dev Challenge** on 22nd September 2024. It includes both backend and frontend components to meet the full-stack requirements of the challenge.

## Project Links

- **GitHub Repo:**  
  [https://github.com/SuhasLingam/bajaj-finserv](https://github.com/SuhasLingam/bajaj-finserv)
- **Frontend App:**  
  [https://bajaj-finserv-ra2111003020111.vercel.app/](https://bajaj-finserv-ra2111003020111.vercel.app/)
- **Backend API:**  
  [https://bajaj-finserv-rho-peach.vercel.app/bfhl](https://bajaj-finserv-rho-peach.vercel.app/bfhl)

## Backend Overview

The backend API is built using **Node.js** and **Express**. It exposes two endpoints:

### 1. POST `/bfhl`
This endpoint accepts a JSON input, processes the data, and returns:
- User ID, email, and roll number.
- Separate arrays for numbers and alphabets.
- The highest lowercase alphabet from the input.
- File validation info (if a file is provided).

### 2. GET `/bfhl`
This endpoint returns a hardcoded operation code as a simple JSON response.

## Frontend Overview

The frontend is built using **React.js** and provides a simple interface to interact with the backend.

### Key Features:
1. **JSON Input:**  
   Users can submit valid JSON through a text input field.
   
2. **Dynamic Dropdown:**  
   After submission, users can select options (Alphabets, Numbers, or Highest Lowercase Alphabet) from a multi-select dropdown to filter the response data.

3. **Filtered Results:**  
   Based on the dropdown selection, filtered data will be displayed on the frontend.

4. **Page Title:**  
   The page title dynamically shows the roll number: `RA2111003020111`.

## How to Use

1. Visit the [Frontend App](https://bajaj-finserv-ra2111003020111.vercel.app/).
2. Enter a JSON input like this:  
   ```json
   { "data": ["A", "B", "c", "1"] }
   ```
3. Submit the form to send the data to the backend API.
4. Select filters from the dropdown (e.g., Alphabets, Numbers, Highest Lowercase Alphabet).
5. View the filtered response on the screen.

## Tech Stack

- **Backend:** Node.js, Express
- **Frontend:** React.js and Tailwind CSS
- **Hosting:** Vercel

## Developer Information

- **Name:** Suhas Srinivas Lingam
- **Roll Number:** RA2111003020111
