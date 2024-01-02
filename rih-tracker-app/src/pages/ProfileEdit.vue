<template>
    <div class="profile-container">
        <UIImage
        :src="profileInfo.avatar"
        />
        <div class="profile-info">
            <div class="profile-input">
                <h1 class="input-margin">Имя пользователя: </h1>
                <UIInput
                class="input-box"
                v-model="profileInfo.username"
                />
            </div>

            <div class="profile-input">
                <h2 class="input-margin">Логин:  </h2>
                <UIInput
                class="input-box"
                v-model="profileInfo.login"
                />
            </div>

            <div class="profile-buttons-container">
                <UIButton @click="saveProfile" :title="'Сохранить'"/>
                <UIButton @click="toProfilePage" :title="'Отмена'"/>
            </div>
        </div>
    </div>
</template>

<script>
import UIImage from "@/components/UI/UIImage.vue";
import UIButton from "@/components/UI/UIButton.vue";
import UIInput from "@/components/UI/UIInput.vue";
import appConfig from "@/config/config.js";
import axios from 'axios';
import router from "@/router/router.js";

export default {
    created () {
        this.loadInfo();
    },
    methods: {
        async loadInfo() {
            await axios
                .get(appConfig.apiPath + "/api/profile/2")
                .then(response => {
                    this.profileInfo.username = response.data.username;
                    this.profileInfo.login = response.data.login;
                    this.profileInfo.avatar = response.data.avatar;
                });
        },
        async saveInfo() {
            await axios
                .put(appConfig.apiPath + "/api/profile/2", {
                    username: this.profileInfo.username,
                    login: this.profileInfo.login,
                    avatar: this.profileInfo.avatar,
                })
                .then();
        },

        toProfilePage: function (event){
            router.push("/profile");
        },

        saveProfile: function (event){
            this.saveInfo().then(response => {
                router.push("/profile");
            });
        }
    },
    components: {
        UIImage,
        UIButton,
        UIInput
    },
    data () {
        return {
            profileInfo: {
                username: "Загрузка...",
                login: "Загрузка...",
                avatar: "https://priutnekrasovka.ru/public/images/no-avatar.png",
            }
        }
    },
}
</script>

<style scoped>
.profile-input {
    display: flex;
}

.input-box{
    margin-top: 1%;
}

.input-margin{
    padding-right: 10px;
}
</style>