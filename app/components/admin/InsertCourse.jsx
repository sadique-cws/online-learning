"use client"
import React, { useState } from 'react';
import slugify from 'slugify';

const CreateCoursePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [instructor, setInstructor] = useState('');
  const [duration, setDuration] = useState(0);
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('https://picsum.photos/300');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
        let slug = slugify(title,"-")
      const response = await fetch('/api/course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          instructor,
          duration,
          price,
          image,
          slug
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message); // Course created successfully
        // Handle successful course creation, e.g., display a success message, redirect to course listing page
      } else {
        console.log('Error creating course:', data.message);
        // Handle failed course creation, e.g., display an error message
      }
    } catch (error) {
      console.error('Create course error:', error);
      // Handle create course error
    }
  };

  return (
    <div className='w-6/12 mx-auto'>
      <h2>Create Course</h2>
      <form onSubmit={handleFormSubmit} className='flex flex-col gap-3'>
        <div className='flex flex-col gap-1'>
          <label>Title:</label>
          <input className='border px-3 py-1 border-slate-400 rounded'
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label>Description:</label>
          <textarea className='border px-3 py-1 border-slate-400 rounded'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className='flex flex-col gap-3'>
          <label>Instructor:</label>
          <input className='border px-3 py-1 border-slate-400 rounded'
            type="text"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-col gap-3'>
          <label>Duration (in hours):</label>
          <input className='border px-3 py-1 border-slate-400 rounded'
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            required
          />
        </div>
        <div className='flex flex-col gap-3'>
          <label>Price:</label>
          <input className='border px-3 py-1 border-slate-400 rounded'
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
        </div>
        <div className='flex flex-col gap-3'>
          <label>Image URL:</label>
          <input className='border px-3 py-1 border-slate-400 rounded'
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='bg-teal-600 text-white px-3 py-2'>Create Course</button>
      </form>
    </div>
  );
};

export default CreateCoursePage;
