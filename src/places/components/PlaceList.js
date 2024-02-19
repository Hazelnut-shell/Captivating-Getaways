import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';
import Button from '../../shared/components/UIElements/Button';

const PlaceList = props => {
  const placeListClass = "w-11/12 max-w-2xl p-0 mx-auto my-4 list-none";

  if (props.items.length === 0) {
    return (
      <div className={`${placeListClass} center text-center`}>
        <Card className="p-4">
          <h2>No places found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className={placeListClass}>
      {props.items.map(place => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
          onDelete={props.onDeletePlace}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
