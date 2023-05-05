<template>
  <div class="how-it-works-2 screen">
    <div class="how-it-works-2-1">
      <div class="overlap-group1-5">
        <div class="group-35-2">
          <p class="step-1-create-room-a montserrat-bold-black-32px">
            <span class="montserrat-bold-black-32px">{{ spanText1 }}</span
            ><span class="montserrat-normal-black-32px">{{ spanText2 }}</span>
          </p>
          <div class="ellipse-container-4">
            <div class="ellipse-1-9"></div>
            <img
              class="ellipse-5-3"
              src="https://anima-uploads.s3.amazonaws.com/projects/644f9d16f668cf1da13ba6a7/releases/645090793b2eef83e1375cbf/img/ellipse-5.svg"
              alt="Ellipse 5"
            />
            <div class="ellipse-9-3"></div>
            <div class="ellipse-6-3"></div>
            <div class="ellipse-7-3"></div>
            <div class="ellipse-10-3"></div>
            <div class="ellipse-8-3"></div>
          </div>
          <router-link to="/how-it-works-3">
            <div class="group-32-3">
              <div class="rectangle-62-3"></div>
              <div class="rectangle-63-3"></div></div
          ></router-link>
        </div>
        <h1 class="fix-peer-share-6-mem montserrat-normal-black-32px" v-html="fixPeerShare6Mem"></h1>
      </div>
      <grou-p41 :className="group411Props.className" />
      <grou-p41 :className="group412Props.className" />
    </div>
  </div>
</template>

<script>
import GrouP41 from "./GrouP41";
export default {
  name: "HowItWorks2",
  components: {
    Group41,
  },
  props: ["spanText1", "spanText2", "fixPeerShare6Mem", "group411Props", "group412Props"],
};
</script>

<style>
.how-it-works-2 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  width: 1440px;
}

.how-it-works-2-1 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 731px;
  overflow: hidden;
  padding: 0 36.2px;
  position: relative;
  width: 1440px;
}

.overlap-group1-5 {
  align-self: flex-end;
  height: 515px;
  margin-top: 109px;
  position: relative;
  width: 1334px;
}

.group-35-2 {
  align-items: center;
  display: flex;
  height: 515px;
  left: 0;
  min-width: 1334px;
  position: absolute;
  top: 0;
}

.step-1-create-room-a {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 2.06px;
  min-height: 273px;
  min-width: 500px;
}

.ellipse-container-4 {
  align-self: flex-end;
  height: 515px;
  margin-bottom: 0;
  margin-left: 287px;
  position: relative;
  width: 468px;
}

.ellipse-1-9 {
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

.ellipse-5-3 {
  height: 105px;
  left: 0;
  position: absolute;
  top: 105px;
  width: 105px;
}

.ellipse-9-3 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 0;
  position: absolute;
  top: 305px;
  width: 105px;
}

.ellipse-6-3 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 184px;
  position: absolute;
  top: 410px;
  width: 105px;
}

.ellipse-7-3 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 363px;
  position: absolute;
  top: 305px;
  width: 105px;
}

.ellipse-10-3 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 363px;
  position: absolute;
  top: 105px;
  width: 105px;
}

.ellipse-8-3 {
  background-color: var(--alto);
  border-radius: 52.54px;
  height: 105px;
  left: 184px;
  position: absolute;
  top: 0;
  width: 105px;
}

.group-32-3 {
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

.rectangle-62-3 {
  background-color: var(--mist-gray);
  height: 7px;
  margin-left: -10.31px;
  margin-top: 2px;
  transform: rotate(57.94deg);
  width: 52px;
}

.rectangle-63-3 {
  background-color: var(--mist-gray);
  height: 8px;
  margin-left: -8.74px;
  transform: rotate(-57.94deg);
  width: 49px;
}

.fix-peer-share-6-mem {
  left: 916px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 164px;
}

#overlay-how-it-works-2 {
  align-items: center;
  background-color: #00000000;
  justify-content: center;
}
</style>
