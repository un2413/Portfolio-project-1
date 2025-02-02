import React, { useState } from 'react';
import Side from './Side';
import DetailList from './DetailList';
import DetailList1 from './DetailList1';

import './Career.scss';

function Career(props) {   

    const [countList, setCountList] = useState([0])
    const [countList1, setCountList1] = useState([0])

    const onAddDetailDiv = () => {
        let countArr = [...countList]
        let counter = countArr.slice(-1)[0]
        counter += 1
        countArr.push(counter)
        setCountList(countArr)
    }

    const onAddDetailDiv1 = () => {
        let countArr1 = [...countList1]
        let counter1 = countArr1.slice(-1)[0]
        counter1 += 1
        countArr1.push(counter1)
        setCountList1(countArr1)
    }
        
    return (        
        <div>
            <Side/>
            <div id="wrap">                
            <div id = "Privacy">
                <h1><strong>김이름</strong></h1>                
                <img id="emailImg" alt ="email" src="./img/email.png"/><h5 id = "email">hiw97@naver.com</h5><br/><br/>
                <img id="phoneImg" alt ="phone" src="./img/phone.png"/><h5 id= "phone">01012345678</h5><br/><br/>
                <img id="birthImg" alt ="birth" src="./img/birth.png"/><h5 id= "birth">2000.00.00</h5><br/><br/>
                <img id="careerImg" alt ="career" src="./img/career.png"/>
                <select id="careerSelect">
                    <option value="1" >신입</option>
                    <option value="2">경력</option>
                </select>
            </div>
            <br/>
                <div id = "technologyStack" class = "scrollContent">
                    <h1 id="title">기술스택 / 직무</h1>
                    <h5 id="smallTitle">기술스택<span id = "red">&nbsp; &bull;</span></h5>
                    <input type="text" id="input" placeholder="ex) html, css, aws, java ......"></input>
                    <h5 id="smallTitle">직무</h5>
                    <input type="text" id="input" placeholder="ex) 서버/백엔드 개발자, 프론트엔드 개발자, 웹 풀스택 개발자......"></input>
                </div>

                <div id = "Education" class = "scrollContent">
                    <h1 id="title">학력</h1>
                    <h5 id="smallTitle">학교명<span id =
                     "red">&nbsp; &bull;</span></h5>
                    <input type="text"  id="input"  placeholder="ex) XX대학교"></input>

                    <h5 id="smallTitle">학력 구분</h5>
                    <select id="educationSelect">
                    <option value="" disabled selected>선택해주세요</option>
                    <option value="1" >고등학교</option>
                    <option value="2">대학(2,3년)</option>
                    <option value="3" >대학교(4년)</option>
                    <option value="4">대학원(석사)</option>
                    <option value="5" >대학원(박사)</option>
                    </select>

                    <h5 id="smallTitle">학과 명</h5>
                    <input type="text" id="input" placeholder="ex) 컴퓨터소프트웨어공학과"></input>

                    <h5 id="smallTitle">졸업년도<span id = "red">&nbsp; &bull;</span></h5>
                    <input type="text" id="input" placeholder="ex) 2016.03 ~ 2022.02"></input>

                    <h5 id="smallTitle">학점</h5>
                    <input type="text" id="input" placeholder="ex) 3.88 / 4.50"></input>
                    <br/>
                </div>

                <div id = "link" class = "scrollContent">
                    <h1 id="title">링크</h1>
                    <DetailList countList={countList} />
                    <div id="hrBar">
                    <br/>
                    <hr id="addHr"/><button id="addButton" onClick={onAddDetailDiv}>+</button>                    
                    <h3 id = "EducationAdd">링크 추가</h3>
                    </div>
                </div>

                <div id = "course" class = "scrollContent">
                    <h1 id="title">교육이력</h1>                   
                    <DetailList1 countList={countList1} />
                    <div id="hrBar">
                    <br/>
                    <hr id="addHr"/><button id="addButton" onClick={onAddDetailDiv1}>+</button>
                    <h3 id = "EducationAdd">교육 추가</h3>
                    </div>
                </div>

                <div id = "other" class = "scrollContent">
                    <h1 id="title">기타이력</h1>

                    <div id="hrBar">
                    <br/>
                    <hr id="addHr"/><button id="addButton">+</button>
                    <h3 id = "EducationAdd">기타 추가</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Career;