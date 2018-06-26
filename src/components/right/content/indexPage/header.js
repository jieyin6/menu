import React, { Component } from 'react'
import { formatTime } from '../../../../common/js/time'
import '../../../../App.css'
import { connect } from 'react-redux'
import { time } from '../../../../redux/index'

@connect(
    state => state.time,
    {time}
)
export default class IndexHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
       everyTime: this.props.time.time
    }
    //this.setTime = this.setTime.bind(this)
  }
  componentDidMount() {
    setInterval(() => {
      let everytime = formatTime() 
      this.props.time(everytime)
      /*  this.setState({
        everyTime: everytime
      }) */
    }, 1000)
  }
  render() {
    return (
      <div className="indexHeaderContainer">
        header
        <div className="indexHeaderTime">
          <p>{this.state.everyTime}</p>
        </div>
      </div>
    )
  }
}
