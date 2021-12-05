/**
 * Story
 * Node
 * Page
 * Choice
 */

export interface Story {
	 title: string;
	 nodes: StoryNode[];
 };

 export interface StoryNode {
	 id: number;
	 title: string;
	 pages: Page[];
	 decisionPrompt: string;
	 choices: Choice[];
 }

 export interface Page {
	 text: string;
 }

 export interface Choice {
	text: string;
	outcome: number; // ID of the next node
 }