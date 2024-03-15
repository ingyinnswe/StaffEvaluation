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
                newTotalRatings[votedForUsername][variable] = 0;
              }

              newTotalRatings[votedForUsername][variable] += rating;
            }
          });
        }
      });
      for (const username in newTotalRatings) {
        const userRatings = newTotalRatings[username];
        let totalRatingSum = 0;
        let numVariables = 0;
        
        for (const variable in userRatings) {
          totalRatingSum += userRatings[variable];
          numVariables++;
        }
        
        // Convert each variable value to a percentage of the total
        for (const variable in userRatings) {
          userRatings[variable] = (userRatings[variable] / totalRatingSum) * 100;
        }
        // Calculate the average rating
        const averageRating = numVariables > 0 ? totalRatingSum / numVariables : 0;
      
        // Add the average rating to the user's ratings object
        userRatings['Average'] = averageRating;
      }

      setTotalRatings(newTotalRatings);
    }
  }, [returnData]);

  return totalRatings;
};

export default useTotalRatings;