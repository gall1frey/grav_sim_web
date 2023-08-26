export default class Trail {
    constructor() {
        this.pathTravelled = [];
	    this.lenOfTrail = 100000000;
	    this.count = 0;
    }
	
    getLenOfTrail() {
		return this.lenOfTrail;
	}
	
	setLenOfTrail(l) {
		this.lenOfTrail = l;
	}
	
	addPathTravelled(point) {
		if( this.pathTravelled.size() >= this.lenOfTrail ) {
			this.pathTravelled.poll();
		}
		tmp_point = new double[2];
		tmp_point[0] = point[0]; tmp_point[1] = point[1];
		this.pathTravelled.offer(point);
	}
	
	getPathTravelled () {
		return this.pathTravelled;
	}
}