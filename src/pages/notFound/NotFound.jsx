
import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {

  const error = useRouteError();

  return (
    <div>
      <h1>404</h1>
      <p>Página no encontrada</p>
      <p>{error.statusText || error.message}</p>
      <Link to="/">Volver a la página principal</Link>
    </div>
  )
}

export default NotFound