import { Link } from "react-router-dom"

const Confirmation = () => {
  return (
    <div>
      <h1>Email has been sent!</h1>
      <p>Church contact persons in the area notified. Check in again later.</p>
      <Link to='./'>Return to menu</Link>
      <button>View current applications.</button>
    </div>
  )
}

export default Confirmation
