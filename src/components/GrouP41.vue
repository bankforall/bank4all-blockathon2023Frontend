<template>
  <div :class="[`group-41`, className || ``]">
    <div class="ellipse-1-1"></div>
    <div class="ellipse-1-1"></div>
    <div class="ellipse-1-1"></div>
    <div class="ellipse-1-1"></div>
    <div class="ellipse-18"></div>
  </div>
</template>

<script>
export default {
  name: "GrouP41",
  props: ["className"],
};
</script>

<style>
.group-41 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 25px;
  margin-left: 80px;
  margin-top: 56px;
  min-width: 180px;
}

.ellipse-1-1 {
  background-color: var(--alto);
  border-radius: 8px;
  height: 16px;
  width: 16px;
}

.ellipse-18 {
  background-color: var(--black);
  border-radius: 8px;
  height: 16px;
  width: 16px;
}

.group-41.group-36 {
  align-self: unset;
  margin-left: 49.23px;
  margin-top: unset;
}

.group-41.group-36 .ellipse-1-1,
.group-41.group-40 .ellipse-1-1,
.group-41.group-38 .ellipse-1-1,
.group-41.group-36-1 .ellipse-1-1,
.group-41.group-39 .ellipse-1-1,
.group-41.group-37 .ellipse-1-1 {
  background-color: var(--black);
}

.group-41.group-36 .ellipse-18,
.group-41.group-40 .ellipse-18,
.group-41.group-38 .ellipse-18,
.group-41.group-36-1 .ellipse-18,
.group-41.group-39 .ellipse-18,
.group-41.group-37 .ellipse-18 {
  background-color: var(--alto);
}

.group-41.group-38 {
  align-self: unset;
}

.group-41.group-37 {
  align-self: unset;
  margin-top: 765px;
}

.group-41.group-36-1 {
  margin-left: 52px;
  margin-top: unset;
}

.group-41.group-39 {
  margin-top: 19px;
}
</style>
