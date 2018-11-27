import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import dateFns from 'date-fns';
import React, { Component } from 'react';
import request from 'superagent';

const formatDate = date => {
  return dateFns.format(new Date(date), 'MM/DD/YYYY');
};

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
    const List = trips.map(trip => (
      <Card className="search-page-candidate" key={trip._id}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {trip.location}
            </Typography>
            <Typography component="p">
              <p>
                {formatDate(trip.startDate)} to {formatDate(trip.endDate)}
              </p>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Details
          </Button>
        </CardActions>
      </Card>
    ));
    return (
      <div className="trips-list">
        {trips.length > 0 ? List : <h3>You have no trips yet. Create one!</h3>}
      </div>
    );
  }
}

export default TripsList;
