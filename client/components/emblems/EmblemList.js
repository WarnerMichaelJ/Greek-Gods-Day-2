import React from 'react';
import Queries from '../../graphql/queries';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
const { FETCH_EMBLEMS } = Queries;

const EmblemsList = () => {
    return (
        <div className="outer">
            <ul>
                <Query query={FETCH_EMBLEMS}>
                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error</p>;

                        return (
                            <div>
                                All Emblems:
                                {data.emblems.map(({ id, name }) => (
                                <li key={id}>
                                    <p className="description">Name: {name}</p>
                                    <br/>
                                </li>
                                ))}
                            </div>
                        );
                    }}
                </Query>
            </ul>
        </div>
    );
};

export default EmblemsList;