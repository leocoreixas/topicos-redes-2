import { MouseEventHandler } from "react";
import Typography from "../../../atoms/Typography";
import classNames from "classnames";
import { useState } from "react";

interface IProps {
  title: string | undefined;
  strength: string | undefined;
  speed: string | undefined;
  rarity: string | undefined;
  image: string | undefined;
  hoverable?: boolean;
  onClick?: MouseEventHandler | undefined;
  className?: string;
  checked?: boolean;
  created_at?: string;
}

function CarCard(props: IProps) {
  const {
    title,
    strength,
    speed,
    rarity,
    image,
    hoverable,
    onClick,
    className,
    created_at,
    checked,
  } = props;

  const classes = {
    variants: {
      yellow: "bg-yellow-200",
      blue: "bg-blue-200",
      gray: "bg-gray-200",
    },
  };



  return (
    <>
      <div
        onClick={onClick}
        className={classNames(
          "w-[300px] p-4 flex flex-col justify-center rounded-2xl",
          {
            [hoverable
              ? "cursor-pointer transition ease-in-out duration-300 transform hover:scale-105"
              : ""]: hoverable,
          },
          { [classes.variants.yellow]: rarity === "legendary" },
          { [classes.variants.blue]: rarity === "rare" },
          { [classes.variants.gray]: rarity === "common" },
          className
        )}
      >
        <Typography tag="label" variant="h6" color="gray-800">
          {title}
        </Typography>
        <div className="h-[180px] flex justify-center rounded-xl p-[2px] mt-4">
          <img
            className="w-full rounded-xl"
            src={`../../../src/assets/images/${image}.png`}
            alt="car"
          />
        </div>
        <div>
          <div className="flex justify-between items-center self-stretch mt-4">
            <Typography tag="label" variant="label-lg" color="gray-800">
              Força
            </Typography>
            <Typography tag="h6" variant="h6">
              {strength}
            </Typography>
          </div>
          <div className="flex justify-between items-center self-stretch mt-4">
            <Typography tag="label" variant="label-lg" color="gray-800">
              Velocidade
            </Typography>
            <Typography tag="h6" variant="h6">
              {speed}
            </Typography>
          </div>
          <div className="flex justify-between items-center self-stretch mt-4">
            <Typography tag="label" variant="label-lg" color="gray-800">
              Data de Criação
            </Typography>
            <Typography tag="h6" variant="h6">
              {created_at}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarCard;
