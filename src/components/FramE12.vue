<template>
  <div class="container-center-horizontal">
    <form class="frame-12-1 screen" name="form33" action="form33" method="post">
      <type-here :inputType="submitProps.inputType" :inputPlaceholder="submitProps.inputPlaceholder" />
      <div class="overlap-group-29">
        <a href="javascript:SubmitForm('form33')"> <div class="rectangle-1-3"></div></a
        ><submi-t :submi-t="submitProps2.submi-t" />
      </div>
    </form>
  </div>
</template>

<script>
import TypeHere from "./TypeHere";
import SubmiT from "./SubmiT";
export default {
  name: "FramE12",
  components: {
    TypeHere,
    Submit,
  },
  props: ["submitProps", "submitProps2"],
};
</script>

<style>
.frame-12-1 {
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

.overlap-group-29 {
  height: 31px;
  position: relative;
  width: 108px;
}

.rectangle-1-3 {
  background-color: var(--alto);
  cursor: pointer;
  height: 31px;
  left: 0;
  position: absolute;
  top: 0;
  width: 108px;
}
</style>
