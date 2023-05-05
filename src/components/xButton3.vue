<template>
  <a href="javascript:SubmitForm('form7')">
    <div :class="[`button-21-1`, className || ``]">
      <div class="text-button-4 valign-text-middle inter-bold-black-28px">{{ textButton }}</div>
    </div></a
  >
</template>

<script>
export default {
  name: "xButton3",
  props: ["textButton", "className"],
};
</script>

<style>
.button-21-1 {
  align-items: center;
  background-color: var(--alto);
  border: 3px solid;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  gap: 12px;
  height: 89px;
  justify-content: center;
  padding: 16px 28px;
  position: relative;
  width: 321px;
}

.text-button-4 {
  letter-spacing: 0;
  line-height: 24px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.button-21-1.button-21 .text-button-4 {
  margin-left: -11.5px;
  margin-right: -11.5px;
}
</style>
