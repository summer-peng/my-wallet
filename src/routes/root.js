import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import styles from './root.module.scss'

const Root = () => {
  return (
    <div>
      <ul className={styles['nav']}>
        <li className={styles['nav-item']}>
          <Link to="/list">List</Link>
        </li>
        <li className={styles['nav-item']}>
          <Link to="/test">Test</Link>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Root
