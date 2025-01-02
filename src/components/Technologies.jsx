import { motion } from 'motion/react'

import { BiLogoPostgresql } from 'react-icons/bi'
import { RiNextjsLine, RiReactjsLine } from 'react-icons/ri'
import { SiDocker, SiRedux, SiTailwindcss } from 'react-icons/si'

const techVariants = duration => ({
	inital: { y: -10 },
	animate: {
		y: [10, -10],
		transition: {
			duration: duration,
			ease: 'linear',
			repeat: Infinity,
			repeatType: 'reverse',
		},
	},
})

const Technologies = () => {
	return (
		<div className='border-b border-neutral-800 pb-24'>
			<h1 className='my-20 text-center text-4xl'>Technologies</h1>
			<motion.div
				initial={{ y: -200, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 2 }}
				className='flex flex-wrap items-center justify-center gap-4'
			>
				<motion.div
					variants={techVariants(2.5)}
					initial='initial'
					animate='animate'
					whileHover={{ scale: 1.1 }}
					className='rounded-2xl border-4 border-neutral-800 p-4'
				>
					<RiReactjsLine className='text-7xl text-cyan-400' />
				</motion.div>
				<motion.div
					variants={techVariants(5)}
					initial='initial'
					animate='animate'
					whileHover={{ scale: 1.1 }}
					className='rounded-2xl border-4 border-neutral-800 p-4'
				>
					<RiNextjsLine className='text-7xl text-gray-400' />
				</motion.div>
				<motion.div
					variants={techVariants(2)}
					initial='initial'
					animate='animate'
					whileHover={{ scale: 1.1 }}
					className='rounded-2xl border-4 border-neutral-800 p-4'
				>
					<SiTailwindcss className='text-7xl text-cyan-600' />
				</motion.div>
				<motion.div
					variants={techVariants(3)}
					initial='initial'
					animate='animate'
					whileHover={{ scale: 1.1 }}
					className='rounded-2xl border-4 border-neutral-800 p-4'
				>
					<BiLogoPostgresql className='text-7xl text-blue-600' />
				</motion.div>
				<motion.div
					variants={techVariants(4)}
					initial='initial'
					animate='animate'
					whileHover={{ scale: 1.1 }}
					className='rounded-2xl border-4 border-neutral-800 p-4'
				>
					<SiRedux className='text-7xl text-purple-800' />
				</motion.div>
				<motion.div
					variants={techVariants(2.5)}
					initial='initial'
					animate='animate'
					whileHover={{ scale: 1.1 }}
					className='rounded-2xl border-4 border-neutral-800 p-4'
				>
					<SiDocker className='text-7xl text-blue-700' />
				</motion.div>
			</motion.div>
		</div>
	)
}

export default Technologies
