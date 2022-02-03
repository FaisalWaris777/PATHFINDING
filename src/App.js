import './App.css';
import React, { useState } from 'react';
import PATH from './PATH';
import INSTRUCTIONS from './INSTRUCTIONS';

export default function App() {

  const [open, setOpen] = React.useState(true);
  
  const handleClose = () => {
    setOpen(false);
  };

 const col=50,row=18;
  var matrix=new Array(row);
  var dist=new Array(row);
  var vist=new Array(row);
  let vp=new Array();
  for(let i=0;i<row;i++)
  {matrix[i]=new Array(col);
  dist[i]=new Array(col);
  vist[i]=new Array(col);}
  
  for(let i=0;i<row;i++)
    for(let j=0;j<col;j++)
     {matrix[i][j]=1;
     dist[i][j]=100;
     vist[i][j]=[-1,-1];}

return (
  <>
  <INSTRUCTIONS handleClose={handleClose} open={open}/>
   <PATH col={col} 
   row={row} 
   matrix={matrix}
   dist={dist}
   vist={vist}
   vp={vp}/>
  </>);
}
