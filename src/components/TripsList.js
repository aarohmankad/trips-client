import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import dateFns from 'date-fns';
import React, { Component } from 'react';
import request from 'superagent';

const formatDate = date => {
  return dateFns.format(new Date(date), 'MMMM Do, YYYY');
};

const styles = theme => ({
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class Trip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      trip: props.trip,
    };
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { expanded, trip } = this.state;
    const { classes } = this.props;
    return (
      <Card className="trips-list-trip" key={trip._id}>
        <CardActionArea>
          {trip.attractions.length > 0 && (
            <CardMedia
              image={trip.attractions[0].image}
              title={trip.attractions[0].title}
              style={{
                height: 400,
              }}
            />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {trip.location}
            </Typography>
            <Typography component="div">
              <p>
                {formatDate(trip.startDate)} to {formatDate(trip.endDate)}
              </p>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {trip.attractions.map(attraction => (
              <Typography key={attraction._id} component="p">
                <a href={attraction.link}>{attraction.title}</a>
              </Typography>
            ))}
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

class TripsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trips: [],
    };
  }
  componentDidMount() {
    request
      .get('http://localhost:8000/api/trips')
      .set('Authorization', `Bearer ${localStorage.getItem('trips-user')}`)
      .then(trips => {
        this.setState({ trips: trips.body });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { trips } = this.state;
    const { classes } = this.props;
    const List = trips.map(trip => (
      <Trip key={trip._id} classes={classes} trip={trip} />
    ));
    return (
      <div className="trips-list">
        {trips.length > 0 ? List : <h3>You have no trips yet. Create one!</h3>}
      </div>
    );
  }
}

export default withStyles(styles)(TripsList);
