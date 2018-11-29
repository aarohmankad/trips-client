import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import request from 'superagent';

class LandingPage extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      candidates: [],
      trips: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleChange(e) {
    const { target } = e;
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    if (e.key !== 'Enter') {
      return;
    }

    e.preventDefault();

    // FIXME: Strictly for demo purposes
    const { input } = this.state;
    request
      .get('http://localhost:8000/api/search')
      .query({ input })
      .then(candidates => {
        this.setState({
          candidates: candidates.body,
        });
      });
  }

  addToTrip(candidate, tripId) {
    console.log({ candidate, tripId });
    request
      .post('http://localhost:8000/api/attractions')
      .send({
        image: candidate.populatedPhoto,
        link: `https://www.google.com/maps/place/?q=place_id:${
          candidate.place_id
        }`,
        title: candidate.name,
      })
      .then(attraction => {
        return request
          .put(`http://localhost:8000/api/trips/${tripId}`)
          .query({ attraction: attraction.body._id })
          .then(success => console.log({ success }));
      });
  }

  render() {
    return (
      <div className="search-page">
        <TextField
          className="search-page-input"
          label="What would you like to see?"
          value={this.state.input}
          onChange={this.handleChange}
          onKeyPress={this.handleSubmit}
          margin="normal"
          variant="outlined"
          name="input"
          fullWidth
          autoFocus={true}
        />

        <div className="search-page-candidates">
          {this.state.candidates.map(candidate => (
            <Card className="search-page-candidate" key={candidate.id}>
              <CardActionArea>
                <CardMedia
                  image={candidate.populatedPhoto}
                  title={candidate.name}
                  style={{
                    height: 400,
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {candidate.name}
                  </Typography>
                  <Typography component="div">
                    {candidate.formatted_address && (
                      <p> Address: {candidate.formatted_address} </p>
                    )}
                    {candidate.rating && <p> Rating: {candidate.rating} </p>}
                    {candidate.price_level && (
                      <p> Price Level: {candidate.price_level} </p>
                    )}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                style={{
                  justifyContent: 'space-between',
                }}
              >
                <a
                  href={`https://www.google.com/maps/place/?q=place_id:${
                    candidate.place_id
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="small" color="primary">
                    Check it out!
                  </Button>
                </a>

                <TextField
                  select
                  label="Trip"
                  value={this.state.trips[0].location}
                  onChange={event =>
                    this.addToTrip(candidate, event.target.value)
                  }
                  margin="normal"
                >
                  {this.state.trips.map(trip => (
                    <MenuItem key={trip._id} value={trip._id}>
                      {trip.location}
                    </MenuItem>
                  ))}
                </TextField>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default LandingPage;
