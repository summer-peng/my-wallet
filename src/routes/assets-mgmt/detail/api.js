import apiUtils from '../../../utils/api-utils'

export const getDetail = (params) => {
  const { assetContractAddress, tokenId } = params
  return apiUtils
    .get(
      `https://testnets-api.opensea.io/api/v1/asset/${assetContractAddress}/${tokenId}/`,
    )
    .then((response) => {
      return response.data
    })
}
