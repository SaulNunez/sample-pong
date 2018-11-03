const activeKeys = new Set();

class KeyboardControl {
    /**
     *
     * @param {string[]} keys
     */
    constructor(keys) {
        this.keys = new Set(keys);
        this._isActive = false;
    }

    get isActive() {
        let isActive = false;
        const activeKeysArray = Array.from(activeKeys);

        for (let i = 0; i < activeKeysArray.length; i++) {
            isActive = this.keys.has(activeKeysArray[i]);
            if (isActive) {
                i = activeKeysArray.length;
            }
        }

        return isActive;
    }

}

document.addEventListener('keydown', ($event) => {
    activeKeys.add($event.key);
    console.log(...activeKeys);
});

document.addEventListener('keyup', ($event) => {
    activeKeys.delete($event.key);
    console.log(...activeKeys);
});