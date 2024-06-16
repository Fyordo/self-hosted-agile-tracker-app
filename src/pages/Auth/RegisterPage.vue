<template>
  <h1 class="centered-h1">Self-Hosted Agile Tracker</h1>
  <div class="register-form">
    <div class="register-input">
      <h2 class="input-margin">Username:</h2>
      <UIInput class="input-box" v-model="registerForm.username" />
    </div>

    <div class="register-input">
      <h2 class="input-margin">Mail:</h2>
      <UIInput type="text" class="input-box" v-model="registerForm.login" />
    </div>

    <div class="register-input">
      <h2 class="input-margin">Password:</h2>
      <UIInput
        type="password"
        class="input-box"
        v-model="registerForm.password"
      />
    </div>

    <div>
      <UIButton @click="toLoginPage" :title="'Have an account?'" />
      <UIButton @click="register" :title="'Confirm'" />
    </div>
  </div>
</template>

<script>
import UIButton from "@/components/UI/UIButton.vue";
import UIInput from "@/components/UI/UIInput.vue";
import axiosAgregator from "@/server/axiosAgregator.js";
import router from "@/router/router.js";
export default {
  methods: {
    toLoginPage: function (event) {
      router.push("/login");
    },

    async register() {
      try {
        const response = await axiosAgregator.sendPost(
          "/api/auth/register",
          this.registerForm
        );

        if (response.status === 200 && response.data) {
          router.push("/login");
        } else {
          alert("Сервер тупит");
        }
      } catch (error) {
        console.log(error);
        // Обработка ошибок
        if (error.response && error.response.status === 400) {
          // Если приходит статус 403
          alert("Неверно введены данные");
        } else {
          alert("Произошла вот эта жопа:", error);
        }
      }
    },
  },
  data() {
    return {
      registerForm: {
        login: "",
        username: "",
        password: "",
      },
    };
  },
  components: {
    UIButton,
    UIInput,
  },
};
</script>

<style scoped>
.centered-h1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.register-form {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.register-input {
  display: flex;
  width: 40%;
  justify-content: space-between;
}

.input-margin {
  margin-right: 10px;
}

.input-box {
  width: 300px;
  margin-top: 10px;
  margin-bottom: 10px;
}

img {
  width: 100%;
  height: auto;
}
</style>
