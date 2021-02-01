import React, { useState } from 'react';
import {Input, InputGroup, Button} from 'rsuite';

function Home() {
	const [itemValue, setItemValue] = useState({title: '', desc: ''});
	const [editIndex, setEditIndex] = useState(null);
	const [isSave, setIsSave] = useState(false);
	const [items, setItems] = useState([]);

	const handleNameChange = (value) => {
		setItemValue( p=> ({...p, title: value}));
	}

	const handlePasswordChange = (value) => {
		setItemValue( p=> ({...p, desc: value}));
	}

	const handleItemAdd = () => {
		if(itemValue.name !== '' && itemValue.desc !== '') {
			const data = [...items];
			data.push(itemValue);
			setItems(data);
			setItemValue({title: '', desc: ''});
		}
	}

	const handleItemEdit = (index) => {
		setItemValue(items[index]);
		setEditIndex(index);
		setIsSave(true);
	}

	const handleItemDelete = (index) => {
		const data = [...items];
		data.splice(index, 1);
		setItems(data);
	}

	const handleItemSave = () => {
		const data = items.map((item, index) => index === editIndex? itemValue: item);

		setItems(data);
		setItemValue({title: '', desc: ''});
		setIsSave(false);
	}

	console.log(items);

	return <div>
		<InputGroup>
			<h5>Title</h5>
			<Input onChange={handleNameChange} value={itemValue.title} type="text" />
		</InputGroup>

		<InputGroup>
			<h5>Desc</h5>
			<Input onChange={handlePasswordChange} value={itemValue.desc} />
		</InputGroup>

		{
			!isSave ? 
		<Button appearance="primary" onClick={handleItemAdd}>Add</Button>
		:
		<Button appearance="primary" onClick={handleItemSave}>Save</Button>
		}

		<div>
		<ul>
			{
				items.length !== 0?
				items.map((item, index) => (
					<li key={index}>
						<div>Title: {item.title}</div>
						<div>Description: {item.desc}</div>
						<Button appearance="primary" onClick={() => handleItemEdit(index)}>Edit</Button>
						<Button appearance="primary" onClick={() => handleItemDelete(index)}>Delete</Button>
					</li>))
				:
				<li>No items added</li>
			}
		</ul>
		</div>
	</div>
}

export default Home;