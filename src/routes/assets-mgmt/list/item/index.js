import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const Item = ({ image_thumbnail_url, name, asset_contract, token_id }) => {
  return (
    <a
      href={`/detail/${asset_contract?.address}/${token_id}`}
      className={styles['item']}
    >
      <div className={styles['img-container']}>
        <img src={image_thumbnail_url} />
      </div>
      <div className={styles['title']}>{name}</div>
    </a>
  )
}

Item.propTypes = {
  image_thumbnail_url: PropTypes.string,
  name: PropTypes.string,
  asset_contract: PropTypes.object,
  token_id: PropTypes.string,
}

export default Item
