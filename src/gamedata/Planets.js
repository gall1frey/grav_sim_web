import Planet from "../objects/Planet";

const earth = new Planet("Earth",5.97219e24,6378.1e3,[0,30000],[151.18e9,0],"images/planets/planet1.png",50);
const sun = new Planet("Sun",1.9891e30,6.95700e8,[0,0],[0,0],"images/planets/planet2.png",50);

let PlanetsBank = {'earth':earth,'sun':sun}
export default PlanetsBank;