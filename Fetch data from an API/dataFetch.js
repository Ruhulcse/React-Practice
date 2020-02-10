import React from "react";

export default class fetchUser extends React.Component {
  state = {
    loading: true,
    person: []
  };

  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data, loading: false });
    console.log(data);
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
          <div className="table table-striped table-dark">
              {this.state.person.map(data => {
                  return(
                      <React.Fragment>
                          <tr>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.username}</td>
                            <td>{data.email}</td>
                          </tr>
                      </React.Fragment>
                  )
              })}
          </div>
      </div>
    );
  }
}
