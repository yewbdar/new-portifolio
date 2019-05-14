import React from 'react'
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Header from "./Header";
import {BrowserRouter, Route} from "react-router-dom";
import Body from "./body";
import MyMedia from "./Media";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import '../App.css'

const styles = {
    card4:{
        width:'100%',
        marginTop:'45%',
        backgroundColor: '#666666',
        borderTop: '7px solid #FCA05F',

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
}
    function SimpleCard(props) {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;

    return (<div >
            <Card className={classes.card4}>
                <CardContent>

                        <footer className="aboutme-footer">
                        <span className="aboutme-footer">
                        <p>Copyright &copy; 2018 Yewbdar Girma</p></span>
                        </footer>

                </CardContent>
            </Card>
        </div>

    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);

