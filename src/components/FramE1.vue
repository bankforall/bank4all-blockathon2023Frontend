<template>
  <div class="container-center-horizontal">
    <div class="frame-1-2 screen">
      <img class="checkmark-8" :src="checkmark" alt="checkmark" /><img class="ex" :src="ex" alt="ex" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FramE1",
  props: ["checkmark", "ex"],
};
</script>

<style>
.frame-1-2 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  gap: 81px;
  height: 388px;
  padding: 147px 168px;
  width: 583px;
}

.checkmark-8 {
  height: 78px;
  object-fit: cover;
  width: 82px;
}

.ex {
  height: 71px;
  margin-top: 12px;
  object-fit: cover;
  width: 57px;
}
</style>
