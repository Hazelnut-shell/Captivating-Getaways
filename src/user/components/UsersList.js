import React from "react";

import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card className="p-4">
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="mx-auto my-0 flex w-[90%] max-w-[50rem] list-none flex-wrap justify-center p-0">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places.length}
        />
      ))}
    </ul>
  );
};

export default UsersList;
