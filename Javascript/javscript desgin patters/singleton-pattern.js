// example from Java

export const createSingleton = (createInstance) => {
    let instance;

    return {
        getInstance: () => (instance || createInstance())
    };
};