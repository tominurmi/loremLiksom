<!-- lib/components/TextCategorySelector.svelte -->
<script lang="ts">
    import type { TextCategory } from '../types';

    export let selectedCategory: TextCategory;

    const categories: Array<{
        value: TextCategory;
        label: string;
    }> = [
        { value: 'fairytale', label: 'Eventyr Ipsum' },
        { value: 'fiveyearold', label: 'Femåring Ipsum' },
        { value: 'marketplace', label: 'Markedsplass Ipsum' },
        { value: 'messages', label: 'Melding Ipsum' },
        { value: 'publicsector', label: 'Offentlig sektor Ipsum' },
        { value: 'patientinfo', label: 'Pasientinfo Ipsum' },
        { value: 'sensational', label: 'Sensasjonell Ipsum' }
    ];
</script>

<div class="category-selector">
    <h2 class="heading">SPRÅKPAKKE</h2>
    <select 
        bind:value={selectedCategory} 
        class="select-styled"
    >
        {#each categories as category}
            <option value={category.value}>
                {category.label}
            </option>
        {/each}
    </select>
</div>

<style>
    .category-selector {
        margin-bottom: 1.3rem;
        padding: 0 32px
    }
    
    .select-styled {
        cursor: pointer;
        font-family: Inter, system-ui, Helvetica, Arial, sans-serif;
        font-weight: 400;
        width: 100%;
        padding: 8px 6px;
        border-radius: 8px;
        background: #151515;
        color: #dfdfdf;
        border: 1px solid #000;
        box-shadow: 0px 1px 0px 0px #4C4E50;
    }
</style>