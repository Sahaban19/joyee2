import NavBarDashBoard from '../../NavBar/NavBarDashboard';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import Compose from './Compose';
import PendingMail from './PendingMail'
import PastMail from './PastMail';

import Table from 'react-bootstrap/Table'

import { useLocation, useNavigate } from 'react-router-dom'

// import './style.css'

const StudentDashboard = () => {
      
    const location = useLocation()
	const navigate = useNavigate()

    const { student_id, student_name } = location.state || {}
	console.log(student_id)

	if (!student_id?.length || !student_name?.length) {
		navigate('/manual')
	}
    
	return (
		<div>
			<div className='new2'>
			<NavBarDashBoard
				student_id = {student_id}
				admin_id = ''
			/> 
			<div className='head'>
			
				<h3 className='welcome'><div className='head1'>Welcome {student_name}</div></h3>

				<Button variant='success' className='button' onClick={ () => {navigate('/student/button', { state: { studentId: student_id, studentName: student_name } }) }}><h5><div className='button'>Compose New</div></h5></Button>
			
			</div>
			<div className='container'>
				<div clasName='row'>
			
					<div className='pending'>
						<PendingMail 
							senderId = {student_id}
							senderName = {student_name}
						/>
					</div>
          <hr/>
					<div className='past'>
						<PastMail 
							senderId = {student_id}
						/>
       	 			</div>
          		</div>
        	</div>
			</div>
		</div>
	)
}

export default StudentDashboard
