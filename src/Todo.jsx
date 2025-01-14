import React, { useEffect, useState } from 'react';
import { getDatabase, onValue, push, ref, set, remove } from "firebase/database";
import app from './app';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import React icons

const Todo = () => {
  const [todo, settodo] = useState('');
  const [singeltodo, setsingeltodo] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editText, setEditText] = useState('');

  const db = getDatabase();

  const handelAdd = () => {
    if (todo.trim() === '') {
      alert('Please enter a valid todo');
      return;
    }

    set(push(ref(db, 'alltodo/')), {
      singeltodo: todo,
    });

    settodo('');
  };

  useEffect(() => {
    onValue(ref(db, 'alltodo/'), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push({ ...item.val(), id: item.key });
      });
      setsingeltodo(arr);
    });
  }, []);

  const handleEdit = (id, currentText) => {
    setEditing(id);
    setEditText(currentText);
  };

  const handleUpdate = () => {
    if (editText.trim() === '') {
      alert('Please enter a valid todo');
      return;
    }

    const todoRef = ref(db, `alltodo/${editing}`);
    set(todoRef, {
      singeltodo: editText,
    });

    setEditing(null);
    setEditText('');
  };

  const handleDelete = (id) => {
    const todoRef = ref(db, `alltodo/${id}`);
    remove(todoRef);
  };

  return (
    <div className="bg-[#313131] min-h-screen flex flex-col items-center text-black py-10">
      {/* Heading */}
      <h1 className="text-5xl font-bold mb-10 tracking-widest relative">
        TO-DO NOW
        <div className="w-full border-t border-[gray] mt-3"></div>
        <FaEdit className="absolute top-[110%] left-1/2 transform -translate-x-1/2 text-gray-500 text-sm" />
      </h1>

      {/* Input Section */}
      <div className="w-[40rem] flex">
        <input
          value={editing ? editText : todo}
          onChange={(e) => (editing ? setEditText(e.target.value) : settodo(e.target.value))}
          className="bg-[#b4b4b4] text-black w-full p-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Enter a task"
          type="text"
        />
        <button
          onClick={editing ? handleUpdate : handelAdd}
          className="bg-gray-400 hover:bg-gray-500 text-[#272727] px-6 py-3 rounded-r-lg transition text-sm"
        >
          {editing ? 'Update' : 'Add task'}
        </button>
      </div>

      {/* Todo List */}
      <div className="w-[40rem] space-y-4 mt-10">
        {singeltodo.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-[#202020] text-[#c5c4c4] px-6 py-4 rounded transition"
          >
            <h2 className="text-lg">{item.singeltodo}</h2>
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleEdit(item.id, item.singeltodo)}
                className="text-[white] hover:text-gray-700 transition"
              >
                <FaEdit size={20} />
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-[white] hover:text-gray-700 transition"
              >
                <FaTrash size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
