import Level from "../objects/Level";
import PlanetsBank from "./Planets"
import Physics from "../objects/Physics";

let physics = new Physics();

let level1 = new Level("Level 1",[null,PlanetsBank.earth,PlanetsBank.sun],false,true,physics,null,20000);

let LevelsBank = {'level1':level1};
export default LevelsBank