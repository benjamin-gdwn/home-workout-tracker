import { Link } from "react-router-dom";
const ExerciseList = (props) => {

    const exercise = props.workouts;
    const header = props.title;
    
    return ( 
        <div className="exercise-list">
            <h2>{header}</h2>
            {exercise.map((exercise) => (
                <div className="exercise-preview" key={exercise.id}>
                    <Link to={`/Workout/${exercise.id}`}>
                    <h3>{exercise.title}</h3>
                    <p>Calories Burned: {exercise.calories}</p>
                    <p>Time: { exercise.time} mins </p>
                    </Link>
                </div>
                
            ))}
        </div>
     );
}
 
export default ExerciseList;