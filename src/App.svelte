<script lang="ts">
    import { TextService } from './lib/services/TextService';
    import TextCategorySelector from './lib/components/TextCategorySelector.svelte';
    import RadioGroup from './lib/components/RadioGroup.svelte';
    import ReplaceButton from './lib/components/ReplaceButton.svelte';
    import RiveCanvas from './lib/components/RiveCanvas.svelte';
    import type { TextCategory, TextLength } from './lib/types';
    import { RiveService } from './lib/services/RiveService';
    import type { Rive as RiveType } from '@rive-app/canvas';

    import bg from './assets/bg-large.png';
    import logo from './assets/logo.svg';
    import modelNumber from './assets/modelnumber.svg';
    import radioClickSound from './assets/radio-click.wav';
    import buttonClickSound from './assets/button-click.wav';

    let selectedCategory: TextCategory = 'fairytale';
    let selectedLength: TextLength = 'short';
    let rive: RiveType;

    document.body.style.backgroundImage = `url(${bg})`;

    function onLengthChange(value: TextLength) {
        selectedLength = value;
        RiveService.fireTrigger(`${value}Trigger`);
    }

    const playRadioSound = () => {
        new Audio(radioClickSound).play();
    }

    const playButtonSound = () => {
        new Audio(buttonClickSound).play();
    }

    function replaceText() {
        playButtonSound();
        RiveService.fireTrigger('buttonTrigger');
        
        const randomText = TextService.getRandomText(selectedCategory, selectedLength);
        parent.postMessage({ 
            pluginMessage: { type: 'replace-text', text: randomText }
        }, '*');
    }

    function handleRiveInit(riveInstance: RiveType) {
        rive = riveInstance;
        window.onmessage = (event) => {
            if (event.data.pluginMessage?.type === 'no-text-selected') {
                RiveService.fireTrigger('noTextTrigger');
            }
        };
    }
</script>

<div class="container">
    <div class="logo-container">
        <img src={logo} alt="" class="logo" />
        <img src={modelNumber} alt="" class="model-number" />
    </div>

    <RiveCanvas onRiveInit={handleRiveInit} />

    <TextCategorySelector 
        bind:selectedCategory
        on:change={() => RiveService.fireTrigger(`${selectedLength}Trigger`)}
    />

    <RadioGroup
        {selectedLength}
        {onLengthChange}
        {playRadioSound}
    />

    <ReplaceButton onClick={replaceText} />
</div>