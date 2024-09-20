# Finalpokemons

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


********************************************************************************************************************************************************************************************************************
# Pokémon Viewer

This is a simple Angular application that fetches and displays a list of Pokémon using the [PokéAPI](https://pokeapi.co/). Users can navigate through different pages of Pokémon and view their images.

## Features

- **Fetch Pokémon Data**: Retrieves a list of Pokémon with details from the PokéAPI.
- **Image Display**: Each Pokémon's image is displayed alongside its name.
- **Pagination**: Users can navigate between pages of Pokémon using "Next" and "Previous" buttons.
- **Dynamic Updates**: The application updates the displayed Pokémon dynamically as users navigate through the list.

## Technologies Used

- Angular: A platform for building mobile and desktop web applications.
- HttpClient: Angular's built-in HTTP client for making API calls.

## Getting Started

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.
4. Use `ng serve` to start the development server.
5. Open your browser and go to `http://localhost:4200` to view the application.

## How It Works

- The application initializes by calling the PokéAPI to fetch a list of Pokémon.
- Pokémon details, including their images, are loaded asynchronously.
- The user can click "Next" and "Previous" buttons to navigate through the available Pokémon.

![Pokémon Viewer Screenshot](url_to_image)

## Contribution

Feel free to contribute by submitting issues or pull requests!

