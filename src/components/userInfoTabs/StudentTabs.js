import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import InfoTab from "./InfoTab";
import AcademicTab from "./AcademicTab";
import GuadanceTab from "./GuadanceTab1";
import ContactInfo from "./ContactInfo";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "#fffff9",
    width: "100%",
  },
  tabs: {
    justifyContent: "center", // Center-align the tabs
  },
  tab: {
    minWidth: "auto", // Ensures the tab width is just enough to fit the content
  },
}));

export default function FullWidthTabs({ user }) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          scrollButtons="auto"
          aria-label="full width tabs example"
          classes={{ flexContainer: classes.tabs }} // Applying the center alignment
        >
          <Tab label="Student's Information" {...a11yProps(0)} className={classes.tab} />
          <Tab label="Academics's Information" {...a11yProps(1)} className={classes.tab} />
          <Tab label="Guardian's Information" {...a11yProps(2)} className={classes.tab} />
          <Tab label="Contact Details" {...a11yProps(3)} className={classes.tab} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <InfoTab user={user} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <AcademicTab user={user} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <GuadanceTab user={user?.guadian} />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <ContactInfo user={user} />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
