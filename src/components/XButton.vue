<template>
  <article :class="[`button-18-1`, className || ``]">
    <div class="text-button-1 valign-text-middle inter-bold-black-20px">{{ textButton }}</div>
  </article>
</template>

<script>
export default {
  name: "XButton",
  props: ["textButton", "className"],
};
</script>

<style>
.button-18-1 {
  align-items: center;
  background-color: var(--alto);
  border: 3px solid;
  border-radius: 8px;
  display: flex;
  gap: 12px;
  justify-content: center;
  padding: 16px 28px;
  position: relative;
  width: 144px;
}

.text-button-1 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -3px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.button-18-1.button-20 {
  align-items: center;
  background-color: var(--alto);
  border: 3px solid;
  border-radius: 8px;
  display: flex;
  gap: 12px;
  justify-content: center;
  padding: 16px 28px;
  position: relative;
  width: fit-content;
}

.button-18-1.button-18-5 .text-button-1,
.button-18-1.button-18-7 .text-button-1 {
  margin-left: -5px;
  margin-right: -5px;
}

.button-18-1.button-18-6 .text-button-1 {
  margin-left: -10.5px;
  margin-right: -10.5px;
}

.button-18-1.button-19 {
  height: 56px;
}

.button-18-1.button-18 .text-button-1 {
  margin-left: -27.5px;
  margin-right: -27.5px;
}
</style>
