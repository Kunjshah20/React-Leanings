import { useState } from "react";

// e.g for tailwind used in the application
// 1. active:scale-90: Scales the element down to 90% of its original size when it is in the active state (e.g., when it's being clicked).
// 2. hover:scale-110: Scales the element up to 110% of its original size when hovered over.
// 3. focus:ring-4: Adds a focus ring to the element with a width of 4 units.
// 4. focus:outline-none: Removes the default outline that appears around focused elements.
// 5. focus:ring-red-400: Sets the color of the focus ring to a shade of red (specifically red-400 according to Tailwind's color palette).
// 6. transform: Enables CSS transformations for the element.
// 7. transition-transform: Specifies that transformations on the element should be transitioned smoothly.
// 8. duration-200: Sets the transition duration to 200 milliseconds.
// 9. ease-in-out: Specifies the easing function to be used for the transition, making it start slow, speed up, and then slow down again.

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center fixed bottom-12 inset-x-0 px-2">
        <div
          className="flex justify-center flex-wrap gap-3 shadow-lg shadow-slate-600 bg-slate-400  px-5 py-3 rounded-3xl  font-poppins"
        >
          <button
            onClick={() => setColor("red")}
            className=" px-4 py-2 rounded-full text-white shadow-md shadow-slate-800 active:scale-90 transform transition-transform duration-200 hover:scale-110 ease-in-out focus:ring-4 focus:outline-none focus:ring-red-400 bg-red-600"
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-md shadow-slate-800 active:scale-90 transform transition-transform duration-200 hover:scale-110 ease-in-out focus:ring-4 focus:outline-none focus:ring-green-400 bg-green-600"
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-md shadow-slate-800 active:scale-90 transform transition-transform duration-200 hover:scale-110 ease-in-out focus:ring-4 focus:outline-none focus:ring-blue-400 bg-blue-600"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-md shadow-slate-800 active:scale-90 transform transition-transform duration-200 hover:scale-110 ease-in-out focus:ring-4 focus:outline-none focus:ring-lime-500 bg-[olive]"
          >
            Olive
          </button>
          <button
            onClick={() => setColor("gray")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-md shadow-slate-800 active:scale-90 transform transition-transform duration-200 hover:scale-110 ease-in-out focus:ring-4 focus:outline-none focus:ring-gray-300 bg-gray-400"
          >
            Gray
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-md shadow-slate-800 active:scale-90 transform transition-transform duration-200 hover:scale-110 ease-in-out focus:ring-4 focus:outline-none focus:ring-orange-300 bg-orange-400"
          >
            Orange
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-2 rounded-full text-black shadow-md shadow-slate-800 active:scale-90 transform transition-transform duration-200 hover:scale-110 ease-in-out focus:ring-4 focus:outline-none focus:ring-yellow-200 bg-yellow-300"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-2 rounded-full text-black shadow-md shadow-slate-800 active:scale-90 transform transition-transform duration-200 hover:scale-110 ease-in-out focus:ring-4 focus:outline-none focus:ring-pink-50 bg-pink-200"
          >
            Pink
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-md shadow-slate-800 active:scale-90 transform transition-transform duration-200 hover:scale-110 ease-in-out focus:ring-4 focus:outline-none focus:ring-purple-300 bg-purple-500"
          >
            Purple
          </button>
          <button
            onClick={() => setColor("lavender")}
            className="outline-none px-4 py-2 rounded-full text-black shadow-md shadow-slate-800 active:scale-90 transform transition-transform duration-200 hover:scale-110 ease-in-out focus:ring-4 focus:outline-none focus:ring-purple-200 bg-[lavender]"
          >
            Lavender
          </button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-2 rounded-full text-black shadow-md shadow-slate-800 active:scale-90 transform transition-transform duration-200 hover:scale-110 ease-in-out focus:ring-4 focus:outline-none focus:ring-slate-200 bg-white"
          >
            White
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-md shadow-slate-800 active:scale-90 transform transition-transform duration-200 hover:scale-110 ease-in-out focus:ring-4 focus:outline-none focus:ring-slate-700 bg-black"
          >
            Black
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
