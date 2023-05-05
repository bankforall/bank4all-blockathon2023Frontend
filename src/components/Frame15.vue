<template>
  <div :class="[`frame-15`, className || ``]">
    <div class="round">{{ round1 }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame15",
  props: ["round1", "className"],
};
</script>

<style>
.frame-15 {
  align-items: flex-start;
  background-color: var(--alto);
  display: flex;
  gap: 10px;
  padding: 8px 21px;
  position: relative;
  width: 94px;
}

.round {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-15.frame-16 {
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  padding: 8px 7px;
}

.frame-15.frame-17 {
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  padding: 8px 12px;
}

.frame-15.frame-18 {
  justify-content: center;
  margin-left: 8px;
  padding: 8px 11px;
}

.frame-15.frame-19 {
  justify-content: center;
  margin-left: 9px;
  padding: 8px 15px;
}

.frame-15.frame-20 {
  justify-content: center;
  margin-left: 10px;
  padding: 8px 12px;
}

.frame-15.frame-21 {
  justify-content: center;
  margin-left: 9px;
  padding: 8px 13px;
}

.frame-15.frame-22 {
  justify-content: center;
  margin-left: 9px;
  padding: 8px 12px;
}

.frame-15.frame-23 {
  background-color: var(--concrete);
  justify-content: center;
  margin-left: 9px;
  padding: 8px 14px;
}

.frame-15.frame-25 {
  background-color: var(--concrete);
  justify-content: center;
  margin-left: 10px;
  padding: 8px 0px;
}
</style>
