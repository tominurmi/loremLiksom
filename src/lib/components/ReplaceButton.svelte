<script lang="ts">
    import buttonBg from '../../assets/button.png';
    
    export let onClick: () => void;
</script>

<div class="button-container" style="background-image: url({buttonBg})">
    <button class="button" on:click={onClick}>Bytt tekst</button>
</div> 