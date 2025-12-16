<script setup lang="ts" generic="T extends Record<string, any>">
import { PropType } from 'vue';
interface Column {
    key: keyof T | string;
    header: string;
    headerClass?: string;
    dataClass?: string;
}


const props = defineProps({
    data: {
        type: Array as PropType<T[]>,
        required: true,
    },
    columns: {
        type: Array as PropType<Column[]>,
        required: true,
    },
    striped: {
        type: Boolean,
        default: false,
    }
});
</script>

<template>
    <div class="overflow-x-auto bg-white rounded-xl shadow">
        <table class="min-w-full divide-y divide-gray-200">

            <thead class="bg-gray-50">
            <tr>
                <th
                    v-for="col in columns"
                    :key="col.header"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    :class="col.headerClass"
                >
                    {{ col.header }}
                </th>
            </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
            <tr v-for="(item, index) in data" :key="index" :class="{'bg-gray-50': striped && index % 2 !== 0}">
                <td
                    v-for="col in columns"
                    :key="col.header"
                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                    :class="col.dataClass"
                >
                    <slot :name="col.key.toString()" :item="item">
                        {{ item[col.key.toString()] }}
                    </slot>
                </td>
            </tr>
            </tbody>

        </table>
        <div v-if="!data.length" class="text-center py-8 text-gray-500">
            No data found.
        </div>
    </div>
</template>
