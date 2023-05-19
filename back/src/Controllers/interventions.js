const { surgeonFavorites }  = require("../Services/surgeon.js");
const { Intervention }  = require("../Models/intervention.js");

const getInterventions = async(req, res) =>{    
    try {
        const surgeons = await Intervention.aggregate([
        {
            $group: {
                _id: "$surgeon",
                interventionCount: { $sum: 1 },
                specialtyCounts: {
                    $push: {
                        specialty: "$specialty",
                        count: { $cond: [{ $ne: ["$specialty", ""] }, 1, 0] }
                    },
                },
                anesthetistCounts: {
                    $push: {
                        anesthetist: "$anesthsiste",
                        count: { $cond: [{ $ne: ["$anesthsiste", ""] }, 1, 0] }
                    },
                },
                nurse1Counts: {
                    $push: {
                        nurse1: "$nurse1",
                        count: { $cond: [{ $ne: ["$nurse1", ""] }, 1, 0] }
                        },
                    },
                nurse2Counts: {
                    $push: {
                        nurse2: "$nurse2",
                        count: { $cond: [{ $ne: ["$nurse2", ""] }, 1, 0] }
                        },
                    },
                roomCounts: {
                    $push: {
                        roomNumber: "$roomNumber",
                        count: { $cond: [{ $ne: ["$roomNumber", ""] }, 1, 0] }
                        },
                    },
                interventionCounts: {
                    $push: {
                        intervention: "$intervention",
                        count: { $cond: [{ $ne: ["$intervention", ""] }, 1, 0] }
                        },
                }
            },
        },
        {
            $sort: { interventionCount: -1 },
        },
        ]);
        const result = surgeonFavorites(surgeons);
        
        res.status(200).json(result);
    } catch (err) {
        res.send(err);
    }
}

module.exports = getInterventions;