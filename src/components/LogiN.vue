<template>
  <form class="login-5 screen" name="form5" action="form5" method="post">
    <div class="logi-n">
      <div class="group-124">
        <div class="overlap-group3">
          <div class="overlap-group-7">
            <div class="login-6 inter-normal-black-23px">{{ login }}</div>
            <div class="overlap-group2-1">
              <div class="email inter-normal-black-23px">{{ email }}</div>
              <div class="rectangle-179"></div>
            </div>
            <div class="overlap-group1-3">
              <div class="password inter-normal-black-23px">{{ password }}</div>
              <div class="rectangle-181"></div>
            </div>
          </div>
          <input
            class="type-here inter-normal-mist-gray-23px"
            name="typehere"
            :placeholder="inputPlaceholder1"
            :type="inputType1"
            required
          /><input
            class="type-here-1 inter-normal-mist-gray-23px"
            name="typehere"
            :placeholder="inputPlaceholder2"
            :type="inputType2"
            required
          />
        </div>
        <x-button :textButton="xButton1Props.textButton" />
        <x-button :textButton="xButton2Props.textButton" :className="xButton2Props.className" />
      </div>
      <x-button :textButton="xButton3Props.textButton" :className="xButton3Props.className" />
    </div>
  </form>
</template>

<script>
import xButton from "./xButton";
export default {
  name: "LogiN",
  components: {
    xButton,
  },
  props: [
    "login",
    "email",
    "password",
    "inputType1",
    "inputPlaceholder1",
    "inputType2",
    "inputPlaceholder2",
    "xButton1Props",
    "xButton2Props",
    "xButton3Props",
  ],
};
</script>

<style>
.login-5 {
  align-items: flex-start;
  background-color: var(--black-2);
  border: 1px none;
  display: flex;
  width: 638px;
}

.logi-n {
  background-color: var(--white);
  height: 340px;
  overflow: hidden;
  position: relative;
  width: 638px;
}

.group-124 {
  height: 340px;
  left: 0;
  position: absolute;
  top: 0;
  width: 642px;
}

.overlap-group3 {
  height: 340px;
  left: 0;
  position: absolute;
  top: 0;
  width: 638px;
}

.overlap-group-7 {
  align-items: flex-start;
  background-color: var(--concrete);
  display: flex;
  flex-direction: column;
  gap: 12px;
  left: 0;
  min-height: 340px;
  padding: 14px 29px;
  position: absolute;
  top: 0;
  width: 638px;
}

.login-6 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 39px;
  width: 244px;
}

.overlap-group2-1 {
  height: 79px;
  position: relative;
  width: 554px;
}

.email,
.password {
  left: 7px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 244px;
}

.rectangle-179 {
  background-color: var(--alto);
  height: 47px;
  left: 0;
  position: absolute;
  top: 32px;
  width: 554px;
}

.overlap-group1-3 {
  height: 79px;
  position: relative;
  width: 431px;
}

.rectangle-181 {
  background-color: var(--alto);
  height: 47px;
  left: 0;
  position: absolute;
  top: 32px;
  width: 431px;
}

.type-here {
  background-color: transparent;
  border: 0;
  height: 28px;
  left: 42px;
  letter-spacing: 0;
  line-height: normal;
  padding: 0;
  position: absolute;
  top: 106px;
  width: 109px;
}

.type-here::placeholder,
.type-here-1::placeholder {
  color: #c4c4c499;
}

.type-here-1 {
  background-color: transparent;
  border: 0;
  height: 28px;
  left: 42px;
  letter-spacing: 0;
  line-height: normal;
  padding: 0;
  position: absolute;
  top: 197px;
  width: 109px;
}

#overlay-login {
  align-items: center;
  background-color: #00000040;
  justify-content: center;
}
</style>
