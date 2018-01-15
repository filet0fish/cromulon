import {Contest} from "./contest.js";
import contestData from "./data.js";

class Main {

    constructor () {

        let container = document.getElementById('itemContainer'),
            item = document.getElementById("itemRenderer");

        this.contest = new Contest(container, item);
        this.contest.entries = contestData;

    }

}

export let main = new Main();