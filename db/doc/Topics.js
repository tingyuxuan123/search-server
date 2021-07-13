import { SingleSels } from "../models/topics";
import { RightOrWrongs } from "../models/topics";
import { Fillings } from "../models/topics";

function findall(where){
    SingleSels.find(where)
}