import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        console.log(candidates.body);
        this.setState({
          candidates: candidates.body,
        });
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
                  <Typography component="p">
                    <p> Address: {candidate.formatted_address} </p>
                    <p> Rating: {candidate.rating} </p>
                    <p> Price Level: {candidate.price_level} </p>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
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
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default LandingPage;
