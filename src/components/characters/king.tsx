import { characterModel } from "../../models/characterType";

export class King implements characterModel {
  says = "Vais a morir todos!";
  icon = "👑";
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public role: string,
    public img: string,
    public years: number
  ) {}
}
