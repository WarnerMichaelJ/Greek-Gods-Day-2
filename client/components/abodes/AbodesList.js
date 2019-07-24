import React from 'react';
import Queries from '../../graphql/queries';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
const { FETCH_ABODES } = Queries;

const AbodesList = () => {
  return (
    <div className="outer">
      <ul>
        <Query query={FETCH_ABODES}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;

            return data.abodes.map(({ id, name, coordinates }) => (
              <li key={id}>
                <Link to={`/abodes/${id}`}>
                  <h4>{name}</h4>
                </Link>
                <p className="description">Name: {name}</p>
                <p className="description">Coordinates: {coordinates}</p>
              </li>
            ));
          }}
        </Query>
      </ul>
    </div>
  );
};

export default AbodesList;