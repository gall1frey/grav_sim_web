import Level from "../objects/Level";
import PlanetsBank from "./Planets"

let level1 = new Level("Level 1",[null,PlanetsBank.earth,PlanetsBank.sun],false,true,20000);

let LevelsBank = {'level1':level1};
export default LevelsBank;