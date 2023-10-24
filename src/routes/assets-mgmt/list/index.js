import { useEffect } from 'react'
import InfiniteScroll from 'common-components/infinite-scroll'
import useFetch from './useFetch'
import Gallery from './gallery'
import { getList } from './api'
import { useOutletContext } from 'react-router-dom'

const List = () => {
  const { token } = useOutletContext()
  const { fetchData, pageData } = useFetch({
    fetchAPI: getList,
    initialAPIParams: token ? { owner: token } : {},
  })

  useEffect(() => {
    fetchData()
  }, [])

  const { data, hasMore } = pageData
  return (
    <InfiniteScroll data={data} fetchData={fetchData} hasMore={hasMore}>
      <Gallery dataList={data} />
    </InfiniteScroll>
  )
}

export default List
