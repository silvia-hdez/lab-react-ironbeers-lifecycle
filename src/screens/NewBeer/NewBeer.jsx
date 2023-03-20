import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormControl from '../../components/misc/FormControl/FormControl';
import Input from '../../components/misc/Input/Input';
import NavBar from '../../components/misc/NavBar/NavBar';
import { createBeer } from '../../services/BeerService';
import './NewBeer.css'

const INITAL_VALUES = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
    id: ''
}

const NewBeer = () => {
    const navigate = useNavigate()

    const [values, setValues] = useState(INITAL_VALUES)

    const onSubmit = (event) => {
        event.preventDefault()
        
        createBeer(values)
            .then((createdBeer)=>{
                console.log(createdBeer)
                console.log(values)
                navigate(`/beers/${createdBeer.id}`)
            })
            .catch()
    }

    const onChange = (event) => {
        const {value, name, type} = event.target

        setValues({
            ...values,
            [name]: type === 'number' ? Number(value) : value
        })
    }


    return (
        <div className='NewBeer'>
            <NavBar />
            <form onSubmit={onSubmit}>
                <FormControl htmlFor="name" text="Name" />
                <Input id="name" name="name"
                    value={values.name} onChange={onChange} type="text"/>
                
                <FormControl htmlFor="tagline" text="Tagline"/>
                <Input id="tagline" name="tagline"
                    value={values.tagline} onChange={onChange} type="text"/>

                <FormControl htmlFor="description" text="Description"/>
                <Input id="description" name="description"
                    value={values.description} onChange={onChange} type="textarea"/>

                <FormControl htmlFor="first_brewed" text="First Brewed"/>
                <Input id="first_brewed" name="first_brewed"
                    value={values.first_brewed} onChange={onChange} type="text"/>

                <FormControl htmlFor="brewers_tips" text="Brewers Tips"/>
                <Input id="brewers_tips" name="brewers_tips"
                    value={values.brewers_tips} onChange={onChange} type="text" rows={4} />

                <FormControl htmlFor="attenuation_level" text="Attenuation Level"/>
                <Input id="attenuation_level" name="attenuation_level" 
                    value={values.attenuation_level} onChange={onChange} type="number" min={0}/>

                <FormControl htmlFor="contributed_by" text="Contributed By"/>
                <Input id="contributed_by" name="contributed_by" 
                    value={values.contributed_by} onChange={onChange} type="text"/>

                <button type='submit'>ADD NEW</button>
            </form>
        </div>
    );
};

export default NewBeer;