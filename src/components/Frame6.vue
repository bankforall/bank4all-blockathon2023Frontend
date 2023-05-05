<template>
  <div :class="[`frame-3-1`, className || ``]">
    <div class="ellipse-14"></div>
    <div class="name-6">{{ name5 }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame6",
  props: ["name5", "className"],
};
</script>

<style>
.frame-3-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3px;
  position: relative;
  width: fit-content;
}

.ellipse-14 {
  background-color: var(--alto);
  border-radius: 23.5px/23px;
  height: 46px;
  min-width: 47px;
  position: relative;
}

.name-6 {
  height: 15px;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: 50px;
}

.frame-3-1.frame-3 .ellipse-14,
.frame-3-1.frame-5-1 .ellipse-14 {
  border-radius: 23.5px/22.5px;
  height: 45px;
}

.frame-3-1.frame-5,
.frame-3-1.frame-5-1 {
  gap: 4px;
}
</style>
