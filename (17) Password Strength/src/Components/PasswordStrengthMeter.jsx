
import React from 'react'
import zxcvbn from "zxcvbn";

function PasswordStrengthMeter({password}) {
    
    const testResault = zxcvbn(password);
    const num = testResault.score * 100/4;
    const creatPassLabel = () => {
        switch(testResault.score){
            case 0:
                return 'خیلی ضعیف';
            case 1:
                return 'ضعیف';
            case 2:
                return 'متوسط';
            case 3:
                return 'خوب';
            case 4:
                return 'قوی';
            default:
                return "";    
        }
    }
    const functionProgressColor = () => {
        switch(testResault.score){
            case 0:
                return "#828282";
            case 1:
                return "#ea1111";
            case 2:
                return "#ffad00";
            case 3:
                return "#9bc158";
            case 4:
                return "#00b500";
            default:
                return "none";    
        }
    }
    const changePasswordColor = () => ({
        width:`${num}%`,
        background: functionProgressColor(),
        height: '7px'
    });
    
    return (
    <div>
        <div className="progress" style={{height: '7px'}}>
            <div className="progress-bar" role="progressbar" style={changePasswordColor()} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <p style={{color: functionProgressColor()}}>{creatPassLabel()}</p>
    </div>
  )
}

export default PasswordStrengthMeter