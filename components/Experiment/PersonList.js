import React from "react";
import axios from "axios";

// const API_ROOT = "https://conduit.productionready.io/api";

// export default axios.create({
//   baseURL: API_ROOT
// });

export default class PersonList extends React.Component {
  state = {
    persons: []
  };
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      console.log(res);
      this.setState({ persons: res.data });
    });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map(person => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    );
  }
}
