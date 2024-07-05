# Fish Tank Stocking App

## Overview

The Fish Tank Stocking App is a comprehensive tool designed to help aquarium enthusiasts manage their fish tanks efficiently. The app provides a detailed database of fish species, allowing users to create a well-balanced aquarium while ensuring the health and compatibility of their fish.

## Features

- **Home Page**: Lists all available fish species from the database with pictures and details.
- **Favorite Fish**: Each fish card has a favorite button. Clicking this button adds this fish to your "favorites," which can be viewed in the Favorites tab.
- **Aquarium Calculator**: Allows users to input the size of their tank and the type of water (salt or fresh). The calculator shows a list of compatible fish from the database.
- **Stocking Limits**: The app prevents users from overstocking their tanks by calculating and displaying the available space in the aquarium.
- **Fish Details**: Provides specific details about each type of fish added to the aquarium.
- **Add Fish Button**: Brings up a form to add a new fish to the database.

## Installation

1. Clone the repository to your local machine: `git clone git@github.com:Lsimmons98/aquarium.git`
2. Navigate to the project directory: `cd project-2`
3. Install the necessary dependencies: `npm install`

## Running the App

1. Start the JSON server: `json-server --watch db.json --port 3001`
2. Start the React application: `npm start`

## Usage

1. **Home Page**: Browse through the list of available fish, view their details, and add them to your favorites.
2. **Favorites Tab**: View and manage your list of favorite fish.
3. **Aquarium Calculator**: Enter your tank size and water type to get a list of compatible fish. Add fish to your aquarium and monitor the stocking level.
4. **Aquarium Details**: View detailed information about the fish in your aquarium, including their care requirements and compatibility.
5. **Add Fish**: Use the "Add Fish" button to bring up a form where you can add new fish to the database.

## Technologies Used

- **React**: For building the user interface.
- **JSON Server**: For simulating a backend API.
- **CSS**: For styling the application.
