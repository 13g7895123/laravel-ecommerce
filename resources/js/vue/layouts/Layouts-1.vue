<template>
    <div class="flex h-screen w-screen">
        <Sidebar/>
        <Right-content/>
    </div>
</template>

<script setup>
    import Sidebar from './Sidebar.vue';
</script>

CREATE USER 'bonus_shoes_remote'@'122-117-114-34.hinet-ip.hinet.net' IDENTIFIED BY '820820';
GRANT ALL PRIVILEGES ON db_bonus_shoes.* TO 'bonus_shoes_remote'@'122-117-114-34.hinet-ip.hinet.net';
FLUSH PRIVILEGES;