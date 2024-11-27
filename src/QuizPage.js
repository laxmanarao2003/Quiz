/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery'
import ModalInstructions from './ModalInstructions'
import PromotionPage from './PromotionPage'
import ResultsPage from './ResultsPage'

function QuizPage(props) {

    const [data,setData]=useState([])

    // const [userAnswers,setUserAnswers]=useState([])

    // userAnswers that are given when the quiz starts :)
    const userAnswers=[]

    // Api answers that are built in:)
    const apiAnswers=[]

    // user marks :)
    const marks=useRef(0)

    const [submitData,setSubmitData]=useState(false)

    // define the count Interval for the countdown timer :)
    let countInterval

    // count the number of questions, which helps us to allocate id's to the question :)
    let questionCount=0

    // create useRef Hook for promotion, which stores the mutable value even if the component re-renders:)
    let btnClicked=useRef()

    // different API'S based on the user Selection :)
    const quizApi=`https://quizapi.io/api/v1/questions?apiKey=P7mSuG2QyMCPnS5zWo3iYBVLH61UG1M7OMt1SDHf&difficulty=Easy&limit=20&tags=${props.language}`

    useEffect(()=>{

        console.log('useeffect');

        // call fetchApi function when component renders everytime :)
        fetchApi()

        // call countDown function when component(quizPage) renders everytime :)
        countDown()

        btnClicked.current=true

        window.addEventListener('scroll',()=>{
            const scrollHeight=document.documentElement.scrollTop
            if(scrollHeight<320)
                $('#scrollToTop').css({display:'none'})
            else
                $('#scrollToTop').css({display:'block'})            
        })
        
        if(submitData)
            clearInterval(countInterval)

        // when clicking on the promotion button it will toggle the social media buttons :)
        const promotionbtn=document.querySelector('#promotionBtn')
        promotionbtn.addEventListener('click',()=>{
            if(btnClicked.current===true){
                $('#promotion').css({display:'block'})
                $('#promotion').addClass('d-flex')
                btnClicked.current=false
            }
            else{
                $('#promotion').css({display:'none'})
                $('#promotion').removeClass('d-flex')
                btnClicked.current=true
            }
        })
       

        
        return ()=>{
            
            // We have to clear the setInterval when the Component is destroyed :)
            clearInterval(countInterval)
        }

    },[])

    // Fetch the API data using axios and asynchronous method :)
    const fetchApi=async()=>{

        try{
            const responseApi=await axios.get(quizApi)
            console.log(responseApi.data)
            setData(responseApi.data)
        }
        catch(err){
            console.log('Network error')
            alert('Network error')
        }

    }

    // set the coundown time to the user :)
    const countDown=()=>{
        const countDownEle=document.querySelector('div #countDown')
        let seconds=0
        let minutes=20

        countInterval=setInterval(()=>{
            

            /* 4 constraints
            *   seconds<10 -> minutes>9 & minutes<10
            *   seconds>10 -> minutes>9 & minutes<10
            */
            countDownEle.textContent=(seconds<10)?
                                                ((minutes>9)? minutes+":0"+seconds   :   "0"+minutes+":0"+seconds )  
                                                :   
                                                (minutes>9)? minutes+":"+seconds   :   "0"+minutes+":"+seconds

            // when seconds hits zero we need to decrease the minutes :)
            if(seconds===0){
                minutes--
                seconds=60
            }

            seconds--
        },1000)

    }

    // rendering questions to the browser :)
    const addQuestions = (option,optionNum)=>{ // it accepts 2 parameters -> option value(label) & -> option number :)

        return  <div className='rounded rounded-3 py-2 px-2 mb-4 mt-1 optionParent'>
                    {/*  render input (radio) elements */}
                    <input
                        type='radio'
                        name='options'
                        className='form-check-input ms-3 option'
                        value={option}
                        
                        onChange={(e)=>checkInputEle(e)}
                        id={`q${questionCount}opt${optionNum}`}
                    />
                    <label className='ms-2' htmlFor={`q${questionCount}opt${optionNum}`}>{option}</label>
                </div>
    }

    const checkInputEle=(e)=>{
        
        // setUserAnswers([...userAnswers,e.target.id])

        let questionNum=e.target.id
        let optionNum=e.target.id

        // for 2 digits question Number -> q12option3 
        if(Number(questionNum.substring(1,3))){
            questionNum=Number(questionNum.substring(1,3))
            optionNum=Number(optionNum.substring(6,8))+96
        }
        // for 1 digit question Number -> q1option3 
        else{
            questionNum=Number(questionNum.charAt(1))
            optionNum=Number(optionNum.charAt(5))+96
        }

        // concatenate the string as previously assigned in the api options :)
        const optionChar=`answer_${String.fromCharCode(optionNum)}_correct`

        //  store the user options in the userAnswers array :)
        //  Every index acts as a question number like 1st index(question 1)=option1 ,..... :)
        userAnswers[questionNum]=optionChar

        return e.target.checked
    }

    const submitQuiz=()=>{

        data.map((item,index)=>{
            const ele=item.correct_answers
            
            // check the options that are defined in the api options , which option is correct for each & every question:)
            if(ele.answer_a_correct==="true")
                apiAnswers[index+1]="answer_a_correct"
            else if(ele.answer_b_correct==="true")
                apiAnswers[index+1]="answer_b_correct"
            else if(ele.answer_c_correct==="true")
                apiAnswers[index+1]="answer_c_correct"
            else if(ele.answer_d_correct==="true")
                apiAnswers[index+1]="answer_d_correct"
            else if(ele.answer_e_correct==="true")
                apiAnswers[index+1]="answer_e_correct"
            else if(ele.answer_f_correct==="true")
                apiAnswers[index+1]="answer_f_correct"
            return true
        })

        // compare answers with correct answers & then increment marks counter :)
        for(let start=1;start<apiAnswers.length;start++){
            if(apiAnswers[start]===userAnswers[start])
                marks.current+=1
        }
        
        // render the ResultsPage Component :)
        setSubmitData(true)
    }
     
    return (
        (!submitData)?
            <>
                <div className='d-flex flex-wrap justify-content-between sticky-top py-2'>
                    <h4 className='ms-4'>Quizz</h4>
                    <div className='d-flex align-items-center'>
                        <i className="fa-regular fa-clock me-2 h5"></i>
                        <h4 className='text-center' id='countDown'>20:00</h4>
                    </div>
                    <h4 className='text-end me-4'><i className="fa-solid fa-user-tie me-2"></i>{props.userName}</h4>
                    
                </div>

                {
                    userAnswers.map((user,index) =>{return <h5 key={index}>{user}</h5>})
                } 

                {/* <!-- Modal Button --> */}
                <div className='d-flex justify-content-center mt-4'>
                    <div className='col-9 col-xxl-5 col-xl-6 col-lg-7 col-md-8' id='title'>
                        <h3 className='py-3 px-4 my-2'>Online test  <button className='btn btn-primary rounded rounded-5 my-2' data-bs-toggle="modal" data-bs-target="#exampleModal">Instructions<i className="fa-solid fa-clipboard ms-2" title='Instructions'></i></button></h3>
                    </div>
                </div>
                
                {/* <!-- Instructions Modal --> */}
                <ModalInstructions/>

                {/* rendering Questions */}
                <div className='d-flex justify-content-center mt-3'>
                    <div className='col-9 col-xxl-5 col-xl-6 col-lg-7 col-md-8 pb-3'>

                        {   
                            data.map((item,index)=>{

                                const question= item.question
                                questionCount=questionCount+1

                                return <form key={index} className='rounded rounded-3 px-4 mt-3 mb-4 py-4' id='borderEle'>
                                            <div className='text-start rounded rounded-4 mb-4 mt-2 '>
                                                <p id={`question${questionCount}`} className='question py-2 px-3'>{questionCount}. {question}<sup> *</sup></p>
                                            </div>
                                            <div className='d-flex justify-content-between flex-column'>

                                                {/* check how many options that are available to each question */}
                                                {
                                                    (item.answers.answer_a)?addQuestions(item.answers.answer_a,1):''
                                                }
                                                {
                                                    (item.answers.answer_b)?addQuestions(item.answers.answer_b,2):''
                                                }
                                        
                                                {
                                                    (item.answers.answer_c)?addQuestions(item.answers.answer_c,3):''
                                                }
                                            
                                                {
                                                    (item.answers.answer_d)?addQuestions(item.answers.answer_d,4):''
                                                }
                                                {
                                                    (item.answers.answer_e)?addQuestions(item.answers.answer_e,5):''
                                                }
                                                {
                                                    (item.answers.answer_f)?addQuestions(item.answers.answer_f,6):''
                                                }

                                            </div>
                                        </form>
                                
                            })
                        }

                    </div>
                </div>
                
                <div className='text-center my-5'>
                    <a href='#submitmodal' className='btn btn-primary rounded rounded-5 px-4 py-2' data-bs-toggle="modal">Submit<i className="fa-regular fa-paper-plane ms-2"></i></a>
                </div>


                {/* <!------------------------------modal submit------------------------------------> */}
                <div className="modal fade" id="submitmodal">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button className="btn btn-danger btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                <h3 className="text-center pb-4">Submit Quiz</h3>
                                <h6 className="text-center" style={{letterSpacing: "1px"}}>When You are Ready, Click Submit Button</h6>
                                <div className="btn-group btn-group-vertical d-flex justify-content-center">
                                    <button className="btn btn-success mt-4 mb-3" onClick={()=>submitQuiz()}  data-bs-dismiss="modal">
                                        Submit<span className="" id="submit_span"></span>
                                    </button>
                                    <button className="btn btn-light mb-3" data-bs-dismiss="modal">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigate (Scroll) to top Button */}
                <div className='text-end fixed-bottom me-3 mb-3' id='scrollToTop'>
                    <a href='#' className='btn btn-outline-primary'><i className="fa-solid fa-angles-up"></i></a>
                </div>
                
                {/* Promotion Page */}
                <PromotionPage/>

            </>
        :

        <ResultsPage marks={marks.current} userName={props.userName}/>
    )
}

export default QuizPage