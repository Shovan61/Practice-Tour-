import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tour from './Tour';
import Button from '@material-ui/core/Button';

const url = 'https://course-api.com/react-tours-project'


const useStyles = makeStyles((theme) => ({
  main: {
    height: '100%',
    width: 'auto',
   backgroundColor: '#e1f5fe',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center'
  },
  underline: {
    width: '60px',
    border: '2px solid #03a9f4',
    alignSelf: 'center'
  },
  tourList: {
    width: '50%'
  }
}));


function App() {
 const classes = useStyles();
 const [data, setData] = useState([]); 
 const [isLoading, setIsLoading] = useState(false);
 
 useEffect(() => {
  const fetchData = async () => {
  setIsLoading(true);

  const response = await fetch(url);
  const alldata = await response.json();
  
  setData(alldata);

  setIsLoading(false);

  };
  
  fetchData();

 }, [setData]);


 const removeItem = (id) => {
  setData(data.filter(curData => curData.id !== id));
 };

 const handleReload = () => {
  window.location.reload()
 };


  return (
    <div className={classes.main}>
 
       
       {isLoading && (
         <React.Fragment>
            <CircularProgress style={{marginTop: '15rem'}}/>
         </React.Fragment>
       )}


       {!isLoading && (
         <React.Fragment>
      <h1 
       style={{
         letterSpacing: '2px', 
         fontWeight: '400', 
         textAlign: 'center',
         color: '#555'
         }}>{data.length === 0 ? 'No Tours Left' : 'Our Tours'}</h1>
       <div className={classes.underline}/>

            {data.length === 0 && (
            <>
            <Button 
            variant="contained" 
            color="primary"
            style={{marginTop: '3rem'}}
            onClick={handleReload}
            >
            Refresh
            </Button>
            </>
            )}
            <div className={classes.tourList}>
            {data.map(curCard => {
              const {id, name, info, image, price} = curCard;
              const infoArray = info.split(' ');
              const infoFirstArr = infoArray.slice(0, 30);
              const infoLastArr = infoArray.slice(30);
              const infoFirst = infoFirstArr.join(' ');
              const infoLast = infoLastArr.join(' ');
              return (
                <Tour 
                id={id} 
                name={name} 
                infoFirst={infoFirst} 
                infoLast={infoLast} 
                image={image} 
                price={price}
                key={id}
                removeItem={removeItem}
                />
              )
            })}
            </div> 


         </React.Fragment>
       )}

        
        

    </div>

  )
};

export default App

