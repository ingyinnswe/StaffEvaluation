import { useState, useEffect } from 'react';

const useTotalRatings = (returnData) => {
  const [totalRatings, setTotalRatings] = useState({});

  useEffect(() => {
    if (returnData && returnData.length > 0) {
      const newTotalRatings = {};

      returnData.forEach(user => {
        if (user && user.votes) {
          user.votes.forEach(vote => {
            if (vote && vote.votedFor && vote.votedFor.username && vote.variable) {
              const votedForUsername = vote.votedFor.username;
              const variable = vote.variable;
              const rating = vote.rating ? vote.rating : 0; // Default to 0 if rating is null

              if (!newTotalRatings[votedForUsername]) {
                newTotalRatings[votedForUsername] = {};
              }
              if (!newTotalRatings[votedForUsername][variable]) {
                newTotalRatings[votedForUsername][variable] = { totalRating: 0, numVotes: 0 };
              }

              newTotalRatings[votedForUsername][variable].totalRating += rating;
              newTotalRatings[votedForUsername][variable].numVotes++;

              newTotalRatings[votedForUsername][variable].percent = (newTotalRatings[votedForUsername][variable].totalRating / newTotalRatings[votedForUsername][variable].numVotes)*20;
            }
          });
        }
      });
      for (const username in newTotalRatings) {
        const userRatings = newTotalRatings[username];
        let totalRatingSum = 0;
        let numVariables = 0;
        
        for (const variable in userRatings) {
          totalRatingSum += ((userRatings[variable].percent)/20);
          numVariables++;
        }

        // for (const variable in userRatings) {
        //  userRatings[variable] = ((userRatings[variable]/ totalRatingSum) * 100).toFixed(1); 
        // }

      
      
        // Calculate the average rating
        const averageRating = (numVariables > 0 ? totalRatingSum / numVariables : 0).toFixed(2);
      
        // Add the average rating to the user's ratings object
        userRatings['Average'] = averageRating;
      }

      setTotalRatings(newTotalRatings);
    }
  }, [returnData]);

  return totalRatings;
};

export default useTotalRatings;