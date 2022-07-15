import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');
    const [calorie, setCalorie] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const workout = { title, time, calorie };
        setIsPending(true);

        
        fetch('http://localhost:8000/exercise', {
            method: 'POST',
            headers: { "Content-type": "application/json"},
            body: JSON.stringify(workout)
        } ).then(() => {
            console.log('new workout added');
            setIsPending(false);
            navigate('/', {replace: true})
        })
    }

    return ( 
        <div className="create">
            <h2>Add a new workout</h2>
            <form onSubmit={handleSubmit}>
                <label> Workout Title:</label>
                <input 
                    type="text" 
                    required 
                    value={title} 
                    onChange={(event) => setTitle(event.target.value)}
                    />

                <label> Workout Time:</label>
                <input 
                    type="number" 
                    required 
                    value={time} 
                    onChange={(event) => setTime(event.target.value)}
                />
                <label>Calories Burned:</label>
                <input type="number" 
                    required
                    value={calorie} 
                    onChange={(event) => setCalorie(event.target.value)}
                />
                {!isPending && <button>Add Workout</button>}
                {isPending && <button disabled>Adding workout</button>}

                <p>{title}</p>
                <p>Workout Time: {time}</p>
                <p>{calorie} Calories Burned!</p>
            </form>
        </div>
     );
}
 
export default Create;