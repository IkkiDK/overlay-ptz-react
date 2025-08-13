import {
  ArrowUpCircle,
  ArrowLeftCircle,
  ArrowRightCircle,
  HomeIcon,
} from "lucide-react";

export const PTZ_DIRECTIONS = [
  {
    className: "up-left",
    icon: <ArrowUpCircle color="#fff" fill="#05081e" size={44} style={{ transform: "rotate(-45deg)" }} />,
    action: "MoveUpLeft",
    tooltip: "Cima-esquerda",
  },
  {
    className: "up",
    icon: <ArrowUpCircle color="#fff" fill="#05081e" size={44} />,
    action: "MoveUp",
    tooltip: "Cima",
  },
  {
    className: "up-right",
    icon: <ArrowUpCircle color="#fff" fill="#05081e" size={44} style={{ transform: "rotate(45deg)" }} />,
    action: "MoveUpRight",
    tooltip: "Cima-direita",
  },
  {
    className: "left",
    icon: <ArrowLeftCircle color="#fff" fill="#05081e" size={44} />,
    action: "MoveLeft",
    tooltip: "Esquerda",
  },
  {
    className: "home",
    icon: <HomeIcon color="#fff" fill="none" size={38} strokeWidth={2} />,
    action: "Home",
    tooltip: "Home",
  },
  {
    className: "right",
    icon: <ArrowRightCircle color="#fff" fill="#05081e" size={44} />,
    action: "MoveRight",
    tooltip: "Direita",
  },
  {
    className: "down-left",
    icon: <ArrowUpCircle color="#fff" fill="#05081e" size={44} style={{ transform: "rotate(225deg)" }} />,
    action: "MoveDownLeft",
    tooltip: "Baixo-esquerda",
  },
  {
    className: "down",
    icon: <ArrowUpCircle color="#fff" fill="#05081e" size={44} style={{ transform: "rotate(180deg)" }} />,
    action: "MoveDown",
    tooltip: "Baixo",
  },
  {
    className: "down-right",
    icon: <ArrowUpCircle color="#fff" fill="#05081e" size={44} style={{ transform: "rotate(135deg)" }} />,
    action: "MoveDownRight",
    tooltip: "Baixo-direita",
  },
]; 