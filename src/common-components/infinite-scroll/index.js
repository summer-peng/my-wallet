import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const MyInfiniteScroll = ({ fetchData, data, hasMore, children }) => {
  return (
    <InfiniteScroll
      dataLength={data?.length} //This is important field to render the next data
      next={fetchData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      // below props only if you need pull down functionality
      refreshFunction={fetchData}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
      pullDownToRefreshContent={
        <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
      }
      releaseToRefreshContent={
        <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
      }
    >
      {children}
    </InfiniteScroll>
  )
}
MyInfiniteScroll.propTypes = {
  data: PropTypes.array,
  fetchData: PropTypes.func,
  hasMore: PropTypes.bool,
  children: PropTypes.any,
}

export default MyInfiniteScroll
