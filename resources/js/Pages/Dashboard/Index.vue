<script setup lang="ts">
import DashboardLayout from '@/Layouts/DashboardLayout.vue';
import { Head } from '@inertiajs/vue3';

// Lo bisa definisikan Props yang dikirim dari Laravel
// Contoh Props:
interface DashboardProps {
    userCount: number;
    latestSales: Array<any>;
}
const props = defineProps<DashboardProps>();

</script>

<template>
    <Head title="Dashboard Utama" />

    <DashboardLayout>
        <h1 class="text-3xl font-bold mb-6">Halo, {{ $page.props.auth.user.name }}!</h1>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-lg shadow">
                <p class="text-sm text-gray-500">Total Users</p>
                <p class="text-4xl font-extrabold text-blue-600">{{ props.userCount }}</p>
            </div>

        </div>

        <div class="mt-8 bg-white p-6 rounded-lg shadow">
            <h2 class="text-xl font-semibold mb-4">Grafik Penjualan Bulan Ini</h2>
            <p class="text-gray-500">Area untuk komponen Chart JS / Echarts lo.</p>
        </div>

    </DashboardLayout>
</template>
