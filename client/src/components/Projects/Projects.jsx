import React from 'react'
import {useLoaderData} from 'react-router-dom'
const Projects = () => {
  const data = useLoaderData()
  return (
    <div className='w-full h-full `'>
      <h1>All Projects</h1>
      {
        
      }
    </div>
  )
}

export default Projects

export const fetchProjects = async()=>{
  try {
    const response = await fetch('https://api.github.com/users/Tech-Xposer') 
    const data = await response.json()
    console.log(data);
    return data
  } catch (error) {
    console.error('Error fetching projects:', error);
  }
}