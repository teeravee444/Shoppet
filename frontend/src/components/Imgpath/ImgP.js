import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      "https://medthai.com/images/2017/03/%E0%B8%9C%E0%B8%B1%E0%B8%81.jpg",
  },
  {
    imgPath:
      "https://medthai.com/images/2017/03/%E0%B8%9C%E0%B8%A5%E0%B9%84%E0%B8%A1%E0%B9%89.jpg",
  },
  {
    imgPath:
      "https://obs.line-scdn.net/0hNNWq9Dm-EWFqCD74AgFuNlBeEg5ZZAJiDj5AYjZmT1VPbwIwUmoKD0kKH1VPb1Y_BGZXA0cIClBBOgY-BGsK/w644",
  },
  {
    imgPath:
      "https://food.mthai.com/app/uploads/2017/11/Frozen-Cow-1.jpg",
  },
  {
    imgPath:
      "https://s359.kapook.com/pagebuilder/d88bb02b-9d80-4277-95f0-7dcc97c0756b.jpg",
  },
];

function ImagP() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 900, flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 400,
                  display: "block",
                  maxWidth: 900,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default ImagP;
