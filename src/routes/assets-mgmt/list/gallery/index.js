import Item from '../item'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

const Gallery = ({ dataList }) => {
  const arrangedDataList = []
  for (let i = 0; i < dataList?.length; i++) {
    if (i % 2 === 0) {
      arrangedDataList.push([dataList[i], dataList[i + 1]])
    }
  }

  return (
    <div>
      {arrangedDataList.map((row, rowIndex) => {
        return (
          <div className={styles['row']} key={rowIndex}>
            {row.map((col, colIndex) => {
              return (
                <div className={styles['col']} key={colIndex}>
                  <Item {...col} />
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

Gallery.defaultProps = {
  dataList: [],
}

Gallery.propTypes = {
  dataList: PropTypes.array,
}

export default Gallery
