import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import React from 'react';

export default function INSTRUCTIONS(props) {
    return (
        <>
        <div>
          <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle>
               <b>Welcome to PathFinding Visualizer!</b>
            </DialogTitle>
            <DialogContent>
            <DialogContentText>
               <b>INSTRUCTIONS:</b>
              </DialogContentText>
              <DialogContentText>
               <b>1. Click and drag the start and target(end) node to move them.</b>
              </DialogContentText>
              <DialogContentText>
               <b>2.Click on the grid to add a Wall.(The colour of Wall is Black)</b>
               <br/>
              <b>  Walls are impenetrable, meaning that a path cannot cross through them.</b>
              </DialogContentText>
              <DialogContentText>
               <b>3. Click on "FIND SHORTEST PATH" Button to get shortest path.</b>
               <br/>
               <b>Shortest Path is denoted by blue colour.</b>
              </DialogContentText>
              <DialogContentText>
               <b>4. Click on "RESET" Button to clear the entire Grid.</b>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={props.handleClose} color="primary">
               <b>Close</b>
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        </>
      );
}
