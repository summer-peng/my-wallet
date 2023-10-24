import _ from 'lodash'
import apiUtils from 'utils/api-utils'

export const getList = _.throttle((params) => {
  return apiUtils
    .get('https://testnets-api.opensea.io/api/v1/assets', params)
    .then((response) => {
      return response.data?.assets
    })
    .catch((e) => {
      console.error(e)
    })
}, 1100)
