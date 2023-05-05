<template>
  <div class="container-center-horizontal">
    <form class="frame-1-2-1 screen" name="form32" action="form32" method="post">
      <type-here :inputType="submitProps.inputType" :inputPlaceholder="submitProps.inputPlaceholder" />
      <div class="overlap-group-28">
        <rectangl-e1 />
        <submi-t :submi-t="submitProps2.submi-t" />
      </div>
    </form>
  </div>
</template>

<script>
import TypeHere from "./TypeHere";
import RectanglE1 from "./RectanglE1";
import SubmiT from "./SubmiT";
export default {
  name: "FrameT1",
  components: {
    TypeHere,
    Rectangle1,
    Submit,
  },
  props: ["submitProps", "submitProps2"],
};
</script>

<style>
.frame-1-2-1 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 404px;
  padding: 50px 43px;
  position: relative;
  width: 616px;
}

.overlap-group-28 {
  height: 31px;
  position: relative;
  width: 108px;
}
</style>
