# Neurootix Project

## Overview

Neurootix is a cutting-edge AI solutions provider, specializing in AI development, data science, and business process automation. This project represents the company's website, built using React, TypeScript, Tailwind CSS, and Shadcn UI components.

## Technologies Used

-   **React:** A JavaScript library for building user interfaces.
-   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
-   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
-   **Shadcn UI:** A collection of accessible and reusable UI components built using Radix UI and Tailwind CSS.
-   **Lucide React:** A library of beautiful SVG icons.
-   **Vite:** A fast build tool and development server.
-   **React Router:** A standard library for routing in React.
-   **Zod:** For schema validation.
-   **Class Variance Authority (cva):** For creating reusable component styles.
-   **TanStack React Query:** For data fetching and caching.
-   **Radix UI:** For accessible UI primitives.

## Project Structure

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm run dev
    ```

    Open your browser and navigate to `http://localhost:8080`.

## Building for Production

1.  **Build the project:**

    ```bash
    npm run build
    ```

2.  **Serve the `dist` directory:**

    You can use any static file server to serve the contents of the `dist` directory. For example, using `serve`:

    ```bash
    npm install -g serve
    serve dist
    ```

## Key Components

-   **`src/components/`**: Contains the React components used to build the website.
    -   `HeroSection`: The main landing section with a rotating carousel of AI solutions.
    -   `ServicesSection`: Highlights the key services offered by Neurootix.
    -   `AISolutionsSection`: Showcases specific AI solutions with detailed descriptions.
    -   `AboutSection`: Provides information about the company.
    -   `PricingSection`: Displays transparent pricing plans for different AI solutions.
    -   `ContactSection`: A contact form for users to send inquiries.
    -   `Navigation`: The main navigation bar.
    -   `Footer`: The website footer.
-   **`src/components/ui/`**: Reusable UI components built with Shadcn UI.
-   **`src/pages/`**: Contains the main pages of the website.
    -   `Index.tsx`: The home page.
    -   `NotFound.tsx`: The 404 error page.
-   **`src/lib/utils.ts`**: Utility functions used throughout the project.
-   **`src/hooks/`**: Custom React hooks.

