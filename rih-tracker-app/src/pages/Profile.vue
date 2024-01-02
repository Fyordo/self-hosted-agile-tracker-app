<template>
    <div class="profile-container">
        <UIImage
        :src="'https://sun9-12.userapi.com/impf/58P21qM2oQkJKFDNKnOyPx-XzxCxukBGdm4Z9Q/_HWSZmu8_kQ.jpg?size=853x1280&quality=95&sign=76c495e3c1cfcc293adf5f9f696096c2&type=album'"
        />
        <div class="profile-info">
            <h1>Имя пользователя: Fyor Lando🎄</h1>
            <h2>Логин: login</h2>
            <h2>Telegram: @federiton_san</h2>
            <h2>ВК: http://vk.com/federiton_san</h2>
            <h2>Discord: @federiton_san</h2>
            <div class="buttons-container">
                <UIButton :title="'Редактировать'"/>
                <UIButton :title="'Выйти'"/>
            </div>
        </div>
    </div>
</template>

<script>
import UIImage from "@/components/UI/UIImage.vue";
import UIButton from "@/components/UI/UIButton.vue";
    export default {
        components: {
            UIImage,
            UIButton
        }
    }
</script>

<style scoped>
.profile-container {
    display: flex;
}

.profile-info {
    padding-top: 50px;
}

.buttons-container {
    display: flex;
    margin: 20px;
}
</style>