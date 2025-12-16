<script setup lang="ts">
import DashboardLayout from '@/Layouts/DashboardLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import BaseCard from '@/Components/BaseCard.vue';

// 1. Definisikan Type untuk data yang akan ditampilkan (misal: data user)
interface UserData {
    name: string;
    role: string;
    email: string;
    imageUrl: string;
}

// 2. Data Dummy untuk di-looping
const user: UserData = {
    name: 'Bre The Code',
    role: 'Frontend Architect',
    email: 'bre@thecode.dev',
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF/png?text=TS',
};

const analyticsData = {
    visitors: 42000,
    growth: 12.5,
};
</script>

<template>
    <Head title="Card Showcase" />

    <DashboardLayout>
        <h1 class="text-3xl font-bold mb-8">Card Component Showcase</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <BaseCard title="Default Content Card">
                <p class="text-gray-600">Ini adalah konten standar di dalam card.</p>
                <p class="text-gray-600 mt-2">Cocok untuk menampilkan blok teks atau form.</p>

                <template #footer>
                    <div class="mt-4 pt-4 border-t border-gray-200">
                        <Link :href="route('dashboard')" class="text-indigo-600 hover:text-indigo-800 font-medium">Lihat Detail &rarr;</Link>
                    </div>
                </template>
            </BaseCard>

            <BaseCard title="Highlight Card" variant="highlight" padding="p-8">
                <div class="flex items-center space-x-3">
                    <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-8a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm0-3a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                    <div>
                        <p class="text-5xl font-extrabold">{{ analyticsData.visitors.toLocaleString() }}</p>
                        <p class="text-indigo-200 mt-1">Total Visitor Bulan Ini</p>
                    </div>
                </div>
            </BaseCard>

            <BaseCard title="Profile Card" padding="p-5">
                <div class="flex flex-col items-center">
                    <img :src="user.imageUrl" :alt="user.name" class="w-24 h-24 rounded-full object-cover mb-4 border-4 border-indigo-400">
                    <h4 class="text-2xl font-bold text-gray-800">{{ user.name }}</h4>
                    <p class="text-indigo-500 font-medium">{{ user.role }}</p>
                    <p class="text-gray-500 text-sm mt-1">{{ user.email }}</p>
                </div>
                <template #footer>
                    <div class="mt-4 pt-3 border-t text-center">
                        <button class="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm hover:bg-indigo-700 transition">View Profile</button>
                    </div>
                </template>
            </BaseCard>

        </div>
    </DashboardLayout>
</template>
