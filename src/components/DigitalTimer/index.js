import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="app-container">
        <div className="digital-timer-container">
          <div className="heading-container">
            <h1 className="heading">Digital Timer</h1>
          </div>
          <div className="timer-container">
            <div className="timer">
              <h1 className="time">30:00</h1>
              <p className="timer-status">Running</p>
            </div>
            <div className="timer-controls-container">
              <ul className="controls">
                <li className="start=control">
                    <button 
                      className="start-btn"
                    >
                      <img 
                        src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                        className="pause-icon"
                        alt="pasue icon"
                      />
                    </button>
                    <p></p>
                </li>  
                <li className="reset=control">
                    <button 
                      className="reset-btn"
                    >
                      <img 
                        src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                        className="reset-icon"
                        alt="reset icon"
                      />
                    </button>
                </li>  
              </ul>
              <div className="timer-limit-container">
                <p className="timer-limit-text">Set Timer limit</p>
                <div classname="timer-limit-options">
                  <button 
                    className="change-limit-button"
                  >
                    -
                  </button>
                  <span>25</span>
                  <button 
                    className="change-limit-button"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
