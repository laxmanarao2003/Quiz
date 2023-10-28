import React, { Component } from 'react'

export class ModalInstructions extends Component {
    render() {
        return (

            <div className="modal fade" id="exampleModal" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="exampleModalLabel">Instructions</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    <div className="modal-body">
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
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default ModalInstructions