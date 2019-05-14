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
// const styles = {
//     aboutCared: {
//         width: '55%',
//         height:'20%',
//         float:'left',
//         // marginTop:'10%',
//         margin:'6% 8% ',
//         backgroundColor:'#FDD3B4'
//     },
//     mediaCared:{
//         width: '20%',
//         height:'10%',
//         float:'left',
//         margin:'6% 0',
//         backgroundColor:'#FDD3B4'
//     },
//     bullet: {
//         display: 'inline-block',
//         margin: '0 2px',
//         transform: 'scale(0.8)',
//     },
//     title: {
//         fontSize: 14,
//     },
//     pos: {
//         marginBottom: 12,
//     },
// };

function SimpleCard(props) {
    // const { classes } = props;
    // const bull = <span className={classes.bullet}>•</span>;

    return (<div >
        <Card className='aboutCared'>
            <CardContent>
                <Body/>
            </CardContent>
        </Card>
            <Card className='mediaCared'>
                <CardContent>
                    <Media/>
                </CardContent>
            </Card>
         </div>

    );
}

// SimpleCard.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default SimpleCard;