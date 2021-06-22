import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  return (
    <ul className={classes.list}>

      {/* map is a built in method that allows you to execute a function on every elemnet in the array 
      (in this case, meetups, which has DUMMY_DATA set to it ), and returns the transformed data in an array */}
      {props.meetups.map((meetup) => ( // meetup is just a variable name for elements in dummy_data. can be monkey

        //creating properties to be imported and used in MeetupItem.js. for every element in DUMMY_DATA, create a component for it w these properties
        <MeetupItem 
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;