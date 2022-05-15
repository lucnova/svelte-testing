import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Alan',
		age: 24,
		jobTitle: 'Front End Dev',
		description: 'Hello!',
		avatarURL: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
	}
});

export default app;