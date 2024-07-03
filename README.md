# React-based Star Wars database

Study project associated with the course "React + Redux (Professional Development)" [(Udemy link)](https://www.udemy.com/share/101XKi3@O-GT4jm-TDKliMkB9zTBgeM1-_h2XW1lNa_25h_cVG69icazAt4bSDOtvZ93C85h/)

## Features and Approaches

This project leverages several key features and approaches of React:

- **Component-Based Architecture**: The application is built using reusable components, making the code modular and easier to maintain.
- **Higher-Order Components (HOCs)**: HOCs are used to enhance components with additional functionality, such as data fetching and error handling.
- **Context API**: The Context API is used for dependency injection, allowing components to access shared data and services without prop drilling.
- **Error Boundaries**: Error boundaries are implemented to catch JavaScript errors anywhere in the component tree and display a fallback UI.
- **React Router**: React Router is used for client-side routing, enabling navigation between different views of the application.
- **PropTypes**: PropTypes are used for type-checking of props, ensuring that components receive the correct data types.

## Running the Project Locally

To run this project locally, follow these steps:

1. **Clone the repository**:
```sh
git clone https://github.com/apalevich/star-db.git
cd star-db
```

2. **Install dependencies**:
```sh
npm install
```

3. **Start the development server**:
```sh
npm start
```

4. **Build the project for production**:
```sh
npm run build
```

5. **Run tests**:
```sh
npm test
```

## Project Structure

The project is organized into several key directories:

- **`src/components`**: Contains all the React components, including higher-order components, error boundaries, and specific feature components.
- **`src/services`**: Contains service files for API calls and data fetching.
- **`src/pages`**: Contains the main pages of the application, which are rendered by React Router.
- **`public`**: Contains the static assets and the main HTML file.

For more details on the code, refer to the following files:
- Higher-Order Components: `src/components/hoc-helpers/with-data.js`
- Error Boundaries: `src/components/error-boundry/error-boundry.js`
- Main Application: `src/components/app/app.js`

## Feedback and Contributions

I would love to hear your thoughts and feedback on this project. Please report issues or suggestions on the [GitHub Issues](https://github.com/apalevich/star-db/issues) page. Contributions are welcome via pull requests.

Thank you!