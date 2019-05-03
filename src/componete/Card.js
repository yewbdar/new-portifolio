import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Body from './body'
import MyMedia from './Media'
import Header from './Header'
import Footer from './Footer'

const styles = {
    card1: {
        width: '50%' ,
        marginTop:'5%',
        marginLeft:'10%',
        float:'left'

    },
    card2: {
        width: '20%' ,
        marginTop:'5%',
        marginLeft:'10%',
        float:'left'
    },
    card3: {
        width: '100%' ,
        // marginTop:'1%',
        //  margin:'2%',
        // float:'left'
    },
    card4:{
        // width:'100%',
        marginTop:'45%',
        backgroundColor: '#666666',
         borderTop: '7px solid #ffa300'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media:{
        float:'left'

    }
};

function SimpleCard(props) {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;

    return (<div className={classes.media}>
            <Card className={classes.card3}>
                <CardContent>
                    <Header />
                </CardContent>
            </Card>
            <Card className={classes.card1}>
                <CardContent>
                    <Body />
                </CardContent>
            </Card>
            <Card className={classes.card2}>
                <CardContent>
                    <MyMedia />
                </CardContent>


            </Card>
            <Card className={classes.card4}>
                <CardContent>
                    <Footer />
                </CardContent>


            </Card>
        </div>

    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
