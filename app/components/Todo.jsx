"use client";

import { useState, useEffect } from "react";

export default function Todo() {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const result = await response.json();
        setTodo(result);
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    };

    fetchData();
  }, []);

  console.log("-----------");
  return (
    <div>
      <h1>Todo is:</h1>
      <h2>{todo.title}</h2>
    </div>
  );
}
