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
    let value;
</script>

<div class="relative h-12 input-component w-full mt-10" class:empty={!value}>
    <input
            id="username"
            type="text"
            name="name"
            class="h-full w-full border-gray-300 px-2 transition-all border-blue rounded-sm"
            autofocus
    />
    <label for="username" class="absolute left-2 transition-all bg-white px-1">
        Player username
    </label>
</div>