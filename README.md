# TechStack Builder

A interactive web application that allows developers to browse, filter their ideal technology stack for upcoming projects.

## Key Features

* **Real-Time Stack Assembly:** Add technologies to your active stack with a single click and watch your custom environment compile instantly.
* **Duplicate Protection:** Built-in safeguards stop you from adding the same technology twice.
* **Dynamic Stack Management:** Review your selected tools side-by-side, remove individual components on the fly, or clear the entire stack to start fresh.

## Technologies Used

* **React** – use, state, useState
* **TypeScript** – prevent wrong data types.
* **Tailwind CSS** – For best UI..

---

## React Conceptual Q&A

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It is a syntax extension that help me write HTML-like structures directly inside my JavaScript code.
### 2. What is the difference between props and state?
* **Props** are like arguments passed down into a component by its parent. They are read-only and cannot be changed by the component receiving them.
* **State** is a component's private, internal memory. It is fully mutable and managed entirely inside the component to track data that changes over time.

### 3. What does the useState hook do, and where did you use it in this project?
In this project, it was used inside `Technologies.tsx`

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
The `useEffect` hook runs outside side-effects like fetching data.

### 5. Why does every item in a `.map()` list need a unique key prop?
React needs a unique `key` to identify which items in a list have changed.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing or hiding specific pieces of UI based on whether a condition is true or false. 
**Example from this project:** Inside the `TechStackCard` component, we check if the stack array is empty to toggle between a placeholder message and the actual list:
```tsx
{stack.length === 0 ? (
    <p>No technologies added yet.</p>
) : (
    <ul className="space-y-2">...</ul>
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
* **Parent to Child:** The parent passes data down as **props** attributes (Like example: `<Technology isAdded={isAdded} />`).
* **Child to Parent:** The parent passes a **callback function** down as a prop. The child component calls that function and inserts arguments inside it to trigger a reaction upstream (Like Example: `onClick={() => onAddToStack(technology)}`).
