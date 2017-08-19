import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

const Home = () => (
    <div className="parent">
        <div className="vertical">
            <center>
                <h1>Welcome to Ananza</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nullam ante nibh, ultricies non ante vel, placerat tristique tellus. Fusce sit amet ipsum odio.</p>
            </center>        
        </div>
    </div>
)

const About = () => (
    <div className="parent">
        <div className="vertical">
            <center>
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin justo libero, facilisis sed lorem condimentum, laoreet iaculis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nullam ante nibh, ultricies non ante vel, placerat tristique tellus. Mauris at ex metus. Integer ut ullamcorper mauris. Fusce sit amet ipsum odio.</p>
                <p>Vestibulum commodo nisl ut dolor congue posuere. Donec condimentum, metus in sollicitudin molestie, mi justo interdum est, non hendrerit leo lorem sed sem. Aenean fringilla metus in massa suscipit posuere. Donec sollicitudin est dui, ut convallis lectus mattis nec. Nulla rutrum aliquet porttitor. Mauris sagittis turpis at ex posuere, vel ultrices neque dignissim. Pellentesque nisi nulla, rhoncus ac accumsan id, pharetra eget eros. Curabitur nibh dui, porta nec scelerisque non, eleifend et leo. In egestas leo vitae nisl imperdiet posuere. Mauris elementum faucibus sem. Donec eget cursus purus, eget faucibus lectus. Nulla vel enim finibus dolor euismod iaculis. Sed sed eleifend quam. Aenean porttitor pellentesque lacus, eget vehicula neque ultrices eu.</p>
            </center>
        </div>
    </div>
)

const Contact = () => (
    <div className="parent">
        <div className="vertical">
            <center>
                <h3>Contact Us</h3>
            </center>
        </div>
    </div>
)

const NotFound = () => (
    <div className="parent">
        <div className="vertical">
            <center>
                <h1>Error 404 <br />Page Not Found</h1>
            </center>
        </div>
    </div>
)

class Main extends Component {
    render() {
        return (
        <div className="container">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
                <Route component={NotFound}/>
            </Switch>
        </div>            
        )
    }
}

export default Main