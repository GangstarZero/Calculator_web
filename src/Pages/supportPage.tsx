import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './support.css'

export const SupportPage = () =>
{
    const [number, setNumber] = useState(0); 
    const [page, setPage1] = useState(false);
    const [nameFirst, setNameFirst] = useState(""); 
    const [nameLast, setNameLast] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [problem, setProblem] = useState(""); 

    const nav1 = useNavigate();
    const navToCalc = () => {
        nav1("/");
    }

    const handleChange = (event:any) => {
        switch (event.target.name)
        {
            case "nameFirst":
                setNameFirst(event.target.value);
                break;
            case "nameLast":
                setNameLast(event.target.value);
                break;
            case "email":
                setEmail(event.target.value);
                break;
            case "chooseType":
                setProblem(event.target.value);
                break;
        }
      };

    function setPage(){
        if(nameFirst == "" && nameLast == "" && email =="" && problem == ""){
            return;
        }
        randomNumTrig();
        setPage1(true);
    }
 
    const randomNum = (min: any, max: any) => { 
    return Math.floor(Math.random()  
                * (max - min + 1)) + min; 
    };
    const randomNumTrig = () => { 
        setNumber(randomNum(1000, 10000)); 
    };

    function changeSendtrue()
    {
        document.getElementById('sendButton')?.classList.add('sendButtonSuccess')
    }

    function changeSendfalse()
    {
        document.getElementById('sendButton')?.classList.remove('sendButtonSuccess')
    }

    if(nameFirst != "" && nameLast != "" && email !="" && problem != ""){
        changeSendtrue();
    }
    else{
        changeSendfalse()
    }

    if(page === false)
    {
        return (
            <body className='supby'>
                <div className='Box'>
                <button className='backToCalc' onClick={navToCalc}>Calculator</button>
                <p className='text'>Support Ticket Form</p>
                <hr></hr>
                    <div className='insideBox' id="submitBox">
                        <div>
                            <div className='title'>
                                <p>Name</p>
                                <p className='req'>*</p>
                            </div>
                            <div className='inputBox'>
                                <input name="nameFirst" className='NameBox' onChange={handleChange} value={nameFirst}></input>
                                <input name="nameLast" className='NameBox' onChange={handleChange} value={nameLast}></input>
                            </div>
                            <div className='nameLabelBox'>
                                <p className='nameLabel'>First</p>
                                <p className='nameLabel'>Last</p>
                            </div>
                            <div className='title'>
                                <p>Email</p>
                                <p className='req'>*</p>
                            </div>
                            <div className='inputBox'>
                                <input name="email" className='emailBox' onChange={handleChange} value={email}></input>
                            </div>
                            <div className='title'>
                                <p>Topic</p>
                                <p className='req'>*</p>
                            </div>
                            <div className='topicBox'>
                                <p className='topicText'>What can we help you today?</p>
                                <div className='chooseBox'>
                                    <div className='choose'>
                                        <input type="radio" id="general" name='chooseType' value="General" checked={problem === "General"} onChange={handleChange}></input>
                                        <label htmlFor='general' className='chooseText'>General</label>
                                    </div>
                                    <div className='choose'>
                                        <input type="radio" id="bug" name='chooseType' value="Bug" checked={problem === "Bug"} onChange={handleChange}></input>
                                        <label htmlFor='bug' className='chooseText'>Bug</label>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className='descBox'>
                            <div className='title'>
                                <p>Description</p>
                                <p className='floatText'>optional</p>
                            </div>
                            <div>
                                <textarea placeholder='Description Report' className='inputDescBox'></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='sendBox'>
                        <button className='sendButton' id="sendButton" onClick={setPage}>SEND</button>
                    </div>
               </div>
            </body>
        )
    }
    else
    {
        return(
            <body className='supby'>
                <div className='Box'>
                    <button className='backToCalc' onClick={navToCalc}>Calculator</button>
                    <p className='text'>Support Ticket Form</p>
                    <hr></hr>
                    <div className="ticketDesc">
                        <p className="DescText">Thank you for sending us your report, we will</p>
                        <p className="DescText">track your problem now</p>
                        <p className="DescTicket">ticket number: <span className="randNum">{number}</span></p>
                    </div>
                </div>
                

            </body>
        )
    }
        
    
}