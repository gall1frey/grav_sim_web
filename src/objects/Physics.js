export default class Physics {
	univGravConst;
	astronomicalUnit;
	timestep;
	scaleFactor;
	scale;
	
	constructor() {
		let univGravConst = 6.67408e-11;
		let astronomicalUnit = 149.6e6 * 1000;
		let timestep = 3600 * 5;
		let scaleFactor = 250;
		this.setScale(scaleFactor/astronomicalUnit);
	}
	
	getRealWorldTime(timeInMs) {
		return (float)((timestep * 60 * timeInMs) / (3600*365.25*1000 * 25));
	}
	
	gravForce(m1, m2, pos1, pos2) {
		dist = getDistance(pos1,pos2);
		force = (univGravConst*m1*m2)/Math.pow(dist, 2);
		theta = getAngle(pos1,pos2);
		force_x = Math.cos(theta)*force;
		force_y = Math.sin(theta)*force;
		return {force_x, force_y};
	}
	
	newVel(force, mass) {
		return force / mass * timestep;
	}
	
	newPos(vel) {
		return vel * timestep;
	}
	
	getDistance(pos1, pos2) {
		return Math.sqrt(Math.pow(pos2[0]-pos1[0],2)+Math.pow(pos2[1]-pos1[1],2));
	}
	
	getAngle(pos1, pos2) {
		return Math.atan2((pos2[1] - pos1[1]),(pos2[0] - pos1[0]));
	}
	
	getAngle(vx, vy) {
		return Math.atan2(vy, vx);
	}
	
	getComponents(val, angle) {
		components = Array(2).fill(0);
		components[0] = Math.cos(angle)*val;
		components[1] = Math.sin(angle)*val;
		return components;
	}
	
	updateScale(scaleFactor) {
		this.scaleFactor = scaleFactor;
		setScale(this.scaleFactor/astronomicalUnit);
	}

	getScale() {
		return scale;
	}

	setScale(scale) {
		this.scale = scale;
	}
	
	auToM(au) {
		return astronomicalUnit*au;
	}
	
	auToM(au) {
		res = Array(m.length).fill(0);
		for (i = 0; i < au.length; i++) {
			res[i] = auToM(au[i]);
		}
		return res;
	}
	
	mToAu(m) {
		return m/astronomicalUnit;
	}
	
	mToAu(m) {
		res = Array(m.length).fill(0);
		for (i = 0; i < m.length; i++) {
			res[i] = mToAu(m[i]);
		}
		return res;
	}
}
