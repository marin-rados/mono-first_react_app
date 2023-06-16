import React from 'react';
import './inputs.css';
import List from '../List/List';

export default function Inputs ()
{

    const ul = document.querySelector('ul');
    const input = document.getElementById('name');
    const input2 = document.getElementById('age');

    let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
    itemsArray.forEach(addTask);

    function addTask(text)
    {
        const li = document.createElement('li')
        li.innverValue = text;
        ul.appendChild(li);
    }

    function add(){
        itemsArray.push(input.value);
        itemsArray.push(input2.value);
        if (input.value === "" || input2.value === "") {
            alert("Please provide a value.");
        }
        else {
            localStorage.setItem('items', JSON.stringify(itemsArray));
            addTask(input.value);
            addTask(input2.value);
        }
      }
    
    
    function del(){
        localStorage.clear();
        ul.innerHTML = '';
        itemsArray = [];
      }

    
    return(
        <div class="container">
            <h2>To-Do App</h2>
            <input type="text" id="name" placeholder="First Name"></input>
            <input type="text" id="age" placeholder="Last Name"></input>

            <div>
                <button onclick={add}>Add Item</button>
                <button onclick={del}>Clear all</button>
            </div>


            <List />
        </div>
    )
}