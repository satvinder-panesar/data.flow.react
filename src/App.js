import React from 'react';
import './App.css'
import Profile from './components/profile'
import WelcomeBanner from './components/welcome.banner'
import {LanguageContext} from './language.context'
import FooterBanner from './components/footer.banner';

class App extends React.Component {

  constructor(props){
    super(props)

    this.toggle = () => {
      this.setState(state => ({
        language: state.language == "english" ? "french" : "english"
      }))
    }

    this.state = {
      language: "english"
    }
  }

  render(){
    return (
      <LanguageContext.Provider value={this.state}>
        <WelcomeBanner className="banner"/>
        <center>
          <button onClick={this.toggle}>{this.state.language === "english" ? "français" : "english"}</button>
        </center>
        <Profile 
          name = "Satvinder Singh" 
          email = "panesar.satvindersingh@gmail.com" 
          summary = "5 years of software development experience"
          frenchSummary = "5 ans d'expérience en développement logiciel"
          imageURL = "https://satvinder-panesar.github.io/images/profile.png"/>
        <FooterBanner className="banner"/>
      </LanguageContext.Provider>
    );
  }

}

export default App;