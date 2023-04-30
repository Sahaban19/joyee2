import NavBar from "./NavBar"
import { useLocation } from 'react-router-dom'

const DeletedAccount = () => {

    const location = useLocation()
    const { name } = location.state || {}

    return (
        <div>
            <div className='bagc'>
            <NavBar/>
            <p>
                <div className='head1'>
                <h3>{name}, your account has been successfully deleted.</h3></div>
            </p>
            <div>
              <a href='/home'><div className='subhead1'>Go to Home Page</div></a>
            </div>
            </div>
        </div>
    )
}

export default DeletedAccount