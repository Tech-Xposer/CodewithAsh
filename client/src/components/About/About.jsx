import { useLoaderData } from 'react-router-dom'
const About = () => {
 const data = useLoaderData()
  
  console.log(data);
  return (
    <div className='h-screen text-center text-white flex  items-center '>
      <section>
        <img src={data.avatar_url} alt="" className='border-8 border-white rounded-full' />
      </section>
      <section>
        <h1>{data.name}</h1>
      </section>
    </div>
  )
}

export default About

export const getGitHubProfile = async () => {
  const response = await fetch('https://api.github.com/users/tech-Xposer')
  const data = await response.json()
  return data
}