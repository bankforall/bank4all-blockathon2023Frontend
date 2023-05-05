<template>
  <input
    class="type-here-11 inter-normal-black-12px"
    name="typehere"
    :placeholder="inputPlaceholder"
    :type="inputType"
    required
  />
</template>

<script>
export default {
  name: "TypeHere",
  props: ["inputType", "inputPlaceholder"],
};
</script>

<style>
.type-here-11,
.type-here-12 {
  background-color: transparent;
  border: 0;
  height: 15px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 2px;
  padding: 0;
  width: 57px;
}

.type-here-11::placeholder,
.type-here-12::placeholder {
  color: #00000099;
}
</style>
