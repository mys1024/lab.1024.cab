import { Router, useRoutes } from '@solidjs/router'
import routes from '~/routes'

export default () => {
  const Routes = useRoutes(routes)
  return (
    <div
      min-h-100vh
      bg="#282c34"
      text-white
    >
      <div p-8>
        <Router>
          <Routes />
        </Router>
      </div>
    </div>
  )
}
