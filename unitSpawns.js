/* Functions for creating all units */
function spawnUnit (type, spawn){

	if (type == 'harvester') {
	    Game.spawns[spawn].createCreep([WORK, CARRY, MOVE], {role:'harvester'});
	}
	
	if (type == 'upgrader') {
	    Game.spawns[spawn].createCreep([WORK, CARRY, MOVE], {role:'upgrader'});
	}
	
	if (type == 'builder') {
	    Game.spawns[spawn].createCreep([WORK, CARRY, MOVE], {role:'builder'});
	}
}

module.exports = spawnUnit;