import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const ExerciseDetails = () => {
    const { id } = useParams();
    const {data: exercise, error, isPending} = useFetch('http://localhost:8000/exercise/' + id)
    const navigate = useNavigate();

    const handleCLick = () => {
        fetch('http://localhost:8000/exercise/' + id, {
            method: "DELETE"
        }).then(() => {
            navigate('/', {replace: true})
        })
    }
    return ( 
        <div className="exercise-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div>}
            { exercise && (
                <article>
                    <h2>{ exercise.title}</h2>
                    <p>{ exercise.calories} - Calories Burned!</p>
                    <div>{ exercise.time} minutes of training!</div>
                    <button onClick={handleCLick} >Delete Workout</button>
                </article>
            )}
        </div>
     );
}
 
export default ExerciseDetails;