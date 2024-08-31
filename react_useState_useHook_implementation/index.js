const ReactX = (() => {
    let hooks = [];
    let index = 0;

    const useState = (initialValue) => {
        const localIndex = index;
        index++;
        if (hooks[localIndex] === undefined) {
            hooks[localIndex] = initialValue;
        }
        const setterFunction = (newValue) => {
            hooks[localIndex] = newValue;
        };
        return [hooks[localIndex], setterFunction];
    };

    const useEffect = (callback, dependencyArray) => {
        let hasChanged = true;

        const oldDependencies = hooks[index];
        if (oldDependencies) {
            hasChanged = false;

            dependencyArray.forEach((dependency, index) => {
                const oldDependency = oldDependencies[index];
                const areTheSame = Object.is(dependency, oldDependency);
                if (!areTheSame) {
                    hasChanged = true;
                }
            });
        }
        if (hasChanged) {
            callback();
        }
        hooks[index] = dependencyArray;
        index++;
    };

    const resetIndex = () => {
        index = 0;
    };
    return { useState, useEffect, resetIndex };
})();

const { useState, useEffect, resetIndex } = ReactX;

const Component = () => {
    const [counterValue, setCounterValue] = useState(1);
    const [name, setName] = useState("Thomas");

    console.log(counterValue);
    console.log(name);

    useEffect(() => {
        console.log("useEffect");
    }, [name]);

    if (counterValue !== 2) {
        setCounterValue(2);
    }

    if (name !== "Jack" && counterValue === 2) {
        setName("Jack");
    }
};

Component();
resetIndex();
Component();
resetIndex();
Component();
