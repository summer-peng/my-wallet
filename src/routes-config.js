import { createBrowserRouter } from 'react-router-dom'

import List from './routes/assets-mgmt/list'
import Root from './routes/root'
import Detail from './routes/assets-mgmt/detail'
import Test from './routes/test/test'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/list',
        element: <List />,
      },
      {
        path: '/detail/:assetContractAddress/:tokenId',
        element: <Detail />,
      },
      {
        path: '/test',
        element: <Test />,
      },
    ],
  },
])

export default router
