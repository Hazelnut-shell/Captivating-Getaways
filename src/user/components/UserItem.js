import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";

const UserItem = (props) => {
  return (
    <li className="w-[calc(45%_-_2rem)] m-4 min-w-[17.5rem] group">
      <Card className="p-0">
        <Link
          to={`/${props.id}/places`}
          className="flex h-full w-full items-center bg-[#292929] p-4 text-white no-underline hover:bg-[#ffd900] active:bg-[#ffd900]"
        >
          <div className="mr-4 h-16 w-16">
            <Avatar
              image={`${process.env.REACT_APP_ASSET_URL}/${props.image}`}
              alt={props.name}
            />
          </div>
          <div className="user-item__info">
            <h2 className="mx-0 mb-2 mt-0 text-2xl font-normal text-[#ffd900] group-hover:text-[#292929] group-active:text-[#292929]">
              {props.name}
            </h2>
            <h3 className="m-0 group-hover:text-[#292929] group-active:text-[#292929]">
              {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
