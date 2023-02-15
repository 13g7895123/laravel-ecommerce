<template>
    <div class="w-[20%] flex flex-col border-1 border-orange-300 px-1">
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
        
        <router-link 
            v-for="item in items"
            title= "item.name"
            :to="{ path: item.path }"
            class="sideBarItem"
            >
            <font-awesome-icon :icon=item.icon />
            <span class="ml-3">{{ item.name }}</span>
        </router-link>
        
    </div>
</template>
<script>
export default{
    data(){
        return {
            items: [
                {
                    path: '/',
                    name: 'Dashboard',
                    icon: 'list'
                },
                {
                    path: '/account',
                    name: 'Account'
                },
                {
                    path: '/settings',
                    name: 'Settings'
                },
                {
                    path: '/shop1',
                    name: 'shop1',
                    icon: 'fa-bag-shopping'
                },
                {
                    path: '/shop2',
                    name: 'shop2',
                    icon: 'fa-bag-shopping'
                },
            ]
        }
    }
}

</script>