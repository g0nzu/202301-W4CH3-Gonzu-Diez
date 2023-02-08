import { characterModel } from "../../models/characterType";

export class Fighter implements characterModel {
  says = "Primero pego y luego pregunto!";
  icon = "🗡";
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public role: string,
    public img: string,
    public weapon: string,
    public skill: number
  ) {}
}
