<template>
  <form class="biding-1 screen" name="form29" action="form29" method="post">
    <div class="biding-2">
      <div class="overlap-group1-13">
        <div class="overlap-group-23">
          <div class="my-biding inter-normal-black-23px">{{ myBiding }}</div>
        </div>
        <img
          class="line-22-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/64529cea0646d076584d8be4/img/line-22-1.svg"
          alt="Line 22"
        />
        <div class="frame-38 inter-normal-nobel-23px">
          <div class="min-0">{{ min0 }}</div>
          <div class="name-7">{{ name }}</div>
        </div>
        <img
          class="rectangle-177"
          src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/64529cea0646d076584d8be4/img/rectangle-177.svg"
          alt="Rectangle 177"
        />
        <div class="baht-9">{{ baht }}</div>
        <div class="text-26 inter-normal-black-23px">{{ text26 }}</div>
        <div class="address-12">{{ address }}</div>
        <router-link to="/inroom">
          <div class="frame-39">
            <x-button :textButton="xButton1Props.textButton" :className="xButton1Props.className" /></div
        ></router-link>
      </div>
      <x-button :textButton="xButton2Props.textButton" :className="xButton2Props.className" />
    </div>
  </form>
</template>

<script>
import xButton from "./xButton";
export default {
  name: "Biding",
  components: {
    xButton,
  },
  props: ["myBiding", "min0", "name", "baht", "text26", "address", "xButton1Props", "xButton2Props"],
};
</script>

<style>
.biding-1 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  width: 638px;
}

.biding-2 {
  background-color: var(--white);
  height: 340px;
  overflow: hidden;
  position: relative;
  width: 638px;
}

.overlap-group1-13 {
  height: 340px;
  left: 0;
  position: absolute;
  top: 0;
  width: 646px;
}

.overlap-group-23 {
  align-items: flex-start;
  background-color: var(--concrete);
  display: flex;
  height: 340px;
  left: 0;
  min-width: 638px;
  padding: 14px 29px;
  position: absolute;
  top: 0;
}

.my-biding {
  letter-spacing: 0;
  line-height: normal;
  min-height: 39px;
  width: 244px;
}

.line-22-1 {
  height: 27px;
  left: 39px;
  position: absolute;
  top: 105px;
  width: 569px;
}

.frame-38 {
  align-items: flex-start;
  display: flex;
  gap: 425px;
  left: 32px;
  position: absolute;
  top: 64px;
  width: fit-content;
}

.min-0 {
  height: 39px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: 61px;
}

.name-7 {
  height: 39px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: 128px;
}

.rectangle-177 {
  height: 47px;
  left: 52px;
  position: absolute;
  top: 178px;
  width: 549px;
}

.baht-9 {
  color: var(--bombay);
  font-family: var(--font-family-inter);
  font-size: var(--font-size-xs);
  font-weight: 400;
  left: 63px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 188px;
  width: 60px;
}

.text-26 {
  left: 518px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 188px;
  width: 74px;
}

.address-12 {
  color: var(--black);
  font-family: var(--font-family-inter);
  font-size: 14px;
  font-weight: 400;
  left: 406px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: right;
  top: 225px;
  width: 186px;
}

.frame-39 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
  left: 351px;
  padding: 10px;
  position: absolute;
  top: 268px;
  width: fit-content;
}

#overlay-biding {
  align-items: center;
  background-color: #00000000;
  justify-content: center;
}
</style>
