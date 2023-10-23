import { useEffect } from 'react'
import InfiniteScroll from 'common-components/infinite-scroll'
import useFetch from './useFetch'
import Gallery from './gallery'
import { getList } from './api'

// add token from here if it needed.
//import { TOKEN } from 'utils/const'
const params = {
  //owner :TOKEN
}

const List = () => {
  const { fetchData, pageData } = useFetch({
    fetchAPI: getList,
    initialAPIParams: params,
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
