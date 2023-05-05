<template>
  <div class="container-center-horizontal">
    <form class="enter-password screen" name="form27" action="form27" method="post">
      <h1 class="title-4">{{ title }}</h1>
      <div class="overlap-group-22">
        <input
          class="type-here-7 inter-normal-shuttle-gray-23px"
          name="typehere"
          :placeholder="inputPlaceholder"
          :type="inputType"
          required
        />
      </div>
      <div class="button-container-2">
        <x-button :textButton="xButton1Props.textButton" :className="xButton1Props.className" />
        <x-button :textButton="xButton2Props.textButton" :className="xButton2Props.className" />
      </div>
    </form>
  </div>
</template>

<script>
import xButton from "./xButton";
export default {
  name: "EnterPassword",
  components: {
    xButton,
  },
  props: ["title", "inputType", "inputPlaceholder", "xButton1Props", "xButton2Props"],
};
</script>

<style>
.enter-password {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: 399px;
  padding: 77px 89px;
  width: 860px;
}

.title-4 {
  color: var(--black);
  font-family: var(--font-family-inter);
  font-size: 31px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 11px;
  min-height: 59px;
  width: 351px;
}

.overlap-group-22 {
  align-items: flex-start;
  background-color: var(--alto);
  display: flex;
  height: 69px;
  min-width: 675px;
  padding: 20px 11px;
}

.type-here-7 {
  background-color: transparent;
  border: 0;
  height: 28px;
  letter-spacing: 0;
  line-height: normal;
  padding: 0;
  width: 109px;
}

.type-here-7::placeholder {
  color: #62697199;
}

.button-container-2 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 13px;
  height: 37px;
  margin-right: 7px;
  margin-top: 19px;
  min-width: 285px;
  position: relative;
}
</style>
