import { characterModel } from "../../models/characterType";
export class Adviser implements characterModel {
  says = "No sé por qué, pero creo que voy a morir pronto";
  icon = "🎓";
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public role: string,
    public img: string,
    public skill: number,
    public advise: string
  ) {}
}
