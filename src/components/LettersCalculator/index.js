import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeLetters = event => {
    const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (alpha.includes(event.key)) {
      this.setState(prevState => ({count: prevState.count + 1}))
    } else {
      const len = event.target.value.length
      this.setState({count: len})
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="cont">
        <div className="inner-cont">
          <div className="card">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-card">
              <label htmlFor="input" className="para">
                Enter the phrase
              </label>
              <input
                type="text"
                id="input"
                placeholder="Enter the phrase"
                className="input"
                onKeyUp={this.onChangeLetters}
              />
            </div>
            <p className="button" type="button">
              No.of letters: {count}
            </p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
