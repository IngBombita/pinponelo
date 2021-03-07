<script>
    import {Router, Link, Route} from "svelte-routing";
    import Positions from "./pages/Positions.svelte";
    import Main from "./pages/Main.svelte";

    export let url = "";
</script>

<Router url="{url}">
    <!-- component -->
    <nav class="fixed z-10" role="navigation">
        <div class="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
            <div class="ml-auto md:hidden">
                <button class="flex items-center px-3 py-2 border rounded" type="button">
                    <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>
            <div class="w-full md:w-auto md:flex-grow md:flex md:items-center">
                <ul class="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">
                    <li>
                        <Link class="bg-blue-500 text-white font-bold text-xl py-2 px-4 border-b-4 hover:border-b-2 hover:border-t-2 border-blue-700 hover:border-blue rounded w-6/12 mr-2" to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link class="bg-blue-500 text-white font-bold text-xl py-2 px-4 border-b-4 hover:border-b-2 hover:border-t-2 border-blue-700 hover:border-blue rounded w-6/12 mr-2" to="/profile">Perfil</Link>
                    </li>
                    <li>
                        <Link class="bg-blue-500 text-white font-bold text-xl py-2 px-4 border-b-4 hover:border-b-2 hover:border-t-2 border-blue-700 hover:border-blue rounded w-6/12 mr-2" to="/positions">Posiciones</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <Route path="/positions">
        <Positions/>
    </Route>
    <Route path="/">
        <Main/>
    </Route>
</Router>

<style global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>