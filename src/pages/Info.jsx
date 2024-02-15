import React from 'react';
import PropTypes from 'prop-types'

function Info (props){
    return (
        <div className="card mx-auto ">
            <img src="/src/assets/ric-logo.png" alt="Profile" className='h-56 w-auto'/>
            <h1>{props.name}</h1>
            <p>{props.nickname}</p>
            <strong>{props.jobTitle}</strong>
            <div>
                <a href="path_to_ratings_page">Rating 1</a>
                <a href="path_to_ratings_page">Rating 2</a>
                <a href="path_to_ratings_page">Rating 3</a>
            </div>
        </div>
    );
};
Info.propTypes = {
    name: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired
}

Info.defaultProps = {
    name: "Ajarn",
    nickname: "unknown",
    jobTitle: "Officer"
}
export default Info;
