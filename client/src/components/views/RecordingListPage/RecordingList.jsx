import React from "react";
import logo from '../../../img/logo.png'
import styled from 'styled-components';
import { darken, lighten } from 'polished';
import '../../../css/RecordingList.css';

const Record = styled.button`
    outline: none;
    border: outset;
    border-radius: 5px;
    cursor: pointer;
    width: 80%;
    height: 90px;
    margin: 1.7rem auto;
    display: flex;

    background: #E7F4F8;
    
    &:hover {
        background: ${lighten(0.05, '#E7F4F8')};
    }
    &:active {
        background: ${darken(0.05, '#E7F4F8')};
    }

`

function RecordingList(){
    // db에서 recording 가져오기
    const record_list = [['2021.01.01','01:01:01'], ['2021.02.02','02:02:02'], ['2021.03.03','03:03:03'], ['2021.04.04','04:04:04'], 
    ['2021.05.05','05:05:05'], ['2021.06.06','06:06:06'], ['2021.07.07','07:07:07'], ['2021.08.08','08:08:08'], ['2021.09.09','09:09:09'], ['2021.10.10','10:10:10']]
    return(
        <div className='recordingList'>
            <div className="simpleNavi">
                <img src={logo} alt='logo'/>
            </div>
            <div className='list_board'>
                <div className="question">
                    <h1 className='title'>나의 스피치 기록</h1>
                </div>
                <div className='list'>
                    {record_list.map(([date, time], idx) => (
                        <Record type='submit'>
                            <span className='date' id="recording_date">{date}</span>
                            <span className='time' id="recording_time">{time}</span>
                        </Record>
                    ))}
                </div>
                <div className="stopButton">
                    <button >끝내기</button>
                </div>
            </div>
        </div>
    )
}

export default RecordingList;