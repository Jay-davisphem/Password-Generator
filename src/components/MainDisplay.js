import React, {Component} from 'react'
import SugOpt from './SugOpt'
class MainDisplay extends Component{
  constructor(props){
    super(props)
     this.state = {
      password: "Femi"
    }
  }


  render(){
    return (
      <div>
        <h1>daviSPhem Password Genertor</h1>
        <form>
          <label htmlFor="pwdlen">Password Length</label>
          <input type="number" name="pwdlen" id="pwdlen" list="mySug"/>
          <SugOpt />
        </form>
      </div>
    )
  }
}

export default MainDisplay
