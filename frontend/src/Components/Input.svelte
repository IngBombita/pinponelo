<style>
    label {
        top: 0%;
        transform: translateY(-50%);
        font-size: 11px;
        color: rgba(17, 24, 39, 1);
    }

    .empty input:not(:focus) + label {
        top: 50%;
        transform: translateY(-50%);
        font-size: 14px;
    }

    input:not(:focus) + label {
        color: rgba(70, 70, 70, 1);
    }

    input {
        border-width: 1px;
    }

    input:focus {
        outline: none;
        border-color: rgba(17, 24, 39, 1);
    }
</style>

<script>
    export let value, inputName, type;
</script>

<div class="relative h-12 input-component w-full mt-10" class:empty={!value}>
    <input
            autofocus
            class="h-full w-full border-gray-300 px-2 transition-all border-blue rounded-sm"
            id="username"
            name="name"
            type={type}
    />
    <label for="username" class="absolute left-2 transition-all bg-white px-1">
        {inputName}
    </label>
</div>