import React from 'react'
import CourseViewPage from '../../components/CourseViewPage'

const page = async ({params}) => {
  const {slug} = params;
  let courseView = await fetch(`http://127.0.0.1:3000/api/course/${slug}`)
      courseView = await courseView.json();
  return (
  <div className='w-10/12 mx-auto'>
    <CourseViewPage data={courseView}/>
  </div>
  )
}

export default page