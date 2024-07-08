import React, { useState } from 'react';
import Modal from './Modal';
import axios from 'axios';

const daysInMonth = (month, year) => new Date(year, month, 0).getDate();

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const openModal = () => {
    setTasks([{ task: '', timing: '', priority: 'medium' }]); // Reset form data
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleTaskChange = (index, field, value) => {
    const newTasks = tasks.slice();
    newTasks[index][field] = value;
    setTasks(newTasks);
  };

  const addTask = () => {
    setTasks([...tasks, { task: '', timing: '', priority: 'medium' }]);
  };

  const handleSubmit = async () => {
    try {
      await axios.post('your-server-url', { date, tasks });
      closeModal();
    } catch (error) {
      console.error('Error submitting tasks', error);
    }
  };

  const renderCalendar = () => {
    const month = date.getMonth() + 1; // Months are 0-based in JavaScript
    const year = date.getFullYear();
    const days = daysInMonth(month, year);

    const daysArray = Array.from({ length: days }, (_, i) => i + 1);

    return (
      <div className="grid grid-cols-7 gap-4">
        {daysArray.map((day) => (
          <div
            key={day}
            className="p-4 border-2 border-black rounded-lg text-center cursor-pointer font-bold transition duration-200 ease-in-out hover:bg-black hover:text-white"
            onClick={() => {
              setDate(new Date(year, month - 1, day));
              openModal();
            }}
          >
            {day}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Calendar</h2>
      {renderCalendar()}
      <div className="mt-4 font-bold">Selected date: {date.toDateString()}</div>

      <Modal show={modalIsOpen} onClose={closeModal}>
        <div className="h-4/5 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">
            Tasks for {date.toDateString()}
          </h2>
          <table className="w-full mb-4">
            <thead>
              <tr className="text-left">
                <th className="w-1/12">S.No</th>
                <th className="w-6/12">Task</th>
                <th className="w-3/12">Timing</th>
                <th className="w-2/12">Priority</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <input
                      type="text"
                      value={task.task}
                      onChange={(e) =>
                        handleTaskChange(index, 'task', e.target.value)
                      }
                      className="w-full p-2 border border-black rounded-lg"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      value={task.timing}
                      onChange={(e) =>
                        handleTaskChange(index, 'timing', e.target.value)
                      }
                      className="w-full p-2 border border-black rounded-lg"
                      step="1800" // 30-minute increments
                      min="00:00"
                      max="23:59"
                    />
                  </td>
                  <td>
                    <select
                      value={task.priority}
                      onChange={(e) =>
                        handleTaskChange(index, 'priority', e.target.value)
                      }
                      className="w-full p-2 border border-black rounded-lg"
                    >
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={addTask}
            className="px-4 py-2 bg-black text-white rounded-lg mb-4"
          >
            +
          </button>
        </div>
        <div className="absolute bottom-4 w-full flex justify-end pr-6">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-black text-white rounded-lg"
          >
            Done
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CalendarPage;
