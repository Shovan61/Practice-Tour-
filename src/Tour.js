import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: '4rem',
      marginBottom: '4rem',
      display: 'flex',
      flexDirection: 'column'
    },
    upperContent:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    priceBox: {
        backgroundColor: '#bbdefb',
        padding: '5px 10px',
        color: '#2962ff',
        borderRadius: '10px',

    },
button: {
    alignSelf: 'center',
    width: '50%',
    marginBottom: '2rem',
    marginTop: '1rem'
}
  }));


function Tour({id, name, infoFirst, infoLast, image, price, removeItem}) {
const classes = useStyles();
const [isShowMore, setiIShowMore] = useState(false);

return (
    <Card className={classes.root}>
        <img height='400px' width='100%' src={image} alt="" />  
       
       <CardContent className={classes.upperContent}>
         <div>
             <Typography variant="h6">{name}</Typography>
         </div>
          <div className={classes.priceBox}>
              <span style={{fontWeight: '700'}}>${price}</span>
          </div>
      </CardContent>

       <CardContent>
        <Typography style={{lineHeight: '25px'}} variant="body2" color="textSecondary" component="p">
          {infoFirst}{isShowMore && infoLast}
          <span 
          style=
          {{
              marginLeft: '5px', 
              color: '#448aff', 
              cursor: 'pointer'
          }}
          onClick={() => setiIShowMore(!isShowMore)}
          >
          {isShowMore ? 'Show Less' : 'Read more'}
          </span>
        </Typography>
      </CardContent>
      <Button 
      className={classes.button} 
      variant="outlined" 
      color="secondary"
      onClick={() => removeItem(id)}
      >
            Not Interested
        </Button>
    </Card>
)
};

export default Tour;
