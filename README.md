# 🚀 Development Stack

A modern and responsive **Development Stack** web application built with React and TypeScript. It allows users to explore different technologies, view their details, and manage their selected technology stack through an interactive interface.

## 🛠️ Technologies Used

* ⚛️ React
* 📘 TypeScript
* 🎨 Tailwind CSS
* 🌼 DaisyUI
* 🔔 React Toastify
* 📦 JSON Data
* ⚡ Vite

## ✨ Features

### 1. 🔍 Explore Technologies

Users can browse different development technologies along with useful information such as their category, rating, difficulty level, description, and icon.

### 2. 📚 Build Your Development Stack

Users can select technologies and add them to their personal development stack. They can also remove technologies when they no longer need them.

### 3. 🔔 Interactive User Experience

The application provides a responsive interface with toast notifications, loading states, and a clean modern design for a smooth user experience.

---

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript.

React uses JSX because it makes it easier to create and understand the UI of a component.

For example:

```jsx
<h1>Hello React</h1>
```

---

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed inside a component that can change over time.

In simple words:

* **Props →** Parent gives data to child.
* **State →** Component manages its own changing data.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets us create and manage state inside a React component.

In this project, `useState` is used in `App.tsx` to store the promise returned by the technology data-fetching function:

```tsx
const [technologyPromise] = useState(() => technologyFetch());
```

The promise is then passed to the `Technology` component.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component, such as fetching data, working with APIs, or interacting with the browser.

## **I did not use `useEffect` in this project.** Instead, I created a `technologyFetch()` function that fetches the `/data.json` file and returns the data. The promise is stored using `useState` and passed to the `Technology` component.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list.

A unique key helps React understand which item has changed, been added, or been removed.

For example:

```jsx
{technologies.map(technology => (
  <TechnologyCard key={technology.id} />
))}
```

Using a unique ID is better than using the array index because the ID stays connected to the same item.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

For example, an empty development stack can show a message when there are no selected technologies:

```jsx
{selectedTechnology.length === 0 ? (
  <p>Your development stack is empty.</p>
) : (
  // Show selected technologies
)}
```

This means the empty-stack message is displayed only when there are no technologies selected.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child using **props**.

For example:

```jsx
<TechnologyCard technology={technology} />
```

Here, the parent sends `technology` to `TechnologyCard`.

To send something back, the parent can pass a **function as a prop**:

```jsx
<TechnologyCard
  technology={technology}
  setSelectedTechnology={setSelectedTechnology}
/>
```

The child can then call that function when something happens, such as clicking an **Add** or **Remove** button.

So:

**Parent → Child:** Props
**Child → Parent:** Callback function passed through props

---

## 📁 Project Structure

```text
src/
├── assets/
├── components/
│   ├── Nav/
│   ├── Hero/
│   ├── Technologies/
│   └── Footer/
├── types/
├── App.tsx
├── main.tsx
└── index.css

public/
└── data.json
```

## 🎨 Styling

The project uses **Tailwind CSS** and **DaisyUI** for styling and UI components. The project also defines a custom gradient theme in `index.css`.

## ⚡ Getting Started

Clone the repository and install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open the local URL provided by Vite in your browser.

---

### 💙 Built with React + TypeScript

Made with ❤️ while learning and practicing modern React development.
.............