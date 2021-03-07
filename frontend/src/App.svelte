<script>
    import {Router, Link, Route} from "svelte-routing";
    import Positions from "./pages/Positions.svelte";

    export let url = "";
</script>

<Router url="{url}">
    <Route path="/positions">
        <Positions/>
    </Route>
</Router>

<style global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>