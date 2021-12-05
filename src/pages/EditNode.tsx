/**
 * Node title
 * Pages array (any number)
 * Decision title
 * Decistion array: text, and the node that comes next
 * Save using Story Service
 */

import React from "react";
import {
	useParams,
  } from "react-router-dom";
  import * as StoryService from '../services/StoryService';

// pass in node object
export default function EditNode() {
	let { nodeId } = useParams();
	console.log("this is nodeId", nodeId);
	const [node, setNodeState] = React.useState(StoryService.getStoryNode(parseInt(nodeId)));
	console.log('this is node', node);
	const handleInputChange = (event) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;
	
		console.log(name + ' is ' + value);

		node[name] = value;
		setNodeState((prevState) => {
			return Object.assign(prevState, { [name]: value });
		});
	}
	const addPage = () => {
		setNodeState((prevState) => {
			prevState.pages.push({
				text: ""
			});
			return prevState;
		});
	};
	const updatePage = (event, index) => {
		console.log("a page changed", index, event.target.value);
		node.pages[index] = event.target.value;
		const newNode = node;
		setNodeState(newNode);
	}

	const removePage = (index: number) => {
		node.pages.splice(index, 1);
		const newNode = node;
		setNodeState(newNode);
	};


	return (
	  <div>
		<h1>Edit Node</h1>
		<p>This is the edit node page. Each node has a single decision at the end. it can be one or more pages long.</p>
		<form>

			<label>
				Node Title
				<input
					name="title"
					type="text"
					value={node?.title}
					onChange={handleInputChange}
				/>
			</label>
			<h2>Pages</h2>
			{
				node.pages.map((page,index) =>
					<li key={index}>
						<label>
							Page {index}
							<textarea
								name={`page${index}`}
								value={page.text}
								onChange={(event) => updatePage(event, index)}></textarea>
						</label>
						<input type="button" onClick={() => removePage(index)} value="Remove Page" />
					</li>
				)
			}
			<input type="button" value="add page" onClick={addPage} />
			<h2>Decision</h2>
			<label htmlFor="prompt">Decision Prompt</label>
			<input name="prompt" />
			<h3>Options</h3>
			<label htmlFor="option1">Option 1</label>
			<input name="option1" />
			<label htmlFor="result1">Following Node 1</label>
			<select>
				<option>Next node</option>
			</select>
			<input type="button" value="add option" />
			<input type="submit" value="save changes" />
		</form>
	  </div>
	);
  }
