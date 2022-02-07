import {useParams, useHistory, useRouteMatch, useLocation} from 'react-router-dom/cjs/react-router-dom';

function Movie() {
  const {title} = useParams()
  const {goBack} = useHistory()
  const value = useRouteMatch()
  const location = useLocation()
  console.log('useRouteMatch', value)
  console.log('location', location)
  return (
    <div>
      movie {title}
      <button className="btn" onClick={goBack}>
        go back
      </button>
    </div>
  )
}

export {Movie}