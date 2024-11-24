import { useEffect,useRef, useState } from 'react';
import './App.css';
import $ from 'jquery'
import InstructionsPage from './InstructionsPage';

function App() {
	const [navigate,setNavigate]=useState(false)

	// const welcomeTitle={
		// transform:'translate(-50%,-50%)',
		// top:'50%',
		// left:'50%',
		// position:'absolute',
	// }

	const startQuiz=useRef()

	useEffect(()=>{

		// based on the body height the background image height will be calculated :)
		const bodyHeight=document.documentElement.scrollHeight;
		$('#bgImage').css({height:bodyHeight})

	},[])

	startQuiz.current=()=>{
		console.log('Quiz started')
		$('#loader').addClass('spinner-border')
		$('#loader').addClass('spinner-border-sm')
		
		setTimeout(()=>{
			setNavigate(true)
		},2000)	
	}
	
	return(
		(!navigate)?
			<div className='bg-dark' id='bgImage'>
				<div className='text-center text-light' id='welcomeTitle'>
					<h1 className='display-3' id='onlinequiz'>Online Quizz</h1>
					<h6 className='text-wrap py-1'>Quick Quiz knowledge Booster for a Perfect Level Up</h6>
					<hr className='text-light'></hr>
					<h1 className='display-5' id='welcome'>Welcome!</h1>
					<button 
						type='button'
						onClick={startQuiz.current}
						className='btn btn-outline-success px-4 py-2 mt-5' 	
						style={{fontSize:'large'}} id='startbtn'>
						Start Quiz<span style={{fontSize:'initial'}} className='ms-2' id='loader'></span>
					</button>
				</div>
			</div>
		:
		<InstructionsPage/>
	);
}

export default App;
