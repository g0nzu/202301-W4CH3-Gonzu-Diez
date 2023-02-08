import { Adviser } from "./adviser";
import { King } from "./king";
import { Squire } from "./squire";
import { Fighter } from "./fighter";

export let CHARACTERS = [
  new King("Joffrey Baratheon", "Baratheon", 36, "Rey", "asd", 12),
  new Fighter(
    "Jaimme Lannister",
    "Lannister",
    24,
    "Luchador",
    "asdd",
    "Navaja",
    12
  ),
  new Adviser(
    "Tyrion Lannister",
    "Lannister",
    28,
    "Consejero",
    "asd",
    7,
    "Daenerys"
  ),
  new Squire("Bronn", "Lannister", 23, "Escudero", "asd", "Jaime"),
];
