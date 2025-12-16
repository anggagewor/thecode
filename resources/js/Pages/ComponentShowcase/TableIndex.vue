<script setup lang="ts">
import DashboardLayout from '@/Layouts/DashboardLayout.vue';
import { Head } from '@inertiajs/vue3';
import BaseTable from '@/Components/BaseTable.vue';

// 1. Interface untuk Data Users
interface User {
    id: number;
    name: string;
    email: string;
    role: 'Admin' | 'User' | 'Guest';
    status: 'Active' | 'Inactive';
}

// 2. Data Dummy Users
const users: User[] = [
    { id: 1, name: 'Adi Wibowo', email: 'adi@dev.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Siti Rahma', email: 'siti@dev.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Bambang J.', email: 'bambang@dev.com', role: 'Guest', status: 'Inactive' },
    { id: 4, name: 'Rina Sapti', email: 'rina@dev.com', role: 'User', status: 'Active' },
];

// 3. Kolom Definisi (Type-safe)
const userColumns = [
    { key: 'id', header: 'ID', dataClass: 'font-medium text-indigo-600' },
    { key: 'name', header: 'Nama Lengkap' },
    { key: 'email', header: 'Email', dataClass: 'text-gray-500' },
    { key: 'role', header: 'Role', dataClass: 'font-bold' },
    { key: 'actions', header: 'Aksi', headerClass: 'text-right' }, // Kolom custom (tidak ada di User interface)
];
</script>

<template>
    <Head title="Table Showcase" />

    <DashboardLayout>
        <h1 class="text-3xl font-bold mb-8">Table Component Showcase</h1>

        <section class="mb-12">
            <h2 class="text-2xl font-semibold mb-4">Tabel User (Default)</h2>

            <BaseTable :data="users" :columns="userColumns">

                <template #role="{ item }">
          <span :class="{'text-green-600': item.role === 'Admin', 'text-blue-600': item.role === 'User'}">
            {{ item.role }}
          </span>
                </template>

                <template #actions="{ item }">
                    <div class="text-right">
                        <button class="text-indigo-600 hover:text-indigo-900 font-medium">Edit</button>
                    </div>
                </template>

            </BaseTable>
        </section>

        <section>
            <h2 class="text-2xl font-semibold mb-4">Tabel User (Striped / Selang-seling)</h2>
            <BaseTable :data="users" :columns="userColumns" striped>
                <template #role="{ item }">
                <span :class="{'text-green-600': item.role === 'Admin', 'text-blue-600': item.role === 'User'}">
                    {{ item.role }}
                </span>
                </template>
                <template #actions="{ item }">
                    <div class="text-right">
                        <button class="text-indigo-600 hover:text-indigo-900 font-medium">Edit</button>
                    </div>
                </template>
            </BaseTable>
        </section>

    </DashboardLayout>
</template>
