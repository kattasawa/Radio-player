import React from "react"

class Station extends React.Component {
  render() {
    return (
      <div className="radio-channel" style={{ backgroundColor: `#${this.props.color}` }}>
        <div className="image-container">
          <img src={this.props.image} />
        </div>
        <div className="name-audio">
          <div className="channel-name">
            {this.props.name}
          </div>
          <audio controls >
            <source src={this.props.liveaudio} type="" />
            <track kind="radioaudio" ></track>
          </audio>
        </div>
      </div>
    )
  }
}

export default Station
