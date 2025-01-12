export default class EventEmitter {
    private events: Record<string, Array<(...args: any[]) => void>> = {}

    subscribe(eventName: string, callback: (...args: any[]) => void): EventEmitter {
        if (this.events[eventName] === undefined) {
            this.events[eventName] = [callback];
        }
        else {
            this.events[eventName].push(callback);
        }
        return this
    }

    unsubscribe(eventName: string, callback: (...args: any[]) => void) {
        if (this.events[eventName] !== undefined) {
            this.events[eventName] = this.events[eventName].filter((f: (...args: any[]) => void) => callback !== f);
        }
        return this
    }

    emit(eventName: string, ...args: any[]): void {
        if (this.events[eventName] !== undefined) {
            this.events[eventName].forEach((f: (...args: any[]) => void) => f(...args))
        }
    }
}
