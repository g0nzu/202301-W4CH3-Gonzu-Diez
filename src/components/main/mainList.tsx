import React from "react";
import { characterModel } from "../../models/characterType";
import { CHARACTERS } from "../characters/allCharacters";
import "./mainlist.css";

const MainList = () => (
  <div>
    {CHARACTERS.map((character: characterModel, index) => (
      <div key={index}>
        <div class="app container">
          <ul class="characters-list row list-unstyled">
            <li class="character col">
              <div class="card character__card">
                <img
                  src="img/no-one.jpg"
                  alt="Nombre y familia del personaje"
                  class="character__picture card-img-top"
                />
                <div class="card-body">
                  <h2 class="character__name card-title h4">
                    {character.name}
                  </h2>
                  <div class="character__info">
                    <ul class="list-unstyled">
                      <li>Edad: {character.age}</li>
                      <li>
                        Estado:
                        <i class="fas fa-thumbs-down"></i>
                        <i class="fas fa-thumbs-up"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="character__overlay">
                    <ul class="list-unstyled">
                      <li>Años de reinado: {character.years} </li>
                      <li>Arma: {character.weapon}</li>
                      <li>Destreza: {character.skill}</li>
                      <li>Peloteo: X</li>
                      <li>Asesora a: {character.advise} X</li>
                    </ul>
                    <div class="character__actions">
                      <button class="character__action btn">habla</button>
                      <button class="character__action btn">muere</button>
                    </div>
                  </div>
                </div>
                <i class="emoji">{character.icon}</i>
              </div>
            </li>
          </ul>
        </div>
        <div class="comunications">
          <p class="comunications__text display-1">
            Una frase que dice alguien
          </p>
          <img
            class="comunications__picture"
            src="img/no-one.jpg"
            alt="Nombre y familia del que habla"
          />
        </div>
      </div>
    ))}
  </div>
);

export default MainList;
