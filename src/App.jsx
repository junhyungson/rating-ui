import Rating from "./components/Rating";
const App = () => {
  return (
    <div>
      <Rating
        heading="different type of rating header here"
        color="red"
        feedbackMessages={["bad", "meh", "ok", "good", "fine"]}
      />
      <Rating heading="another" />
      <Rating />
    </div>
  );
};

export default App;
