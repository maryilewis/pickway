/**
 * List of node summaries.
 * Click on a node summary to edit that node.
 * Nodes that can't be reached might be highlighted, if I can be bothered.
 * Link to get the code for a game on the computer, to be loaded later
 */

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Story } from "../types/Story";
import * as StoryService from '../services/StoryService';

interface StoryOverviewProps {
	story: Story
};

export default function StoryOverview({story}: StoryOverviewProps) {
	let navigate = useNavigate();
	function addNode() {
		const newNode = StoryService.addStoryNode();
		navigate(`/node/edit/${newNode.id}`);
	};
 	const nodeList = story.nodes.map((node) =>
		<li><Link to={`/node/edit/${node.id}`}>{node.title}</Link></li>
	);
	return (
	  <div>
		<p>This is the story overview page.</p>
		<h2>Nodes</h2>
		<ul>
			{nodeList}
		</ul>

		<button onClick={addNode}>Add node</button>
	  </div>
	);
  }