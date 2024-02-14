import React from 'react';

function Info (){
    return (
        <div className="card">
            <img src="path_to_image" alt="Profile" />
            <h1>Name</h1>
            <p>Nickname</p>
            <strong>Job Title</strong>
            <div>
                <a href="path_to_ratings_page">Rating 1</a>
                <a href="path_to_ratings_page">Rating 2</a>
                <a href="path_to_ratings_page">Rating 3</a>
            </div>
        </div>
    );
};

export default Info;
