<script lang="ts">
    import type { TextLength } from '../types';
    import radioDefault from '../../assets/radio-default.png';
    import radioActive from '../../assets/radio-active.png';

    export let selectedLength: TextLength;
    export let onLengthChange: (value: TextLength) => void;
    export let playRadioSound: () => void;

    const options: Array<{
        value: TextLength;
        label: string;
    }> = [
        { value: 'short', label: 'Tittel' },
        { value: 'medium', label: 'Ingress' },
        { value: 'long', label: 'Avsnitt' }
    ];
</script>

<div class="radios">
    <h2 class="heading">TEKSTMENGDE</h2>
    <div class="radio-group">
        {#each options as option}
            <label class="radio-label">
                <input 
                    type="radio" 
                    bind:group={selectedLength} 
                    value={option.value}
                    on:click={() => {
                        playRadioSound();
                        onLengthChange(option.value);
                    }} 
                />
                <img src={radioDefault} alt="" class="radio-icon default" />
                <img src={radioActive} alt="" class="radio-icon active" />
                <span>{option.label}</span>
            </label>
        {/each}
    </div>
</div> 