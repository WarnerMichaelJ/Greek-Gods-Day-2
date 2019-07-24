import React from 'react';
import Queries from '../../graphql/queries';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import DeleteGod from './DeleteGod';
const { FETCH_GODS } = Queries;

const GodsList = () => {
    return (
        <div className="outer">
            <ul>
                <Query query={FETCH_GODS}>
                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error</p>;

                        return data.gods.map(({ id, name, description }) => (
                            <li key={id}>
                                <Link to={`/gods/${id}`}>
                                    <h4>{name}</h4>
                                </Link>
                                <p className="description">Description: {description}</p>
                                <Link to={`/gods/${id}/parents`}>
                                    <h4>{name} Parents</h4>
                                </Link>
                                <Link to={`/gods/${id}/children`}>
                                    <h4>{name} Children</h4>
                                </Link>
                                <Link to={`/gods/${id}/siblings`}>
                                    <h4>{name} Siblings</h4>
                                </Link>
                                <DeleteGod id={id} />
                            </li>
                        ));
                    }}
                </Query>
            </ul>
        </div>
    );
};

export default GodsList;