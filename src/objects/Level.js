export default class Level {
	levelName;
	entities;
	rocketMove;
	planetsMove;
	physics;
	goalPlanet = null;
	timeAllowed; // in milliseconds

	Level(name, objects, rocket_move, planets_move, timeAllowed) {
		this.levelName = name;
		// First entity is rocket. Rest are planets.
		this.setEntities(objects);
		this.setRocketMove(rocket_move);
		this.setPlanetsMove(planets_move);
		this.setTimeAllowed(timeAllowed);
		this.physics = Physics.getInstance();
		if (rocket_move) {
			this.goalPlanet = objects[objects.length-1];
		}
	}
	
	handleAcceleration() {
		//if rocket exists
		if (this.rocketMove) {
			r = entities[0];
			if (r.getFuelPercentage() > 0) {
				cur_vel = r.getVel();
				vel = physics.newVel(r.forcePerFuelBurnt, r.mass);
				theta = physics.getAngle(cur_vel[0],cur_vel[1]);
				components = physics.getComponents(vel, theta);
				cur_vel[0] += components[0];
				cur_vel[1] += components[1];
				r.accelerateTo(cur_vel);
				return true;
			}
			return false;
		}
		return false;
	}
	
	handleDeceleration() {
		//if rocket exists
		if (this.rocketMove) {
			r = entities[0];
			if (r.getFuelPercentage() > 0) {
				cur_vel = r.getVel();
				vel = physics.newVel(r.forcePerFuelBurnt, r.mass);
				theta = physics.getAngle(cur_vel[0],cur_vel[1]);
				components = physics.getComponents(vel, theta);
				cur_vel[0] -= components[0];
				cur_vel[1] -= components[1];
				r.accelerateTo(cur_vel);
				return true;
			}
			return false;
		}
		return false;
	}

	setRocketSprite(n) {
		if (this.entities[0].getClass() == Rocket.class) {
			r = this.entities[0];
			if (n == 1) {
				// accelerating
				r.sprite = r.rocketSpriteAccelerating[r.spriteNum];
			} else if (n == -1) {
				// accelerating
				r.sprite = r.rocketSpriteDecelerating[r.spriteNum];
			} else {
				r.sprite = r.rocketSprite;
			}
		}
	}
	
	update() {
		// For every object in space, calculate force experienced by it due to every other object in space
		// if rocket collides 		-> return -1
		// if rocket reaches goal 	-> return 1
		// if all smooth 			-> return 0
		for (i = 0; i < this.entities.length; i++) {
			total_fx = 0;
			total_fy = 0;
			if (this.entities[i].getClass() == Rocket.class) {
				r = this.entities[i];
				r.spriteCounter++;
				if (r.spriteCounter > 10) {
					if(r.spriteNum == 0)
						r.spriteNum = 1;
					if (r.spriteNum == 1)
						r.spriteNum = 0;
				}
			}
			for (j = 0; j < this.entities.length; j++) {
				if (i != j) {
					if (this.rocketMove && this.entities[i].getClass() == Rocket.class) {
						thresh = 1e10;
						retval = -1;
						if (this.entities[j].name == this.goalPlanet.name) {
							retval = 1;
							thresh = 1.5e10;
						}
						if (this.Collision(this.entities[i].position, this.entities[j].position, this.entities[i].radius, this.entities[j].radius,thresh)) {
							return retval;
						}
					}
					pos1 = physics.auToM(this.entities[i].position);
					pos2 = physics.auToM(this.entities[j].position);
					force = physics.gravForce(this.entities[i].mass, this.entities[j].mass, pos1, pos2);
					force_x = force[0];
					force_y = force[1];
					total_fx += force_x;
					total_fy += force_y;
				}
			}
			
			// Use force to calculate updated velocity
			this.entities[i].velocity[0] += physics.newVel(total_fx, this.entities[i].mass);
			this.entities[i].velocity[1] += physics.newVel(total_fy, this.entities[i].mass);
			
			// update dist+travelled
			this.updateDistTravelled(this.entities[i]);
						
			addTrail(this.entities[i]);
			
			// Use velocity to calculate updated position
			this.entities[i].position[0] += physics.mToAu(physics.newPos(this.entities[i].velocity[0]));
			this.entities[i].position[1] += physics.mToAu(physics.newPos(this.entities[i].velocity[1]));

		}
		return 0;
	}
	
	addTrail(e) {
		//TODO: Fill this in
		if (e.trail.pathTravelled.size() == 0) {
			e.trail.addPathTravelled(e.position);
		} else {
			pos1 = e.position;
			pos2 = e.trail.pathTravelled.peekLast();
			//System.out.println("Level [146]: "+physics.getDistance(physics.auToM(pos1), physics.auToM(pos2))+"\t"+(1/physics.getScale()));
			if (physics.auToM(physics.getDistance(pos1, pos2)) >= (1/physics.getScale())) {
				e.trail.addPathTravelled(pos1);
			}
		}
	}
	
	Collision(pos1, pos2, rad1, rad2, thresh) {
		//System.out.println("Level[100]: "+physics.getDistance(physics.auToM(pos1), physics.auToM(pos2))+"\t"+rad1+rad2+thresh);
		if (physics.getDistance(physics.auToM(pos1), physics.auToM(pos2)) <= rad1 + rad2 + thresh) {
			return true;
		}
		return false;
	}
	
	getFuelPercent() {
		//if rocket exists
		if (this.rocketMove) {
			r = entities[0];
			return r.getFuelPercentage();
		}
		return 0.0;
	}

	getLevelName() {
		return this.levelName;
	}
	
	setLevelName(name) {
		this.levelName = name;
	}

	getEntities() {
		try {			
			return entities;
		} finally {
			
		}
	}

	setEntities(entities) {
		this.entities = entities;
	}

	isPlanetsMove() {
		return planetsMove;
	}

	setPlanetsMove(planetsMove) {
		this.planetsMove = planetsMove;
	}

	isRocketMove() {
		return rocketMove;
	}

	setRocketMove(rocketMove) {
		this.rocketMove = rocketMove;
	}
	
	getRocketVel() {
		if (this.rocketMove) {
			r = entities[0];
			v = r.getVel();
			return Math.sqrt(Math.pow(v[0],2)+Math.pow(v[0],2));
		}
		return 0.0;
	}
	
	getDistToGo() {
		if (this.rocketMove) {
			r = entities[0];
			p = entities[entities.length - 1];
			rocketPos = r.getPos();
			planetPos = p.getPos();
			dist = physics.getDistance(physics.auToM(planetPos), physics.auToM(rocketPos));
			return dist;
		}
		return 0.0;
	}
	
	updateDistTravelled(e) {
		if (this.rocketMove && e.getClass() == Rocket.class) {
		    old_pos = e.position;
			new_pos = new double[2];
			new_pos[0] = physics.newPos(e.velocity[0]);
			new_pos[1] = physics.newPos(e.velocity[1]);
			dist_travelled = physics.getDistance(old_pos, new_pos);
			r = e;
			r.updateDistTravelled(dist_travelled);
		}
	}
	
	getDistTravelled() {
		if (this.rocketMove) {
			r = entities[0];
			return r.distTravelled;
		}
		return 0.0;
	}

	getTimeAllowed() {
		return timeAllowed;
	}

	setTimeAllowed(timeAllowed) {
		this.timeAllowed = timeAllowed;
	}
	
}
