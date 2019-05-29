import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Body from './body'
import Media from './Media'

import * as emailjs from 'emailjs-com'

class  SimpleCard extends React.Component{

    state={
        name:"yo",
        email:'',
        message:"this is me how are you "
    }

    onclickHandler =(event)=>{
        //   event.preventDefault()
        // var templateParams={
        //       from_name:this.state.name,
        //       message_html:this.state.message
        // }
        // emailjs.send('your_portfolio', 'portfolio', templateParams ,'user_uhskouIZPToRBQDqsbAYy')
        //     .then(function(response) {
        //         console.log('SUCCESS!', response.status, response.text);
        //     }, function(error) {
        //         console.log('FAILED...', error);
        //     });
        // window.open('mailto:yewbdar.grima@gmail.com?subject=whats up&body=How are you yo whats new ');
        // console.log('this is the contact ')
}
inputHandler =(event)=>{
    event.preventDefault()
        this.setState({[event.target.name]:event.target.value})
}
render(){
    return (<div >
            <Card className='aboutCared'>
                <CardContent>
                    <section className="aboutme contact">
                        <h1>Contact</h1>
                        <hr className="horazontal-line"/>
                        <form>

                            <div className="input-holder">
                                <label htmlFor="name">Name</label> <br/>
                                <input type="text" name="name" placeholder="your name" required />
                            </div>
                            <div className="input-holder">
                                <label htmlFor="name">Email</label><br/>
                                <input type="email" name="email" placeholder="example@gmail.com" required/>
                            </div>
                            <div className="input-holder">
                                <label htmlFor="name">Message</label> <br/>
                                <textarea name="message" cols="97" rows="11" required></textarea>
                            </div>
                            {/*<button className="submit"  onClick={this.onclickHandler}>submit</button>*/}
                            <input type="submit" />
                        </form>

                    </section>
                </CardContent>
            </Card>
            <Card className='mediaCared'>
                <CardContent>
                    <Media/>
                </CardContent>
            </Card>
        </div>

    )};
}

// SimpleCard.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default SimpleCard;