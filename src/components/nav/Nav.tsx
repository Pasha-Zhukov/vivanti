import { useState } from "react";
import { handleScroll } from "../../utils/scrollUtils";

import "./Nav.scss";

export default function Nav() {
  const [activeButtonId, setActiveButtonId] = useState(0);

  const headerData = [
    {
      id: 1,
      name: "Лаборатория",
      anchor: "laboratory",
    },
    {
      id: 2,
      name: "Галерея",
      anchor: "gallery",
    },
    {
      id: 3,
      name: "Оставить заявку",
      anchor: "apply",
    },
  ];
  return (
    <nav>
      {headerData.map((item) => (
        <a
          key={item.id}
          href={`#${item.anchor}`}
          className={`button-header ${
            activeButtonId === item.id ? "active" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleScroll(item.anchor);
            setActiveButtonId(item.id);
          }}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}
