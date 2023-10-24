import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import useWeb3 from 'hooks/useWeb3'
import styles from './root.module.scss'

const Root = () => {
  const { token, loaded } = useWeb3()
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
      <div>{loaded && <Outlet context={{ token }} />}</div>
    </div>
  )
}

export default Root
