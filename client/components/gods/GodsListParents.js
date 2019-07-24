import React from 'react';
import Queries from '../../graphql/queries';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import DeleteGod from './DeleteGod';
const { FETCH_PARENTS } = Queries;

const GodsListParents = (props) => {
    return (
        <div className="outer">
            <ul>
                <Query query={FETCH_PARENTS} variables={{ id: props.match.params.godId }}>
                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error</p>;

                        return data.god.parents.map(({ id, name }) => (
                            <li key={id}>
                                <Link to={`/gods/${id}`}>
                                    <h4>{name}</h4>
                                </Link>
                                <p className="description">Name: {name}</p>
                                <DeleteGod id={id} />
                            </li>
                        ));
                    }}
                </Query>
            </ul>
        </div>
    );
};

export default GodsListParents;