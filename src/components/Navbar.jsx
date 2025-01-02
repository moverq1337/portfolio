import { FaGithub, FaTelegram } from 'react-icons/fa'
import logo from '../assets/mover_logo.png'

import { FaInstagram } from 'react-icons/fa'

import { FaDiscord } from 'react-icons/fa'

const Navbar = () => {
	return (
		<nav className=' mb-20 flex items-center justify-between py-6'>
			<div className='flex flex-shrink-0 items-center'>
				<img className='w-36' src={logo} alt='logo' />
			</div>
			<div className='m-8 flex items-center justify-center gap-4 text-2xl'>
				<a href='https://t.me/moverq' target='_blank'>
					<FaTelegram />
				</a>
				<a href='https://github.com/moverq1337' target='_blank'>
					<FaGithub />
				</a>
				<a href='https://instagram.com/moverq' target='_blank'>
					<FaInstagram />
				</a>
				<a href='https://discord.gg/DeQTHxTe' target='_blank'>
					<FaDiscord />
				</a>
			</div>
		</nav>
	)
}

export default Navbar
