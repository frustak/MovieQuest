import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    margin: '16px auto',
    borderRadius: '8px',
    backgroundColor: '#cfd8dc',
  },
});

const DotsMobileStepper = props => {
  const classes = useStyles();
  const theme = useTheme();

  const handleNext = () => {
    props.setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    props.setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <MobileStepper
      variant="text"
      steps={props.steps}
      position="static"
      activeStep={props.activeStep}
      className={classes.root}
      nextButton={
        <Button
          size="small"
          onClick={handleNext}
          disabled={props.activeStep === props.steps - 1}
        >
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button
          size="small"
          onClick={handleBack}
          disabled={props.activeStep === 0}
        >
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
};

export default DotsMobileStepper;
