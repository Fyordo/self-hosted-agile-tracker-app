<template>
    <img :src="'src/images/RihTrackerLogo.png'">
    <div class="login-form">
        <div class="auth-input">
            <h2 class="input-margin">Логин:</h2>
            <UIInput
            type="text"
            class="input-box"
            v-model="loginForm.login"
            />
        </div>

        <div class="auth-input">
            <h2 class="input-margin">Пароль:</h2>
            <UIInput
            type="password"
            class="input-box"
            v-model="loginForm.password"
            />
        </div>

        <div class="auth-buttons-container">
            <UIButton @click="login" :title="'Авторизоваться'"/>
            <UIButton @click="toRegisterPage" :title="'Зарегистрироваться'"/>
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
        async login(){
            try {
                const response = await axiosAgregator.sendPost("/api/auth/login", {
                    login: this.loginForm.login,
                    password: this.loginForm.password,
                });

                if (response.status === 200 && response.data.token) {
                    // Если статус 200 и есть поле token, записываем его в localStorage
                    localStorage.setItem('jwt', response.data.token);
                    localStorage.setItem('userId', response.data.id);
                    router.push("/profile");
                } else {
                    alert('Сервер тупит');
                }
            } catch (error) {
            // Обработка ошибок
                if (error.response && error.response.status === 400) {
                    // Если приходит статус 403
                    alert('Неверно введены данные');
                } else {
                    alert('Произошла вот эта жопа:', error);
                }
            }
        },
    },
    data () {
        return {
            loginForm: {
                login: "",
                password: "",
            }
        }
    },
    components: {
        UIButton,
        UIInput
    },
        
}
</script>

<style scoped>
.login-form {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.auth-input {
    display: flex;
}

.input-margin {
    margin-right: 10px;
}

.input-box{
    margin-top: 4px;
}

img {
    width: 100%;
    height: auto;
}
</style>