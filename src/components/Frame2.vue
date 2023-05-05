<template>
  <div :class="[`frame-2`, className || ``]">
    <div class="ellipse"></div>
    <div class="name-5">{{ name1 }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame2",
  props: ["name1", "className"],
};
</script>

<style>
.frame-2 {
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  width: fit-content;
}

.ellipse {
  background-color: var(--alto);
  border-radius: 23.5px/22.5px;
  height: 45px;
  min-width: 47px;
  position: relative;
}

.name-5 {
  height: 15px;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: 50px;
}

.frame-2.frame-4 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1px;
  position: relative;
  width: fit-content;
}
</style>
