import '../styles/Window-style.css'
import window from '../assets/img/CC_window.png'

const Window = () => {
    return (
        <div className="eyes">
            <img className="window" src={window} alt="What am I looking at?"></img>
        </div>
    )
}
export default Window