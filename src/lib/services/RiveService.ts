import { Rive as RiveType } from '@rive-app/canvas';

export class RiveService {
    private static instance: RiveType | null = null;
    private static isLoaded = false;

    static initialize(canvas: HTMLCanvasElement, animationPath: string): Promise<RiveType> {
        return new Promise((resolve, reject) => {
            try {
                const rive = new RiveType({
                    src: animationPath,
                    canvas: canvas,
                    autoplay: true,
                    stateMachines: 'loremliksom',
                    onLoad: () => {
                        this.isLoaded = true;
                        this.instance = rive;
                        resolve(rive);
                    }
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    static fireTrigger(triggerName: string): void {
        if (!this.instance || !this.isLoaded) return;

        try {
            const inputs = this.instance.stateMachineInputs('loremliksom');
            if (inputs) {
                const trigger = inputs.find((input: { name: string }) => input.name === triggerName);
                if (trigger) {
                    trigger.fire();
                }
            }
        } catch (error) {
            console.error(`Error firing trigger ${triggerName}:`, error);
        }
    }

    static cleanup(): void {
        if (this.instance) {
            this.instance.cleanup();
            this.instance = null;
            this.isLoaded = false;
        }
    }
}