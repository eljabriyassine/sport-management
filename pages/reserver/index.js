import { useState } from "react";

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const TIME_SLOTS = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 AM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
];

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow">
        {/* Header */}
        <div className="p-6 border-b">
          <h1 className="text-xl font-semibold">Digital Transformation</h1>
          <div className="flex items-center gap-4 mt-2 text-gray-500">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>30.06.2024</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>California, USA</span>
            </div>
          </div>

          {/* Meeting Info */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-white text-sm">
                JD
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-sm">
                AB
              </div>
              <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white text-sm">
                +2
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <span className="mr-4">Duration: 30 min</span>
              <span>Meeting Type: Web conference</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Calendar */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <button className="p-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <span className="font-medium">December 2024</span>
              <button className="p-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1">
              {DAYS.map((day) => (
                <div key={day} className="text-center text-sm font-medium py-2">
                  {day}
                </div>
              ))}
              {Array.from({ length: 35 }).map((_, i) => {
                const day = i + 1;
                const isSelected = day === selectedDate;
                const isToday = day === 30;
                return (
                  <button
                    key={i}
                    onClick={() => setSelectedDate(day)}
                    className={`
                      py-2 text-sm rounded-md
                      ${
                        isSelected
                          ? "bg-purple-600 text-white"
                          : "hover:bg-gray-100"
                      }
                      ${isToday ? "font-bold" : ""}
                    `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm">
                Today
              </button>
              <button className="px-4 py-2 border rounded-md text-sm">
                Clear
              </button>
            </div>
          </div>

          {/* Time Slots */}
          <div>
            <h2 className="font-medium mb-4">Wednesday 30 June 2024</h2>
            <div className="text-center mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-600">
                Pick a time
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {TIME_SLOTS.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`
                    py-2 px-4 rounded-md text-sm border border-purple-200
                    ${
                      selectedTime === time
                        ? "bg-purple-600 text-white"
                        : "text-purple-600 hover:bg-purple-50"
                    }
                  `}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
