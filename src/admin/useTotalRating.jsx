import { useState, useEffect } from 'react';

const useTotalRatings = (returnData) => {
  const [totalRatings, setTotalRatings] = useState({});
  const [overall, setOverall] = useState({});

  useEffect(() => {
    const newTotalRatings = {};
    const totalVariableRatings = {};
    if (returnData && returnData.length > 0) {

      returnData.forEach(user => {
        if (user && user.votes) {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          user.votes.forEach(vote => {
            const voteDate = new Date(vote.createdAt);
            voteDate.setHours(0, 0, 0, 0);
            if (vote && vote.votedFor && vote.votedFor.username && vote.variable &&
              voteDate.getTime() === today.getTime()){
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

      for (const username in newTotalRatings) {
        const userRatings = newTotalRatings[username];
      
        for (const variable in userRatings) {
          if (variable === 'Average') {
            continue;
          }
          // Initialize the variable's ratings object if it doesn't exist
          if (!totalVariableRatings[variable]) {
            totalVariableRatings[variable] = { total: 0, count: 0 };
          }
      
          // Add the rating to the total and increment the number of votes
          totalVariableRatings[variable].total += userRatings[variable].percent;
          totalVariableRatings[variable].count++;
        }
      }
      
      // Calculate the average rating for each variable
      for (const variable in totalVariableRatings) {
        totalVariableRatings[variable].averagePercent = totalVariableRatings[variable].total / totalVariableRatings[variable].count;
      }
    }
    setTotalRatings(newTotalRatings);
    setOverall(totalVariableRatings);
  }, [returnData]);

  return {totalRatings, overall};
};

export default useTotalRatings;