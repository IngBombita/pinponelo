import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Ping Pong Elo'
	}
});

export default app;