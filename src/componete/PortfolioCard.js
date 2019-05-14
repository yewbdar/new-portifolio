import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Media from "./Media";
import data from './PortifolioList'
import Body from "./body";

// const styles = {
    // about: {
    //     width: '55%',
    //     height:'20%',
    //     float:'left',
    //     // marginTop:'10%',
    //     margin:'3% 8% ',
    //     clear:'both',
    //
    // },
    // portifolioCard: {
    //     maxWidth: 275,
    //     // margin:'5% 3%'
    //     // width: '55%',
    //     height:'20%',
    //     float:'left',
    //     // marginTop:'10%',
    //     margin:'4% 7% ',
    //     backgroundColor:'#FDD3B4'
    //
    //
    // },
    // mymedia:{
    //     width: '20%',
    //     height:'10%',
    //     float:'left',
    //     margin:'6% 0',
    //     backgroundColor:'#FDD3B4'
    // },
    // media: {
    //     height: 170,
    // },
// };

function MediaCard(props) {
    // const { classes } = props;

    return (

        <div >

            < div className='aboutCared portfolioHolder'>
                {/*<CardContent>*/}
                {data.map((item,index)=>{
                    return(<Card  key={index} className='portfolioCard'>
                            <CardActionArea>
                                <CardMedia
                                    className='portfolioMedia'
                                    image={item.src}
                                    title={item.title}
                                />
                                <CardContent>
                                    <Typography  gutterBottom variant="h5" component="h2">
                                       <span className='portfolioTitle'>{item.title}</span>
                                    </Typography>
                                    <Typography component="p">
                                        {item.detail}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <a className='menu-lin' href={item.code} target="_blank" size="small" color="primary">
                                    view code
                                </a>
                                <a className='menu-lin'  href={item.demo} target="_blank" size="small" color="primary">
                                    view demo
                                </a>
                            </CardActions>

                        </Card>
                    )})}
                {/*</CardContent>*/}
            </div>
            <Card className='mediaCared'>
                <CardContent>
                    <Media/>
                </CardContent>
            </Card>
        </div>

    );
}

// MediaCard.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default MediaCard;






















































