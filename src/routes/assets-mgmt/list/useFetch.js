import { useCallback, useState } from 'react'

const useFetch = ({ fetchAPI, initialAPIParams = {} }) => {
  const [apiParams, setApiParams] = useState({
    offset: 0,
    limit: 20,
    ...initialAPIParams,
  })

  const [pageData, setPageData] = useState({
    data: [],
    hasMore: true,
  })

  const fetchData = useCallback(() => {
    return fetchAPI(apiParams).then((response) => {
      setPageData((prev) => {
        return {
          ...prev,
          data: prev.data.concat(response),
          hasMore: response.length !== 0,
        }
      })
      setApiParams({
        ...apiParams,
        offset: apiParams.offset + 1,
      })
    })
  }, [apiParams, fetchAPI])

  return {
    fetchData,
    pageData,
    setApiParams,
    apiParams,
  }
}

export default useFetch
