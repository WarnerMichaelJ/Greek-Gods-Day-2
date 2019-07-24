import React from 'react';
import Queries from '../../graphql/queries';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
const { FETCH_ABODE } = Queries;

const Test = () => {
  return (
    <div className="outer">
      <ul>
              <Query query={FETCH_ABODE} variables={{ id: "5d3746f19b61f20ca36d834c"}}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;


            return (
              <div>
                <p className="description">Name: {data.abode.name}</p>
               
              </div>
            );
            
        //     data.abodes.map(({ id, name, coordinates }) => (
        //       <li key={id}>
        //         <Link to={`/abodes/${id}`}>
        //           <h4>{name}</h4>
        //         </Link>
        //         <p className="description">Coordinates: {coordinates}</p>
        //       </li>
        //     ));
          }}
        </Query>
      </ul>
    </div>
  );
};

export default Test;