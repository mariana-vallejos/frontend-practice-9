import { Link } from 'react-router'
import errorImg from '../assets/img/fatal-error.png'

const NotFound = () => {
  return (
    <section className='flex flex-col justify-center items-center h-screen'>
        <h3 className='text-4xl font-bold'>Page Not Found</h3>
        <img src={errorImg} alt="" className='my-4'/>
        <Link to={'/'} className='bg-amber-600 px-3 py-3 rounded-md text-white'>Go to home</Link>
    </section>
  )
}

export default NotFound