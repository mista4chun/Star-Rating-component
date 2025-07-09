import StarRating from "./StarRating"

function App() {
  return (
    <div>
      <StarRating maxRating={10} />
      <StarRating maxRating={5} color='red' />
      <StarRating maxRating={5} color="blue" size={48} />
    </div>
  )
}

export default App
