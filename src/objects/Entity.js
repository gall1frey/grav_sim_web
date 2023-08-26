export default class Entity {
    constructor(mass, velocity, position, radius, name, trail) {
        this.mass = mass;
        this.velocity = velocity;
        this.position = position;
        this.radius = radius;
        this.name = name;
        this.trail = trail;
    }

    setPos(x, y) {
		this.position[0] = x;
		this.position[1] = y;
	}
	
	getPos() {
		return this.position;
	}
	
	setVel(vx, vy) {
		/*
		 REMEMBER TO ONLY PASS VELOCITIES IN m/s 
		*/
		this.velocity[0] = vx;
		this.velocity[1] = vy;
	}
	
	getVel() {
		return this.velocity;
	}
}