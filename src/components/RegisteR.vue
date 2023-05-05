<template>
  <form class="register screen" name="form25" action="form25" method="post">
    <div class="registe-r">
      <div class="overlap-group5">
        <div class="overlap-group-21">
          <div class="place-22 inter-normal-black-23px">{{ place }}</div>
          <div class="overlap-group-container-2">
            <div class="overlap-group-20">
              <div class="first-name inter-normal-black-23px">{{ firstName }}</div>
              <div class="rectangle-17"></div>
              <input
                class="type-here-3 inter-normal-mist-gray-23px"
                name="typehere"
                :placeholder="inputPlaceholder1"
                :type="inputType1"
                required
              />
            </div>
            <div class="overlap-group-20">
              <div class="last-name inter-normal-black-23px">{{ lastName }}</div>
              <div class="rectangle-17"></div>
              <input
                class="type-here-4 inter-normal-mist-gray-23px"
                name="typehere"
                :placeholder="inputPlaceholder2"
                :type="inputType2"
                required
              />
            </div>
          </div>
          <div class="overlap-group2-5">
            <div class="email-1 inter-normal-black-23px">{{ email }}</div>
            <div class="rectangle-1"></div>
          </div>
          <div class="overlap-group3-4">
            <div class="password-1 inter-normal-black-23px">{{ password }}</div>
            <div class="rectangle-1"></div>
            <input
              class="type-here-5 inter-normal-mist-gray-23px"
              name="typehere"
              :placeholder="inputPlaceholder3"
              :type="inputType3"
              required
            />
          </div>
        </div>
        <input
          class="type-here-6 inter-normal-mist-gray-23px"
          name="typehere"
          :placeholder="inputPlaceholder4"
          :type="inputType4"
          required
        />
      </div>
      <x-button :textButton="xButton1Props.textButton" :className="xButton1Props.className" />
      <x-button :textButton="xButton2Props.textButton" :className="xButton2Props.className" />
    </div>
  </form>
</template>

<script>
import xButton from "./xButton";
export default {
  name: "RegisteR",
  components: {
    xButton,
  },
  props: [
    "place",
    "firstName",
    "inputType1",
    "inputPlaceholder1",
    "lastName",
    "inputType2",
    "inputPlaceholder2",
    "email",
    "password",
    "inputType3",
    "inputPlaceholder3",
    "inputType4",
    "inputPlaceholder4",
    "xButton1Props",
    "xButton2Props",
  ],
};
</script>

<style>
.register {
  align-items: flex-start;
  background-color: var(--black-2);
  border: 1px none;
  display: flex;
  width: 638px;
}

.registe-r {
  background-color: var(--white);
  height: 340px;
  position: relative;
  width: 638px;
}

.overlap-group5 {
  height: 340px;
  left: 0;
  position: absolute;
  top: 0;
  width: 638px;
}

.overlap-group-21 {
  align-items: flex-start;
  background-color: var(--concrete);
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 340px;
  padding: 14px 22px;
  position: absolute;
  top: 0;
  width: 638px;
}

.place-22 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 7px;
  min-height: 39px;
  width: 244px;
}

.overlap-group-container-2 {
  align-items: flex-start;
  display: flex;
  gap: 25px;
  margin-top: 4px;
  min-width: 593px;
}

.overlap-group-20 {
  height: 79px;
  position: relative;
  width: 284px;
}

.first-name,
.last-name,
.email-1,
.password-1 {
  left: 7px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 244px;
}

.rectangle-17 {
  background-color: var(--alto);
  height: 47px;
  left: 0;
  position: absolute;
  top: 32px;
  width: 284px;
}

.type-here-3 {
  background-color: transparent;
  border: 0;
  height: 28px;
  left: 17px;
  letter-spacing: 0;
  line-height: normal;
  padding: 0;
  position: absolute;
  top: 39px;
  width: 109px;
}

.type-here-3::placeholder,
.type-here-4::placeholder,
.type-here-5::placeholder,
.type-here-6::placeholder {
  color: #c4c4c499;
}

.type-here-4 {
  background-color: transparent;
  border: 0;
  height: 28px;
  left: 7px;
  letter-spacing: 0;
  line-height: normal;
  padding: 0;
  position: absolute;
  top: 41px;
  width: 109px;
}

.overlap-group2-5 {
  height: 79px;
  margin-top: 17px;
  position: relative;
  width: 455px;
}

.rectangle-1 {
  background-color: var(--alto);
  height: 47px;
  left: 0;
  position: absolute;
  top: 32px;
  width: 455px;
}

.overlap-group3-4 {
  height: 79px;
  margin-top: 7px;
  position: relative;
  width: 455px;
}

.type-here-5 {
  background-color: transparent;
  border: 0;
  height: 28px;
  left: 17px;
  letter-spacing: 0;
  line-height: normal;
  padding: 0;
  position: absolute;
  top: 42px;
  width: 109px;
}

.type-here-6 {
  background-color: transparent;
  border: 0;
  height: 28px;
  left: 39px;
  letter-spacing: 0;
  line-height: normal;
  padding: 0;
  position: absolute;
  top: 196px;
  width: 109px;
}

#overlay-register {
  align-items: center;
  background-color: #00000040;
  justify-content: center;
}
</style>
