/* Functions for creating all units */
function basicHarvester(spawn){

	Game.spawns[spawn].createCreep( [WORK, CARRY, MOVE], {Role:'harvester'});

}

module.exports = basicHarvester;