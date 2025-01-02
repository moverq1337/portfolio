import { motion } from 'motion/react'
import { EXPERIENCES } from '../constants'

const Experience = () => {
	return (
		<div className='border-b border-neutral-900 pb-4'>
			<h1 className='my-20 text-center text-4xl'>Experience</h1>
			<div>
				{EXPERIENCES.map((experience, index) => (
					<div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
						<div className='w-full lg:w-1/4'>
							<motion.p
								initial={{ x: -200, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ duration: 1 }}
								className='mb-2 text-sm text-neutral-400'
							>
								{experience.year}
							</motion.p>
						</div>
						<div className='w-full max-w-xl lg:w-3/4'>
							<motion.h6
								initial={{ y: -100, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ duration: 1.5 }}
								className='mb-2 font-semibold'
							>
								{experience.role} -{' '}
								<span className='text-sm text-purple-300'>
									{experience.company}
								</span>
							</motion.h6>
							<motion.p
								initial={{ x: 200, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ duration: 2 }}
								className='mb-4 text-neutral-400'
							>
								{experience.description}
							</motion.p>
							{experience.technologies.map((tech, index) => (
								<motion.span
									initial={{ y: -100, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{ duration: 2.5 }}
									key={index}
									className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'
								>
									{tech}
								</motion.span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Experience
