export class Intervention {
    surgeon: string;
    topSpecialty: string;
    interventionCount: string;
    topAnesthetist: string;
    topNurse: string;
    topRoom: string;
    topIntervention: string;

    constructor(surgeon: string, topSpecialty: string, interventionCount: string, topAnesthetist: string, topNurse: string, topRoom: string, topIntervention: string) {
        this.surgeon = surgeon;
        this.topSpecialty = topSpecialty;
        this.interventionCount = interventionCount;
        this.topAnesthetist = topAnesthetist;
        this.topNurse = topNurse;
        this.topRoom = topRoom;
        this.topIntervention = topIntervention;
    }
}