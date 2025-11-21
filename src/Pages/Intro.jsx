import { useNavigate } from 'react-router'
import img from '../Assets/Animal.svg'

import "../Styles/Intro.sass"

export default function Intro() {
    const navigate = useNavigate()

    return (
        <div className="intro-container">
            <img src={img} alt="Animal" />
            <div className='intro-container__info-text'>
                <h1>My Pets</h1>
                <p>Taking care of a pet is my favorite, it helps me to gaimr stress and fatigue</p>
            </div>
            <button onClick={() => navigate('/home')}>
                Skip
            </button>
        </div>
    )
}