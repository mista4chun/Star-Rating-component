import StarRating from './StarRating';

function App() {
  return (
    <div>
      <StarRating maxRating={10} defaultRating={3} />
      <StarRating
        maxRating={5}
        color="red"
        messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
      />
      <StarRating maxRating={5} color="blue" size={48} />
    </div>
  );
}

export default App;
