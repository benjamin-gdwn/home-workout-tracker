import useFetch from "./useFetch";
import ExerciseList from "./ExerciseList";

const Home = () => {
     const {data, isPending, error} = useFetch('http://localhost:8000/exercise');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending &&<div>Loading...</div>}
            {data &&<ExerciseList workouts={data} title="All Workouts" />}
            {/* {exercise &&<ExerciseList workouts={exercise.filter((exercise) => exercise.time >15)} title="Workouts longer than 15 mins" handleDelete={handleDelete}/>} */}
            <h3> Total Calories Burned this week: </h3>
        </div>
     );
}
 
export default Home;