import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'

import { useOnClickOutside } from '../../../hooks/useOnClickOutside'

import Menu from './Menu'
import styles from './hamburger.module.scss'

const Hamburger = () => {
	const { ref, isShow, setIsShow } = useOnClickOutside(false)

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <IoClose /> : <CgMenuRight />}
			</button>
			<Menu isShow={isShow} setIsShow={setIsShow} />
		</div>
	)
}

export default Hamburger
