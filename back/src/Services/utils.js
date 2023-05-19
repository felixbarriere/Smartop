function sortArray(obj) {    
    const sortedObj = {};
    const sortedKeys = Object.keys(obj).sort();
  
    for (const key of sortedKeys) {
      sortedObj[key] = obj[key];
    }
    return (sortedObj);
}

function findTopKey(obj) {
    return (Object.keys(obj).reduce((a, b) => (obj[a] >= obj[b] ? a : b)));
}


function countingOccurences(fieldCounts, field) {
    return fieldCounts.reduce((acc, cur) => {
        if (acc[cur[field]]) {
            acc[cur[field]] += cur.count;
        } else {
        acc[cur[field]] = cur.count;
        }
        return (acc);
    }, {});
}

module.exports = { sortArray, findTopKey, countingOccurences };
