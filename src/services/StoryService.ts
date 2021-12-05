/**
 * CRUD for creating/editing the story
 */

import { Story, StoryNode } from "../types/Story";

const getStory = (): Story => {
	return currentStory;
};

const newStory = (): Story => {
	// To do: check for duplicate title
	return {
		title: "New Story",
		nodes: [],
	};
};

const addStoryNode = (): StoryNode => {
	highestNodeIndex += 1;
	const newNode = {
		id: highestNodeIndex,
		title: "New Node",
		pages: [],
		decisionPrompt: "",
		choices: [],
	};
	currentStory.nodes.push(newNode);
	return newNode;
}

const getStoryNode = (nodeId: number): StoryNode => {
	console.log(currentStory.nodes);
	let node;
	try {
		node = currentStory.nodes.find(node => node.id === nodeId);
		if (node) {
			return node;
		} else {
			throw new Error(`Node with ID ${nodeId} not found`);
		}
	} catch (err) {
		console.error(err);
	}

}

const updateStoryNode = (nodeId: number, node: StoryNode): void => {
	const oldNodeIndex = currentStory.nodes.findIndex(node => node.id === nodeId);
	if (oldNodeIndex >= 0) {
		currentStory.nodes[oldNodeIndex] = node;
	} else {
		currentStory.nodes.push(node);
	}
};

const saveStoryToBrowser = () => {

};

const getStoriesFromBrowser = () => {

};

const getStoryString = () => {

};

const getNodeList = (): StoryNode[] => {
	return currentStory.nodes;
}

/**
 * Parses a string.
 * If it is a valid story string, see if the name duplicates a story in browser storage.
 * Later: If it does, ask the user if they want to rename the old story, overwrite the old story with the new one, or cancel.
 * Load the current story state as the new story - update the state - where should that happen from?
 * and immediately save it to browser storage.
 */
const loadStoryFromString = () => {

};

var currentStory: Story = newStory();
var highestNodeIndex = 0;

export {
	getStory,
	newStory,
	addStoryNode,
	getStoryNode,
	updateStoryNode,
	getNodeList,
	saveStoryToBrowser,
	getStoriesFromBrowser,
	getStoryString,
	loadStoryFromString
};