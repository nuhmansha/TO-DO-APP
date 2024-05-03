// import React, { Component } from "react";

// class TodoApp extends Component {
//   state = {
//     input: "",
//     items: [],
//   };

//   handleChange = (event) => {
//     this.setState({
//       input: event.target.value,
//     });
//   };

//   storeItems = (event) => {
//     event.preventDefault();
//     const { input } = this.state;

//     this.setState({
//       items: [...this.state.items, input],
//       input: "",
//     });
//   };
//   deleteItems = (dls) => {
//     // const updatedItems = [...this.state.items.slice(0, index), ...this.state.items.slice(index + 1)];

//     this.setState({
//       // items: updatedItems
//       items: this.state.items.filter((data, index) => index !== dls),
//     });
//   };

//   render() {
//     const { items, input } = this.state;

//     return (
//       <div className="bg-blue-600 h-screen w-screen flex items-center justify-center">
//         <div className="bg-green-400 p-8 rounded-lg shadow-md w-full max-w-md">
//           <h1 className="text-2xl mb-4">TodoApp</h1>
//           <form className="flex gap-2 " onSubmit={this.storeItems}>
//             <input
//               type="text"
//               value={input}
//               onChange={this.handleChange}
//               className="border border-gray-500 p-2 flex py-1 w-full"
//               placeholder="Enter items..."
//             />
//           </form>
//           <ul className="mt-4 py-2 w-md flex flex-col">
//             {items.map((data, index) => (
//               <li
//                 className="flex justify-between items-center py-2 border-b bg-white mb-2 whitespace-normal"
//                 key={index}
//               >
//                 <div className="flex-1 overflow-hidden">{data}</div>
//                 <i
//                   className="fa fa-trash cursor-pointer"
//                   aria-hidden="true"
//                   onClick={() => this.deleteItems(index)}
//                 ></i>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default TodoApp;

import React, { useState } from 'react';

function TodoApp() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const storeItems = (event) => {
    event.preventDefault();
    if (input.trim()) { // Only add items with non-empty content
      setItems([...items, input]);
      setInput('');
    }
  };

  const deleteItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-blue-600 h-screen w-screen flex items-center justify-center">
      <div className="bg-green-400 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl mb-4">TodoApp</h1>
        <form className="flex gap-2" onSubmit={storeItems}>
          <input
            type="text"
            value={input}
            onChange={handleChange}
            className="border border-gray-500 p-2 flex py-1 w-full"
            placeholder="Enter items..."
          />
          <button type="submit" aria-label="Add Item">
            {/* Add button element if desired */}
          </button>
        </form>
        <ul className="mt-4 py-2 w-md flex flex-col">
          {items.map((data, index) => (
            <li
              className="flex justify-between items-center py-2 border-b bg-white mb-2 whitespace-normal"
              key={index}
            >
              <div className="flex-1 overflow-hidden">{data}</div>
              <i
                className="fa fa-trash cursor-pointer"
                aria-hidden="true"
                onClick={() => deleteItem(index)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;

