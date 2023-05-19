const { combinedNursesCount } = require('./nurse.js');
const { sortArray, findTopKey, countingOccurences } = require('./utils.js');

function surgeonFavorites(surgeons) {
    
    const result = surgeons.map((surgeon) => {
      
        const specialtyCounts = sortArray(countingOccurences(surgeon.specialtyCounts, "specialty"));
        const anesthetistCounts = sortArray(countingOccurences(surgeon.anesthetistCounts, "anesthetist"));
        const nurse1Counts = countingOccurences(surgeon.nurse1Counts, "nurse1");
        const nurse2Counts = countingOccurences(surgeon.nurse2Counts, "nurse2");
        const nurseTotalCounts = sortArray(combinedNursesCount(nurse1Counts, nurse2Counts));
        const roomCounts = sortArray(countingOccurences(surgeon.roomCounts, "roomNumber"));
        const interventionCounts = sortArray(countingOccurences(surgeon.interventionCounts, "intervention"));
        
        const topSpecialty = findTopKey(specialtyCounts);
        const topAnesthetist = findTopKey(anesthetistCounts);
        const topNurse = findTopKey(nurseTotalCounts);
        const topRoom = findTopKey(roomCounts);
        const topIntervention = findTopKey(interventionCounts);

        return {
          surgeon: surgeon._id,
          topSpecialty,
          interventionCount: surgeon.interventionCount,
          topAnesthetist,
          topNurse,
          topRoom,
          topIntervention
        };
    });
    return (result);
};

module.exports = { surgeonFavorites };