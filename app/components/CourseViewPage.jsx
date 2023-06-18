import React from 'react';

const CourseViewPage = ({data}) => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="bg-white rounded-lg shadow-lg flex">
          <div className="px-6 py-4 flex-1">
            <h1 className="text-3xl font-bold text-gray-800">{data.title}</h1>
            <p className="text-gray-600 mt-2">{data.description}</p>
          </div>
          <div className="bg-gray-200 px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">Course Details</h2>
            <ul className="mt-2">
              <li className="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M15 10a5 5 0 11-10 0 5 5 0 0110 0zm-7-7a1 1 0 100-2 1 1 0 000 2zM4 9a1 1 0 112 0 1 1 0 01-2 0zm12 0a1 1 0 112 0 1 1 0 01-2 0zM3.449 13.152a3 3 0 003.763 3.763l1.06-1.06a1 1 0 111.414 1.414l-1.06 1.06A3 3 0 103.45 13.152z" clipRule="evenodd" />
                </svg>
                <span>Duration: {data.duration} weeks</span>
              </li>
              <li className="flex items-center text-gray-600 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-10H9v4a1 1 0 102 0v-4z" clipRule="evenodd" />
                </svg>
                <span>Level: Intermediate</span>
              </li>
              <li className="flex items-center text-gray-600 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18l-6-3V5l6 3V5l6 3v7l-6 3v-2l6-3v1l-6 3V8l6-3v1l-6 3v3zm0-16L4 5l6 3 6-3-6-3z" clipRule="evenodd" />
                </svg>
                <span>Price: ${data.price}</span>
              </li>
            </ul>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseViewPage;
