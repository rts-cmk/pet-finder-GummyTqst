import { useNavigate } from 'react-router'
import img from '../Assets/Animal.svg'

export default function Intro() {
    const nagigate = useNavigate()

    return (
        <>
            <img src={img} alt="Animal" />
            <h1>My Pets</h1>
            <p>Text</p>
            <button onClick={() => nagigate('/home')}>
                Skip
            </button>
        </>
    )
}