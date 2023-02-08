import { characterModel } from "../../models/characterType";

export class Squire implements characterModel {
  says = "Soy un loser";
  icon = "🛡️";
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public role: string,
    public img: string,
    public squirer: string
  ) {}
}
