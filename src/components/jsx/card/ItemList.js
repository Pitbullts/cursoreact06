import React from "react";
import { Item } from "./Item";
import { Link } from "react-router-dom";

export const ItemList = ({ items }) => {
  const categories = [
    { id: "asfadd", address: "/catalogo", text: "TODOS LOS PRODUCTOS" },
    { id: "123asf", address: "/category/Serie-1000", text: "SERIE 1000" },
    { id: "sgs3q3", address: "/category/Serie-2000", text: "SERIE 2000" },
    { id: "gkl98s", address: "/category/Serie-3000", text: "SERIE 3000" },
  ];

  return (
    <>
      <div className="ContainerItems">
        {categories.map((productos) => {
          return (
            <div className="links" key={productos.id}>
              <Link
                to={productos.address}
                className={({ isActive }) =>
                  isActive ? "activeLinkFilter" : "inactiveFilter"
                }
              >
                {productos.text}
              </Link>
            </div>
          );
        })}
      </div>
      <section className="flex-rowww">
        {items?.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </section>
    </>
  );
};
