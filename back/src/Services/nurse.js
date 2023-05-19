function combinedNursesCount(nurse1Counts, nurse2Counts) {    
    const combinedCounts = {};

    for (const nurseName in nurse1Counts) {
        combinedCounts[nurseName] = nurse1Counts[nurseName];
    }

    for (const nurseName in nurse2Counts) {
        if (combinedCounts[nurseName]) {
            combinedCounts[nurseName] += nurse2Counts[nurseName];
            } else {
                combinedCounts[nurseName] = nurse2Counts[nurseName];
            }
    }
    return (combinedCounts);
}

module.exports = { combinedNursesCount };
