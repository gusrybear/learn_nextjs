// our-domain.com/$meetupId
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?cs=srgb&dl=pexels-pixabay-533769.jpg&fm=jpg"
      title="A First Meetup"
      address="Some Address"
      description="This is a first meetup!"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?cs=srgb&dl=pexels-pixabay-533769.jpg&fm=jpg",
        id: meetupId,
        title: "A First Meetup",
        address: "Some Address",
        description: "This is a first meetup!",
      },
    },
  };
}

export default MeetupDetails;
