<template>
    <div class="w-[20%] flex flex-col border-1 border-orange-300">
        <!-- LOGO -->
        <div class="flex items-center p-3">
            <img
            src='https://img.icons8.com/clouds/256/amazon-alexa-logo.png'
            alt="LOGO"
            class="w-16 h-auto"
            >
            <h1 class="text-2xl text-[#555] font-extrabold">MATERIO</h1>
        </div>
        <!-- SIDE BAR CONTENT -->
        <ul>
            <!-- <li v-for="item in items"><router-link to="/{{ item }}">{{ item }}</router-link></li> -->
            <li><router-link to="/">Dashboard</router-link></li>
            <li><router-link to="/account">Acocunt</router-link></li>
            <li><router-link to="/settings">Settings</router-link></li>
        </ul>
    </div>
</template>
<script>
export default{
    data(){
        return {
            items:['Dashboard', 'Acocunt', 'Settings']
        }
    }
}

</script>