<script lang="ts">
    import { onMount } from 'svelte';
    import { RiveService } from '../services/RiveService';
    import type { Rive as RiveType } from '@rive-app/canvas';
    import riveAnim from '../../assets/loremliksomconsole.riv';

    export let onRiveInit: (rive: RiveType) => void;

    onMount(() => {
        const initRive = async () => {
            try {
                const rive = await RiveService.initialize(
                    document.getElementById('riveCanvas') as HTMLCanvasElement,
                    riveAnim
                );
                onRiveInit(rive);
            } catch (error) {
                console.error('Error initializing Rive:', error);
            }
        };

        initRive();

        return () => {
            RiveService.cleanup();
        };
    });
</script>

<canvas id="riveCanvas" width="222" height="116"></canvas> 