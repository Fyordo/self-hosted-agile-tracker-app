<template>
    <div class="profile-container">
        <UIImage
        :src="this.profileInfo.avatar"
        />
        <div class="profile-info">
            <h1>Имя пользователя: {{this.profileInfo.username}}</h1>
            <h2>Логин: {{this.profileInfo.login}}</h2>
            <div class="profile-buttons-container">
                <UIButton v-on:click="toEditPage" :title="'Редактировать'"/>
                <UIButton :title="'Выйти'"/>
            </div>
        </div>
    </div>
</template>

<script>
import UIImage from "@/components/UI/UIImage.vue";
import UIButton from "@/components/UI/UIButton.vue";
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

        toEditPage: function (event){
            router.push("/profile/edit");
        }
    },
    components: {
        UIImage,
        UIButton
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

<style>
.profile-container {
    display: flex;
}

.profile-info {
    padding-top: 50px;
}

.profile-buttons-container {
    display: flex;
    margin: 20px;
}
</style>