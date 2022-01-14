import React, { useEffect, useState } from "react";
import Ingredients from "./Ingredients";

const Receipts = () => {
  const [meal, setMeal] = useState();
  const letOfFood = [
    {
      name: "Cheesecake",
      ll: "eggs",
      kk: "flavor",
      hh: "sugar",
      img: "https://avatars.mds.yandex.net/i?id=c5ae94a0e2680393477bae119823189d-5493124-images-thumbs&n=13",
    },
    {
      name: "Porridge",
      ll: "milk",
      kk: "salt",
      hh: "porridge",
      img: "https://avatars.mds.yandex.net/i?id=09123b00de18a50a8add9ed4d6f7e1e3-5243743-images-thumbs&n=13",
    },
    {
      name: "Sandwich",
      ll: "bread",
      kk: "mayo",
      hh: "sausage",
      img: "https://avatars.mds.yandex.net/i?id=54da79a73a6ccb2711d57f946c5a7406-5664913-images-thumbs&n=13",
    },
  ];
  useEffect(() => {
    console.log(meal);
  }, [meal]);

  return (
    <div>
      <h2>MENU</h2>
      <form
        onChange={(e) => {
          setMeal(e.target.value);
        }}
      >
        <input type="radio" id="choice1" name="contact" value="Cheese" />
        <label htmlFor="choice1">Cheesecake</label>
        <input type="radio" id="choice2" name="contact" value="Porridge" />
        <label htmlFor="choice2">Porridge</label>
        <input type="radio" id="choice3" name="contact" value="Sandwich" />
        <label htmlFor="choice3">Sandwich</label>
      </form>
      {meal && (
        <Ingredients data={letOfFood.find((item) => item.name === meal)} />
      )}
    </div>
  );
};

export default Receipts;
