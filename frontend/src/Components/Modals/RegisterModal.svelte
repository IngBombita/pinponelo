<script>
    import PinponeloApiClient from "../../Services/PinponeloApiClient";
    let form = {
        email: '',
        password: '',
        username: ''
    };

    let submitLoginForm = async () => {
        console.log(form)
        let client = new PinponeloApiClient();
        let response = await client.register(form)
        console.log(response)
    };
</script>
<div class="font-sans">
    <div class="relative flex flex-col sm:justify-center items-center bg-gray-100 ">
        <div class="relative sm:max-w-sm w-full">
            <div class="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div class="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
            <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                <label class="block mt-3 text-sm text-gray-700 text-center font-semibold">
                    Registrate
                </label>
                <div>
                    <input type="text" placeholder="Username"
                           bind:value={form.username}
                           class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
                </div>

                <div class="mt-7">
                    <input type="email" placeholder="E-mail"
                           bind:value={form.email}
                           class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
                </div>

                <div class="mt-7">
                    <input type="password" placeholder="Contraseña"
                           bind:value={form.password}
                           class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
                </div>

                <div class="mt-7">
                    <button class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner
                    focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                    on:click|preventDefault={submitLoginForm}>
                        Registrar
                    </button>
                </div>

                <div class="flex mt-7 items-center text-center">
                    <hr class="border-gray-300 border-1 w-full rounded-md">
                    <label class="block font-medium text-sm text-gray-600 w-full">
                        Registrate con
                    </label>
                    <hr class="border-gray-300 border-1 w-full rounded-md">
                </div>

                <div class="flex mt-7 justify-center w-full">
                    <button class="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">

                        Facebook
                    </button>

                    <button class="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">

                        Google
                    </button>
                </div>

                <div class="mt-7">
                    <div class="flex justify-center items-center">
                        <label class="mr-2">¿Ya tienes una cuenta?</label>
                        <a href="#"
                           class=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            Iniciar sesion
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>