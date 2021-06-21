<script>
    import {onMount} from 'svelte';
    import axios from "axios";
    import PlayerSearcherInput from "../Components/PlayerSearcherInput.svelte";

    let profile = {};
    let isSearching = false;
    onMount(async () => {
        let payload = await axios.get(`http://localhost:3333/me`, {
            auth: {
                username: 'eduardojulioculasso@gmail.com',
                password: '12345678'
            }
        });
        profile = payload.data
        console.log(profile)
    });
</script>

<!-- component -->
<div class="grid h-screen place-items-center relative bg-gradient-to-r from-yellow-400 to-yellow-500">
    <div class="absolute h-4/5 w-9/12 transform bg-gray-100 rounded-full overflow-hidden shadow-xl">
        <div class="absolute h-screen w-96 transform rotate-12 bg-yellow-500 bottom-0 -left-40"></div>
        <div class="absolute h-screen w-96 transform rotate-12 bg-yellow-400 top-0 -right-40"></div>
    </div>
    <div class="absolute h-full w-full flex items-center">
        <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden mx-auto text-gray-700">
            <img class="w-full h-56 object-cover object-center"
                 src="{profile.avatar ?? 'https://cdn3.iconfinder.com/data/icons/sports-part-2/112/29-sports-1_table-tennis-2-512.png'}"
                 alt="avatar"/>
            <div class="flex items-center px-6 py-3 bg-gray-900">
                <svg
                        viewBox="0 0 32 32" class="h-6 w-6 fill-current">
                    <path d="M29,6h-5V5c0-0.6-0.4-1-1-1H9C8.4,4,8,4.4,8,5v1H3C2.4,6,2,6.4,2,7v2.7c0,4.4,3.4,8,7.8,8.2c0.8,1.1,1.9,1.9,3.2,2.4V23h-1
	c-1.7,0-3,1.3-3,3v3c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1v-3c0-1.7-1.3-3-3-3h-1v-2.6c1.3-0.5,2.4-1.4,3.2-2.4
	c4.3-0.3,7.8-3.8,7.8-8.2V7C30,6.4,29.6,6,29,6z M4,9.7V8h4v5c0,1,0.2,1.9,0.5,2.7C5.9,15,4,12.6,4,9.7z M28,9.7
	c0,2.8-1.9,5.2-4.5,6C23.8,14.9,24,14,24,13V8h4V9.7z"/>
                </svg>
                <h1 class="mx-3 text-white font-semibold text-lg">{profile.elo} puntos</h1>
            </div>
            <div class="py-4 px-6">
                <h1 class="text-2xl font-semibold text-gray-800">{profile.username} #{profile.tag}</h1>
                <p class="py-2 text-lg text-gray-700">{profile.description}</p>
                <div class="flex items-center mt-4 text-gray-700">
                    <svg class="h-6 w-6 fill-current" viewBox="0 0 20 20">
                        <path d="M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z"></path>
                    </svg>
                    <h1 class="px-2 text-sm">{profile.friends} Friends</h1>
                </div>
                <div class="flex items-center mt-4 text-gray-700">
                    <svg class="h-6 w-6 fill-current" viewBox="0 0 20 20">
                        <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
                    </svg>
                    <h1 class="px-2 text-sm">{profile.team}</h1>
                </div>
                <div class="flex items-center mt-4 text-gray-700">
                    <svg class="h-6 w-6 fill-current" viewBox="0 0 20 20">
                        <path d="M16.469,8.924l-2.414,2.413c-0.156,0.156-0.408,0.156-0.564,0c-0.156-0.155-0.156-0.408,0-0.563l2.414-2.414c1.175-1.175,1.175-3.087,0-4.262c-0.57-0.569-1.326-0.883-2.132-0.883s-1.562,0.313-2.132,0.883L9.227,6.511c-1.175,1.175-1.175,3.087,0,4.263c0.288,0.288,0.624,0.511,0.997,0.662c0.204,0.083,0.303,0.315,0.22,0.52c-0.171,0.422-0.643,0.17-0.52,0.22c-0.473-0.191-0.898-0.474-1.262-0.838c-1.487-1.485-1.487-3.904,0-5.391l2.414-2.413c0.72-0.72,1.678-1.117,2.696-1.117s1.976,0.396,2.696,1.117C17.955,5.02,17.955,7.438,16.469,8.924 M10.076,7.825c-0.205-0.083-0.437,0.016-0.52,0.22c-0.083,0.205,0.016,0.437,0.22,0.52c0.374,0.151,0.709,0.374,0.997,0.662c1.176,1.176,1.176,3.088,0,4.263l-2.414,2.413c-0.569,0.569-1.326,0.883-2.131,0.883s-1.562-0.313-2.132-0.883c-1.175-1.175-1.175-3.087,0-4.262L6.51,9.227c0.156-0.155,0.156-0.408,0-0.564c-0.156-0.156-0.408-0.156-0.564,0l-2.414,2.414c-1.487,1.485-1.487,3.904,0,5.391c0.72,0.72,1.678,1.116,2.696,1.116s1.976-0.396,2.696-1.116l2.414-2.413c1.487-1.486,1.487-3.905,0-5.392C10.974,8.298,10.55,8.017,10.076,7.825"></path>
                    </svg>
                    <h1 class="px-2 text-sm">{profile.email}</h1>
                </div>
                {#if isSearching}
                    <PlayerSearcherInput on:focusout={() => isSearching = false}/>
                {:else }
                    <button
                            class="flex items-center justify-center h-12 px-6 bg-gray-900 text-white w-full mt-10 rounded"
                            on:click={() => isSearching = true}
                    >
                        <svg class="h-6 w-6 text-white fill-current mr-4 " viewBox="0 0 20 20">
                            <path d="M10,6.978c-1.666,0-3.022,1.356-3.022,3.022S8.334,13.022,10,13.022s3.022-1.356,3.022-3.022S11.666,6.978,10,6.978M10,12.267c-1.25,0-2.267-1.017-2.267-2.267c0-1.25,1.016-2.267,2.267-2.267c1.251,0,2.267,1.016,2.267,2.267C12.267,11.25,11.251,12.267,10,12.267 M18.391,9.733l-1.624-1.639C14.966,6.279,12.563,5.278,10,5.278S5.034,6.279,3.234,8.094L1.609,9.733c-0.146,0.147-0.146,0.386,0,0.533l1.625,1.639c1.8,1.815,4.203,2.816,6.766,2.816s4.966-1.001,6.767-2.816l1.624-1.639C18.536,10.119,18.536,9.881,18.391,9.733 M16.229,11.373c-1.656,1.672-3.868,2.594-6.229,2.594s-4.573-0.922-6.23-2.594L2.41,10l1.36-1.374C5.427,6.955,7.639,6.033,10,6.033s4.573,0.922,6.229,2.593L17.59,10L16.229,11.373z"></path>
                        </svg>
                        <span>Buscar a un jugador</span>
                    </button>
                {/if}
            </div>
        </div>
    </div>
</div>
