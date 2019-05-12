import { Engine } from './Engine';
import { Tire } from './Tire';

class Car {
  engine: Engine;
  tires: Tire[];

  constructor() {
    this.engine = new Engine();
    this.tires = [new Tire(), new Tire(), new Tire(), new Tire()];
  }
}