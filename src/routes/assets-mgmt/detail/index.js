import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDetail } from './api'
import styles from './styles.module.scss'

const Detail = () => {
  const { assetContractAddress, tokenId } = useParams()

  const [asset, setAsset] = useState({})

  useEffect(() => {
    getDetail({ assetContractAddress, tokenId }).then((res) => {
      setAsset(res)
    })
  }, [])

  const { collection, image_url, description, name, permalink } = asset

  return (
    <div className={styles['container']}>
      <h1 className={styles['title']}>{collection?.name}</h1>
      <div className={styles['image-section']}>
        <img className={styles['image']} src={image_url} />
      </div>
      <h1 className={styles['title']}>{name}</h1>
      <div className={styles['description-section']}>
        <label>Description</label>
        <div className={styles['description']}>{description}</div>
      </div>
      <div className={styles['permalink-section']}>
        <a
          className={styles['permalink']}
          href={permalink}
          target="_blank"
          rel="noreferrer"
        >
          Permalink
        </a>
      </div>
    </div>
  )
}

export default Detail
