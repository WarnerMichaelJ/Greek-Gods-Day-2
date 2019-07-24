import React, { Component } from "react";
import { Mutation } from "react-apollo";

import Mutations from "../../graphql/mutations";
const { NEW_GOD } = Mutations;

import Queries from "../../graphql/queries";
const { FETCH_GODS } = Queries; 

class GodCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
          name: "",
          type: "goddess",
          description: "",
          message: ""
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  


  handleInput(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  handleSubmit(e, newGod) {
    e.preventDefault();
    let name = this.state.name;

    // our newGod function will accept an object with the key of "variables" pointing to an object with all our passed in variables.
    newGod({
      variables: {
        name: name,
        type: this.state.type,
        description: this.state.description
      }
    })
      // after our mutation has run we want to reset our state and show our user the success message
      .then(data => {
        console.log(data);
        this.setState({
          message: `New god "${name}" created successfully`,
          name: "",
          type: "god",
          description: ""
        });
      });
  }

  updateCache(cache, { data }) {
    let gods;
    try {
      gods = cache.readQuery({ query: FETCH_GODS });
    } catch (err) {
      return;
    }

    if (gods) {
      // take care of un-nesting things before we write to our cache
      let godArray = gods.gods;
      let newGod = data.newGod;
      cache.writeQuery({
        query: FETCH_GODS,
        data: { gods: godArray.concat(newGod) }
      });
    }
  }

  render() {
    return (
      <Mutation
        mutation={NEW_GOD}
      >
        {(newGod, { data }) => ( 
            <div>
                <form onSubmit={(e) => this.handleSubmit(e, newGod)}>
                    Name: <input onChange={this.handleInput("name")} value={this.state.name} />
                    Description: <textarea onChange={this.handleInput("description")} value={this.state.description}/>
                    Type: <select onChange={this.handleInput("type")} value={this.state.type}>
                        <option value="god">God</option>
                        <option value="goddess">Goddess</option>
                    </select>
                    <button type="submit">Create God</button>
                </form>
            </div>
        )}
      </Mutation>
    );
  }
}

export default GodCreate;