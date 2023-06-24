# Code Test for SWM interview

This project is a code test implementation using Create React App with TypeScript, Styled Components, and Jest. It aims to demonstrate the usage of various components, styles, and utility functions related to articles and news. Also this project have responseive web designs to satisfy main displays.

# Getting Started

To get started with the project, follow these steps:

1, Make sure your node version is latest than v14
2, Clone the repository to your local machine.
3, Install the project dependencies by running [npm install] in the project root directory.
4,Start the development server by running npm start.
5,Open your browser and navigate to http://localhost:3000 to view the application.

Testing
The project includes a example test cases to ensure the correctness of its functionality. To run the tests, use the following command:
[npm test]

# Project Structure

The project structure is organized as follows:

src
├── utils
│ └── use-dynamic-font-size.ts
├── styles
│ ├── article.ts
│ ├── news.ts
│ └── globalStyle.ts
├── types
│ ├── article-container-props.ts
│ ├── article-data.ts
│ ├── article-props.ts
│ └── news-props.ts
├── components
│ └── assets
│ └── Article.tsx
├── screens
│ └── News.tsx
├── fonts
├── App.tsx
├── index.tsx
└── news.json
test
└── utils
└── use-dynamic-font-size.test.ts

# src/utils

use-dynamic-font-size.ts: This file contains a custom hook called useDynamicFontSize that handles the dynamic font size logic.

# src/styles

-article.ts: This file defines the CSS styles for the article component.

-news.ts: This file defines the CSS styles for the news component.

-globalStyle.ts: This file defines global styles for the entire application.

# src/types

-article-container-props.ts: This file defines the property types for the article container component.

-article-data.ts: This file defines the data structure for articles.

-article-props.ts: This file defines the property types for the article component.

-news-props.ts: This file defines the property types for the news component.

# src/components

-assets: This directory is used to store images for the components.

-Article.tsx: This file contains the implementation of the article screen, which displays head, teaser, byline, image.

# src/screens

-News.tsx: This file contains the implementation of the news screen, which displays news articles.

# src/fonts

This directory is used to store font files used in the application.

# src/news.json

This file contains sample news data used in the application.

# test/utils

-use-dynamic-font-size.test.ts: This file contains test cases for the useDynamicFontSize hook.

# Some Stretches

1, Component Testing: Expand my test coverage by writing more comprehensive unit tests for your components, especially for UI perspective. Aim to cover different use cases and edge cases to ensure the reliability and correctness of my code.

2, Error Handling: Implement proper error handling mechanisms, such as error boundaries or global error handlers, to handle and display errors gracefully to users. In this project, I'm using import "new.json" directly, If using Json-web-server framework, I could add useUrl hook to mock fetch data from API, or build a api server to do that. When interact with API should condsider errors, especially the aritcle data issue, this can enhance the user experience and provide better feedback when issues occur.

3, Performance Optimization: many areas where I can optimize performance, such as implementing lazy loading for articles resources, skeleton screen implementation, Loading status, Refactor the layout and DOM structure of components and pages based on requirements. This can improve the overall user experience and make the application more efficient.
