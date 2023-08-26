import Entity from "./Entity";
import Trail from "./Trail";

export default class Planet extends Entity {
    constructor(name, mass, radius, sprite_path, trail_length) {
        super();
        this.name = name;
        this.mass = mass;
        this.radius = radius;
        this.velocity = new Array(2);
        this.position = new Array(2);
        this.setPlanetSprite(sprite_path);
        this.trail = new Trail();
        this.trail.setLenOfTrail(trail_length);
    }

    getPlanetSprite() {
		return planet_sprite;
	}
	
	setPlanetSprite(sprite) {
		let img = null;
		try {
			img = ImageIO.read(new File(sprite));
			planet_sprite = img;
		} catch {
			
		}
	}
}
