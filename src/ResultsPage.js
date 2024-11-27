/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from 'react'
import $ from 'jquery'
import {attemptDateContext} from './InstructionsPage'

function ResultsPage(props) {

    // usecontext Hook used to display the attempt date & time of the user :)
    const start=useContext(attemptDateContext)

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November', 'December']

    useEffect(()=>{

        console.log(start+"empty")

        // set the background height :)
        let bgheight=$('.setBgHeight').innerHeight()
        
        $('#resultsBg').css({height:bgheight})

        window.addEventListener('resize',()=>{
            $('#resultsBg').css({height:$('.setBgHeight').innerHeight()})
        })

        setTimeDate()

    },[])

    // display date & time :)
    const setTimeDate=()=>{
        const date=new Date()

        const startdateELe=document.querySelector('#startDate h6')
        const enddateELe=document.querySelector('#endDate h6')
        const todaydate=date.getDate()

        const month=date.getMonth()
        const hours=date.getHours()
        const minutes=(date.getMinutes()<10)?`0${date.getMinutes()}`:`${date.getSeconds()}`
        const zone=(hours>=12)?'PM':'AM'

        console.log(hours+":"+minutes +" "+zone);
        
        startdateELe.textContent=todaydate+"-"+monthNames[month]+" / "+start
        enddateELe.textContent=todaydate+"-"+monthNames[month]+" / "+hours+":"+minutes +" "+zone
    }

    // print the Quiz results :)
    const downloadResults=()=>{
        window.print()
    }

    return (
        <>
            <div className='d-flex flex-wrap justify-content-between sticky-top py-2'>
                <h4 className='ms-4'>Quizz</h4>
                <h4 className='text-end me-4'><i className="fa-solid fa-user-tie me-2"></i>{props.userName}</h4>
            </div>   

            <div className='col-12 setBgHeight'>
                
                <div className='' id='resultsBg'>

                    <div className='container d-flex flex-column text-dark text-center'>

                        <h4 className='mt-4'>JavaScript Quiz Report <i className="fa-solid fa-crown text-warning h3"></i></h4>
                        <small>Duration 20 Minutes</small>

                        {/* Quiz restart */}
                        <div className='mt-4'>
                            <a href='https://laxmanarao2003.github.io/Quiz/' className='btn btn-primary rounded rounded-5 px-4 py-2 mx-2 my-1'>Restart<i className="fa-solid fa-rotate ms-2"></i></a>
                            <button onClick={downloadResults} className='btn btn-primary rounded rounded-5 px-4 py-2 mx-2 my-1'>Download<i className="fa-solid fa-download ms-2"></i></button>
                        </div>

                        <div className='d-flex flex-wrap align-items-center justify-content-between border border-2 rounded rounded-3 px-4 py-1 my-4'>

                            {/* Attemp date & time */}
                            <div className='d-flex flex-column col-xl-2 col-lg-2 col-md-5 col-sm-5 col-5 my-3 py-4 px-2' id='startDate'>
                                <small><i className="fa-solid fa-calendar-days text-success h6 me-2"></i>Attempt Date/Time</small>
                                <h6> </h6>
                            </div>

                            {/* Submission Date/Time */}
                            <div className='d-flex flex-column col-xl-2 col-lg-2 col-md-5 col-sm-5 col-5 my-3 py-4 px-2' id='endDate'>
                                <small><i className="fa-regular fa-clock text-success h6 me-2"></i>Submission Date/Time</small>
                                <h6> </h6>
                            </div>

                            {/* passing marks */}
                            <div className='d-flex flex-column col-xl-2 col-lg-2 col-md-5 col-sm-5 col-5 my-3 py-4 px-2' id='passingMarks'>
                                <small><i className="fa-solid fa-trophy text-success h6 me-2"></i>passing marks</small>
                                <h6>{props.marks}.0/20.0</h6>
                            </div>

                            {/* Status Pass/Fail */}
                            <div className='d-flex flex-column col-xl-2 col-lg-2 col-md-5 col-sm-5 col-5 my-3 py-4 px-2' id='status'>
                                <small><i className="fa-solid fa-award text-success h6 me-2"></i>Status</small>
                                {
                                    (props.marks>10)? <h6>Pass</h6>:<h6>Fail</h6>
                                }
                            </div>
                        </div>

                        <div className='mb-4 mt-2'>
                            <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT30vhJ2gdgFa_d0bOsat1JUIPYunbKXJqhYOrC88dTzTcnPf65' alt='Wallpaper'/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ResultsPage