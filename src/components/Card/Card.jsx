import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PropTypes from 'prop-types';
import { useState } from 'react';


const Card = ({ card }) => {
    const [data, setData] = useState([]);
    console.log(data);

    const { id, recipe_name, short_description, ingredients, preparing_time, calories, recipe_image, } = card;

    const handleAddNewTodo = () => {
        toast('Already exist');

        const newData = { recipe_name, preparing_time, calories };
        setData([...data, newData]);
    }

    return (
        <div className='border-2 rounded-lg mx-auto w-[350px] p-4 space-y-1'>
            <img className='w-[330px] h-[200px] rounded-lg' src={recipe_image} alt={`picture of the title ${recipe_image}`} />
            <h2 className='text-xl font-semibold text-[#282828]'>{recipe_name}</h2>
            <p className='h-[100px] text-[16px] text-[#878787]'>{short_description}</p> <hr />
            <div className='h-[150px]'>
                <h4 className='font-bold'>Ingredients: <span>6</span></h4>
                <ul className='list-disc ml-6 mt-2 text-gray-400 text-sm font-semibold'>
                    <li>{ingredients[0]}</li>
                    <li>{ingredients[1]}</li>
                    <li>{ingredients[2]}</li>
                    <li>{ingredients[3]}</li>
                </ul>
            </div><hr />
            <div className='flex gap-4 py-2 text-sm text-[#282828ce]'>
                <p><i class="fa-regular fa-clock"></i> <span>{preparing_time}</span> minutes</p>
                <p><i class="fa-solid fa-fire"></i> <span>{calories}</span> calories</p>
            </div>

            <button onClick={() => handleAddNewTodo(recipe_name, preparing_time, calories)} className='btn bottom-4 text-lg font-bold left-4 rounded-[30px] hover:text-white text-black bg-[#0BE58A] border-0'>Want to Cook</button>
            <ToastContainer />
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired
}

export default Card;