"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface ITodo {
  price: number;
  title: string;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number
  }
}

const Page = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data: ITodo[] = await response.json();
      setTodos(data);
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <nav className="bg-slate-100 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-center m-4 gap-4 p-4">FakeStore API</h1>
      <Link href={'/Server-site'} className="text-center font-extrabold text-3xl text-gray-600 hover:text-gray-700 hover:underline">Books</Link>
</nav>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {todos.map((todo, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-5 border border-black p-4 rounded-lg shadow-lg"
          >
            <p className="text-xl text-center font-bold">{todo.title}</p>
            <p className="text-lg text-green-500">${todo.price}Price:</p>
            <p className="text-sm text-gray-700 font-bold text-center">
              {todo.description}
            </p>
            <p className="text-lg text-gray-700 font-bold text-center">
              {todo.category}
            </p>
            <div>
              <img
                src={todo.image}
                alt={todo.title}
                className="h-64 w-64 object-contain m-2"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 font-bold text-center">Rating:
              <span className="inline m-2">{todo.rating.rate}</span>
            </p>
            <p className="text-lg text-gray-700 font-bold text-center">No. of Items:
              <span className="inline m-2">{todo.rating.count}</span>
            </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
