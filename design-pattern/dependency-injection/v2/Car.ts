import { Engine } from './Engine';
import { Tire } from './Tire';

class Car {
  engine: Engine;
  tires: Tire[];

  constructor(engin: Engine, tires: Tire[]) {
    this.engine = engin;
    this.tires = tires;
  }
}