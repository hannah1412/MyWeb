import {NavLink} from 'react-router-dom'
const NavBar = () => {
  return (
    <header className='header'>
        <NavLink to='/' className='w-10 h-11 rounded-lg bg-white items-center flex font-semibold'>
            <p className='blue-gradient_text'> AH </p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to='/about' className={({isActive}) => isActive ?
            'text-blue-500' : 'text-black-500'}>
                {/* if else statement for changing the colour */}
                About
            </NavLink>

            <NavLink to='/products' className={({isActive}) => isActive ?
            'text-purple-300' : 'text-black-500'}>
                Products
            </NavLink>
        </nav>
    </header>
  )
}

export default NavBar