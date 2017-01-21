/* Module Import */
var spawnUnit = require ('unitSpawns');
var roleHarvester = require('role.Harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function () {
    
    /* Worker loop */
    var harvester = 0;
    var upgrader = 0;
    var builder = 0;
    
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
            harvester = harvester + 1;
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
            upgrader = upgrader + 1;
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
            builder = builder + 1;
        }
    
    }
    var totalCreeps = harvester + upgrader + builder;
    console.log(harvester, upgrader, builder);
    
    /* TODO make this a separate function for all creep types*/
    if (harvester < 5){
        
        spawnUnit('harvester','Spawn1');
        
    }
    
    
    
    
}