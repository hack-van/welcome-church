/* eslint-disable react/function-component-definition */
/* eslint-disable max-len */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './ViewApplication.scss';

export default function ViewAppCard() {
  const data = [
    {
      date:'4 Feb 2022',
      family:'Tsai',
      responses:'7',
      approvals:'2'
    },
    {
      date:'4 Feb 2022',
      family:'Wong',
      responses:'5',
      approvals:'1'
    },
    {
      date:'29 Feb 2022',
      family:'Valentine',
      responses:'2',
      approvals:'0'
    }
  ];

  return data.map((element) => (
    <Card sx={{ maxWidth: 360 }}>
      <CardMedia className="image" component="img" height="140" image="https://thumbs.dreamstime.com/b/happy-family-mother-father-children-son-daughter-sunset-nature-150794881.jpg" alt="imgAlt" />
      <CardContent>
        <Typography className="date">Date Created:{element.date}</Typography>
        <Typography className="family" variant='h5' component="div">{element.family} Family</Typography>
        <Typography className="description" component="div">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis ipsum!</Typography>
        <div className='res-approval'>
          <Typography className="responses">{element.responses} Responses</Typography>
          <Typography className="approvals">{element.approvals} Approvals Sent</Typography>
        </div>
      </CardContent>
    </Card>
  ));
}

