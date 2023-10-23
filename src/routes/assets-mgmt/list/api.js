import apiUtils from '../../../utils/api-utils'

export const getList = (params) => {
  return apiUtils
    .get('https://testnets-api.opensea.io/api/v1/assets', params)
    .then((response) => {
      return response.data?.assets
    })
}
