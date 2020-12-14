import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    currentChoice: "profile" 
  }

  handleChange = (e) => {
    this.setState({currentChoice: e.target.id})
    e.target.parentNode.childNodes.forEach( choice => choice.className = "item" )
    e.target.className = "item active"
  }

 
  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div> {this.state.currentChoice}</div>


    return (
      <div>
        <MenuBar handleChange={this.handleChange} currentChoice={this.state.currentChoice}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
