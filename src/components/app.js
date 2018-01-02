import React from "react"
import Station from "./station"

class App extends React.Component {
  // class NewsFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      radioChannels: []
    }
  }

  componentDidMount() {
    fetch("https://api.sr.se/api/v2/channels?format=json&size=100").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({ radioChannels: json.channels })
    })
  }

  render() {
    return (
      <div className="station-container">
        {this.state.radioChannels.map((item) => {
          return <Station
            image={item.image}
            name={item.name}
            color={item.color}
            liveaudio={item.liveaudio.url} />
      })}

      </div>
    )
  }

}

export default App
