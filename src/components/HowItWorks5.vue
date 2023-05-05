<template>
  <div class="how-it-works-5 screen">
    <div class="how-it-works-5-1">
      <div class="cannot-bid valign-text-middle inter-bold-black-29px">{{ cannotBid }}</div>
      <div class="group-35">
        <p class="step-4-withdrawal-th montserrat-bold-black-32px">
          <span class="montserrat-bold-black-32px">{{ spanText1 }}</span
          ><span class="montserrat-normal-black-32px">{{ spanText2 }}</span
          ><span class="span2">{{ spanText3 }}</span>
        </p>
        <div class="overlap-group1">
          <div class="ellipse-container">
            <div class="ellipse-1"></div>
            <img
              class="ellipse-5"
              src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/ellipse-5.svg"
              alt="Ellipse 5"
            />
            <div class="ellipse-9"></div>
            <div class="ellipse-6"></div>
            <div class="ellipse-7"></div>
            <div class="ellipse-10"></div>
            <div class="ellipse-8"></div>
          </div>
          <h1 class="price valign-text-middle inter-bold-black-46px">{{ price }}</h1>
        </div>
        <router-link to="/main">
          <div class="group-32">
            <div class="rectangle-62"></div>
            <div class="rectangle-63"></div></div
        ></router-link>
      </div>
      <grou-p41 />
    </div>
  </div>
</template>

<script>
import GrouP41 from "./GrouP41";
export default {
  name: "HowItWorks5",
  components: {
    Group41,
  },
  props: ["cannotBid", "spanText1", "spanText2", "spanText3", "price"],
};
</script>

<style>
.how-it-works-5 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  width: 1440px;
}

.how-it-works-5-1 {
  align-items: flex-end;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 731px;
  padding: 35px 34.2px;
  position: relative;
  width: 1440px;
}

.cannot-bid {
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  margin-right: 235.77px;
  margin-top: 31px;
  min-width: 151px;
  text-align: center;
  white-space: nowrap;
}

.group-35 {
  align-items: center;
  display: flex;
  margin-top: 19px;
  min-width: 1336px;
}

.step-4-withdrawal-th {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 25.06px;
  min-height: 296px;
  width: 787px;
}

.span2 {
  color: var(--black);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-s);
  font-style: italic;
  font-weight: 400;
}

.overlap-group1 {
  align-self: flex-end;
  height: 515px;
  margin-bottom: 0;
  position: relative;
  width: 468px;
}

.ellipse-container {
  height: 515px;
  left: 0;
  position: absolute;
  top: 0;
  width: 468px;
}

.ellipse-1 {
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--black);
  border-radius: 204.93px;
  height: 410px;
  left: 32px;
  position: absolute;
  top: 53px;
  width: 410px;
}

.ellipse-5 {
  height: 105px;
  left: 0;
  position: absolute;
  top: 105px;
  width: 105px;
}

.ellipse-9 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 0;
  position: absolute;
  top: 305px;
  width: 105px;
}

.ellipse-6 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 184px;
  position: absolute;
  top: 410px;
  width: 105px;
}

.ellipse-7 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 363px;
  position: absolute;
  top: 305px;
  width: 105px;
}

.ellipse-10 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 363px;
  position: absolute;
  top: 105px;
  width: 105px;
}

.ellipse-8 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 184px;
  position: absolute;
  top: 0;
  width: 105px;
}

.price {
  height: 24px;
  left: 181px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 236px;
  white-space: nowrap;
}

.group-32 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: 45px;
  margin-top: 17.53px;
  min-height: 86px;
  padding: 19.9px 0;
  width: 32px;
}

.rectangle-62 {
  background-color: var(--mist-gray);
  height: 7px;
  margin-left: -10.31px;
  margin-top: 2px;
  transform: rotate(57.94deg);
  width: 52px;
}

.rectangle-63 {
  background-color: var(--mist-gray);
  height: 8px;
  margin-left: -8.74px;
  transform: rotate(-57.94deg);
  width: 49px;
}

#overlay-how-it-works-5 {
  align-items: center;
  background-color: #00000000;
  justify-content: center;
}
</style>
