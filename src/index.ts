import p5 from 'p5';
import { setSketch, s } from './sketch';

new p5((sketch) => {
    setSketch(sketch);


    sketch.setup = () => {
        s.createCanvas(500, 500);
    };

    sketch.draw = () => {
        s.background(0);
    };
});
