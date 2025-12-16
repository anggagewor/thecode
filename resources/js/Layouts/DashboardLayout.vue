<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { ref } from 'vue';

// Lo bisa definisikan state untuk sidebar (misalnya: isSidebarOpen)
const isSidebarOpen = ref(true);

// Fungsi buat toggle sidebar
const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};

// ... Lo bisa import komponen Navbar/Sidebar lo di sini
</script>

<template>
    <div class="flex h-screen bg-gray-100">

        <aside
            :class="{'w-64': isSidebarOpen, 'w-20': !isSidebarOpen}"
            class="bg-gray-800 text-white transition-all duration-300 flex flex-col"
        >
            <div class="p-4 text-xl font-bold">&lt;TheCode&#47;&gt;</div>

            <nav class="flex-grow p-4 space-y-2">
                <Link :href="route('dashboard')" class="block p-2 rounded hover:bg-gray-700 font-bold">Dashboard</Link>
                <Link :href="route('showcase.cards')" class="block p-2 rounded hover:bg-gray-700 font-bold">
                    Card Showcase
                </Link>
                <Link :href="route('showcase.tables')" class="block p-2 rounded hover:bg-gray-700 font-medium">
                    Table Showcase
                </Link>
            </nav>
        </aside>

        <div class="flex-1 flex flex-col overflow-hidden">

            <header class="flex items-center justify-between p-4 bg-white shadow">
                <button @click="toggleSidebar" class="text-gray-600 focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
                <div class="text-gray-600">User Profile / Notifikasi</div>
            </header>

            <main class="flex-1 overflow-x-hidden overflow-y-auto p-6">
                <slot />
            </main>
        </div>
    </div>
</template>
