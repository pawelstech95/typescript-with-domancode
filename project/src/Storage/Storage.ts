abstract class Storage<T> {
    protected readonly STORAGE_KEY: string

    protected constructor(storageKey: string) { // bylo public
        this.STORAGE_KEY = storageKey
        this.init()
    }

    public abstract getItems(): T[]

    public abstract saveItems(items: T[]): void

    public abstract clearItems(): void

    protected abstract init(): void
}

export default Storage