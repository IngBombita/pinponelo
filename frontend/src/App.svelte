<script>
	import { Router, Link, Route } from "svelte-routing";
	import Positions from "./pages/Positions.svelte";

	export let url = "";
</script>

<Router url="{url}">
	<nav>
		<Link to="/">Home</Link>
		<Link to="about">About</Link>
		<Link to="blog">Blog</Link>
	</nav>
	<div>
		<Route path="/"><Positions /></Route>
	</div>
</Router>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>