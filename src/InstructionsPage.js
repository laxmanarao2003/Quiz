import { createContext, useEffect, useRef, useState } from 'react';
import './App.css';
import $ from 'jquery'
import QuizPage from './QuizPage';

export const attemptDateContext=createContext('')

function InstructionsPage() {

	// we are using useRef Hook because we need to prevent the date when the component re-renders :)
	let startDate=useRef()

    const [userName,setUserName]=useState('')

	const [language,setLanguage]=useState('HTML')

	// QuizPage component rendering :)
	const [navigate,setNavigate]=useState(false)

	useEffect(()=>{

	},[])

	// start the Quiz :)
	const submitForm=(e)=>{

		e.preventDefault()
		$('#loader').addClass('spinner-border')
		$('#loader').addClass('spinner-border-sm')
		
		setTimeout(()=>{

			setNavigate(true)
			
		},2000)

		const date=new Date()
		const hours=date.getHours()
		const minutes=(date.getMinutes()<10)?`0${date.getMinutes()}`:`${date.getSeconds()}`
		const zone=(hours>=12)?'PM':'AM'

		startDate.current=hours+":"+minutes +" "+zone

	}

	return (
		(!navigate)?
			<div className="bg-light" id="instructions">
				<div className="container pt-2">
					<h3 className="text-danger py-3">Quizz - General Instructions</h3>
					<ol>
						<li className='mb-3'>
							Starting the Quiz: Click the "Start Quiz" button when you're ready to begin. The timer will start once you enter the quiz.
						</li>
						<li className='my-3'>
							Answering Questions:
							<ul>
								<li className='my-3'>You'll be presented with a series of questions one at a time.</li>
								<li className='my-3'>Select your answers by clicking on the choices provided.</li>
							</ul>
						</li>
						<li className='my-3'>
							Rules and Time Limit: 
							<ul>
								<li className='my-3'>Read the quiz rules and the time limit for the quiz.</li>
								<li className='my-3'>To conduct the exam in fair means, we are defining maximum time limit for each of the multiple-choice questions</li>
								<li className='my-3'>The clock will be set at the server. The countdown timer in the top right corner of screen will display the time remaining for each question.</li>
							</ul>
						</li>
						<li className='my-3'>
							Review and Submit: 
							<ul>
								<li className='my-3'>Before submitting your quiz, review your answers.</li>
								<li className='my-3'>Once you're satisfied, click the "Submit" button.</li>
							</ul>
							
						</li>
						<li className='my-3'>
							Scoring: Your score will be calculated automatically, and you'll see your results immediately after submission.
						</li>
						<li className='my-3'>
							Results: Take note of your score 
						</li>
						<li className='my-3'>
							Respecting Guidelines: Please adhere to the platform's terms of use and guidelines, and ensure fair play.
						</li>
						<li className='my-3'>
							Enjoy and Have Fun!: Remember, quizzes are not just about testing your knowledge but also about learning. Have fun and enjoy the challenge!
						</li>
						<li className='my-3'>
							For multiple Type choice question
							<ol className="" type='a'>
								<li className='my-3'>To select your answer you click one of the options buttons</li>
								<li className='my-3'>To change an answer to a question,click the another desired option button</li>
							</ol>
						</li>
						<li className='my-3'>Zoom level should be 100%</li>
						<li className='my-3'>Allow the pop-up Windows</li>
						<li className='my-3'>open in Browser IE8 or above/FireFox/Chrome </li>
					</ol>
					
					{/* User Name & Instructions */}
					<form name="form1" onSubmit={submitForm} className="was-validated" autoComplete='off'>
						<div className='form-floating mt-4 col-xl-5 col-lg-5 col-7 col-md-8'>
							<select className='form-select' onChange={(e)=>setLanguage(e.target.value)} id='languages' required>
								<option>HTML</option>
								<option>JavaScript</option>
								<option>MySQL</option>
								<option>PHP</option>
								<option>DevOps</option>	
								<option>Linux</option>
								<option>Kubernetes</option>
								<option>Docker</option>
							</select>
							<label htmlFor='languages'>Choose your Language</label>
						</div>
						<div className="form-floating mt-4 col-xl-5 col-lg-5 col-7 col-md-8">
							<input 
								type="text" 
								id="name" 
								className="form-control" 
								placeholder="" 
								value={userName}
								onChange={(e)=>setUserName(e.target.value.toUpperCase())}
								title="Name contains less than 18 characters" 
								required
							/>
							<label htmlFor="name" className="form-check-label">Enter Your Full Name</label>
							<div className='valid-feedback'>You Entered correctly</div>
							<div className='invalid-feedback'>You Entered Wrong UserName</div>
						</div>

						<div className='d-flex mt-3'>
							<input 
								type="checkbox" 
								id="check" 
								name="check" 
								className="form-check-input" 
								required
							/>
							<label htmlFor="check" className="form-check-label ps-3 ">I have read & understood the Instructions and agree to them</label>
						</div>
						<div className='py-3 d-flex justify-content-center' >
							<button type='submit' className="btn btn-primary px-4 py-2 mt-3" id='inpLoader' value={'Start Test'}>
								I am ready to begin<span className='ms-2' id='loader'></span>
							</button>
						</div> 
					</form>

				</div>
			</div>

		:

		//  Create context for passing the attempt date of user :)
		<attemptDateContext.Provider value={startDate.current}>
			<QuizPage userName={userName} language={language}/>
		</attemptDateContext.Provider>
	);
}

export default InstructionsPage