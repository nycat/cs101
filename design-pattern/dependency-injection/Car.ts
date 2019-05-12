import { Engine } from './v2/Engine';
import { Tire } from './v2/Tire';

class Car {
  constructor(private engine: Engine, private tires: Tire[]) {
  }
}