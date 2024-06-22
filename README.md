# WebTech-Corner | Slash NextJS - Styled-Components Internship Filtration Task

WebTech-Corner is a Next.js simple blog web app leveraging Styled-Components for styling, aimed at providing a simple read and add blog posts functionalities. This project is part of the [Slash](https://slash-eg.com/) NextJS Internship Filtration Process.

## Demo

You can access a live demo [here](https://web-tech-corner.vercel.app/), or you may watch the following video demo:

https://github.com/Farahat612/WebTech-Corner---TechBlog---NextJS---Styled-Components/assets/67427124/057d17eb-5ec8-4509-84e6-6496f21b21cb


## Skills nad Techniques Covered

- Server Side Rendering.
- Server Side Data Fetching using Servre Actions.
- CLient Side filtration and sorting.
- Loading State Management.
- Simple basic form validation.
- Responsive design and SEO optimization.

## Technologies Used

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction/)

## Project Structure

```shell
└── `src/`: Contains the main application code
├── `actions/`: Server actions for API requests
├── `app/`: Main Route
│ ├── `_components/`: Components for Main Route
│ └── `new-post/`: Adding a new post route
│ └── `posts/`: Posts page Route
│ ├── `_components/` : Components for this Route
│ └── `[postId]/`
│ ├── `_components/`: Components for this Route
│ ├── `layout.tsx`: Root Layout
│ ├── `page.tsx`: Home Route Page
├── `assets/`: Assets
├── `components/`: Global Components
│ ├── `styled-components/`: Styled-comonents
│ └── `ui/`: UI Reusable Components
├── `constants/`: Reusable contstants and types
└── `lib/`: Reusable utilities
├── `providers.tsx`: Context Providers for the entire App
```

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js (v14 or later)
- npm

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/your_username_/WebTech-Corner.git
   ```

2. Change directory

   ```shell
   cd WebTech-Corner
   ```

3. Install dependencies

   ```shell
   npm install
   ```

4. Start the development server

   ```shell
   npm run dev
   ```

5. Visit `http://127.0.0.1:3000/` in your browser.

## Limitaions

> Application functionalities and dependencies decisions were Task requirements oriented, which drived these limitations:

1. Using client side styling library like `Styled-Components` is not the best option as an integration with NextJS `SSR`.
2. The Application doesn't support Full `CRUD` functionalities, only Create and Read. (To be added later)

## Acknwledgment

> This application is built and developed as part of Internship hiring filtration process for [slash](https://slash-eg.com/) Egyptian start-up.

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
