import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import ProfileMainStyles from "./profile-main.module.css";
import me from "../images/me3sm.jpg"
import TagSet from "./TagSet.js"

const backendTools = [
 'Python',
 'Django Rest Framework',
 'Postgresql',
 'RabbitMQ',
 'Redis',
 'Docker',
 'GCP',
 'AWS'
]

const frontendTools = [
 'ES6',
 'React.js',
 'Gatsby.js',
 'Webpack'
]

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

function ProfileMain(props) {
  const { classes } = props;

  return (
    <div className={classes.root} >

      <Grid container spacing={40} justify="center">
          <Grid item xs={12} sm={4}>
           <Paper elevation={4} style={{'padding':'10px', 'paddingBottom':'0px'}}>
             <img className="logo" src={me} style={{'marginBottom':'5px'}} />
           </Paper>


          </Grid>

          <Grid item xs={12} sm={7}>
             <Grid item xs={12} sm={12}>
                 <Paper elevation={4} style={{'padding':'30px'}}>
                 <h1>Full Stack Developer</h1>

                  <Typography>
                  I have been building things on the web since 2010 and have had the advantage of working with people in a variety of industries. My core competency is in web technology, specifically in full stack django development. I am currently based out of downtown Seattle. If you have a project in mind or would just like to get to know more about me then feel free to get in touch. <a href="mailto:contact@spencercooley.com">contact@spencercooley.com</a>
                  </Typography>

                  <h3><a  href="https://storage.googleapis.com/sc-marketing-storage/spencerresume1.pdf" target="_blank">Download My Resume</a></h3>

                  <div className="social-icons">
                     <a target="_blank" href="https://github.com/spencercooley"><i className="fab fa-github"></i></a>
                     <a target="_blank" href="https://linkedin.com/in/spencercooley"><i className="fab fa-linkedin"></i></a>
                     <a target="_blank" href="https://www.youtube.com/user/spencercooley100/videos"><i className="fab fa-youtube-square"></i></a>
                  </div>

                  <Divider />
                  <TagSet category="Backend Tools" tags={backendTools} chipStyle={classes.chip}/>
                  <TagSet category="Frontend Tools" tags={frontendTools} chipStyle={classes.chip}/>
                  </Paper>
              </Grid>

          </Grid>
      </Grid>
    </div>
  );
}

ProfileMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileMain);
