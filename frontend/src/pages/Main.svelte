<script>
    import PaddlesIcon from "../Components/SVGs/PaddlesIcon.svelte";
    import {clickOutside} from '../Components/REPL/clickOutside.js';
    import {fly} from 'svelte/transition';
    import RegisterModal from "../Components/Modals/RegisterModal.svelte";

    let showLoginForm = false;
    let showRegisterForm = false;
</script>

<!-- component -->
<main class="grid h-screen place-items-center relative bg-gradient-to-r from-yellow-400 to-yellow-500">
    <div class="absolute h-4/5 w-9/12 transform bg-gray-100 rounded-full overflow-hidden shadow-xl">
        <div class="absolute h-screen w-96 transform rotate-12 bg-yellow-500 bottom-0 -left-40"></div>
        <div class="absolute h-screen w-96 transform rotate-12 bg-yellow-400 top-0 -right-40"></div>
    </div>
    <div class="relative h-96 w-96">
        <div class="card bg-cyan-400 shadow-md inline-block w-96 h-96 rounded-3xl absolute bottom-0 transform -rotate-12"></div>
        <div class="card bg-indigo-400 shadow-lg inline-block w-96 h-96 rounded-3xl absolute bottom-0 transform -rotate-6"></div>
        <div class="card bg-pink-500 shadow-lg inline-block w-96 h-96 rounded-3xl absolute bottom-0 transform rotate-6"></div>
        <div class="card bg-white transition shadow-xl w-96 h-96 rounded-3xl absolute bottom-0 z-10 flex items-center place-items-center justify-center">
            <div>
                <div class="flex mb-4 items-center">
                    <h1 class="text-4xl">Pinponelo</h1>
                    <PaddlesIcon/>
                </div>
                <button class="bg-blue-500 text-white font-bold text-4xl py-8 px-4 border-b-4 hover:border-b-2 hover:border-t-2 border-blue-700 hover:border-blue rounded w-full"
                        on:click={()=>showLoginForm = !showLoginForm}
                >
                    JUGAR
                </button>
                <!-- Modal Background -->
                {#if showLoginForm}
                    <div transition:fly="{{ y: 300, duration: 1000 }}"
                         use:clickOutside on:click_outside={() => showLoginForm=false}
                         class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                        <!-- Modal -->
                        <RegisterModal/>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</main>