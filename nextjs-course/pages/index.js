import MeetupList from "../components/meetups/MeetupList";

const DUMMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?cs=srgb&dl=pexels-pixabay-533769.jpg&fm=jpg",
    address: "Some Address",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?cs=srgb&dl=pexels-pixabay-533769.jpg&fm=jpg",
    address: "Some Address",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = contenxt.res;
//   //fetch data from an API
//   return {
//     props: {
//       meetups: DUMMMY_MEETUPS,
//     }
//   };
// }

export async function getStaticProps() {
  //fetch data from an API
  return {
    props: {
      meetups: DUMMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
