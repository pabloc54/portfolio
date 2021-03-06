import styles from '@/styles/Skill.module.css'
import { useDispatch } from 'react-redux'

import { showModal } from '@/actions/modalActions'

function Skill({ size = 'medium', name, image, invert = false }) {
  const dispatch = useDispatch()

  const handleClick = () => {
    if (size === 'big') return
    dispatch(showModal(name))
  }

  const className = `${styles.base} ${
    size === 'big' ? styles.big : size === 'small' ? styles.small : ''
  } ${invert ? styles.invert : ''}`

  return (
    <div className={className}>
      <button
        className={styles.icon}
        onClick={handleClick}
        title={size === 'small' ? name : ''}
      >
        <img src={image} alt={name} />
      </button>
      {size !== 'small' && <span>{name}</span>}
    </div>
  )
}

export default Skill
