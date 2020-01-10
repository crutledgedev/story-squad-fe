import React from 'react';

interface FormHook<T> {
    state: T;
    setState: React.Dispatch<React.SetStateAction<T>>;
    handleBoolChange: (key: keyof T) => (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleInputChange: (key: keyof T) => (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmitBuilder: (
        callback: (state: T) => void
    ) => (e: React.FormEvent<HTMLFormElement>) => void;
}

/**
 * @description A hook used to simplify the process of building forms
 * @template S The state data for the forum
 * @param {S} initial The initial state of the forum
 * @returns {FormHook<S>} The return of this hook has four parts in an object:
 * - `state` the current state of this forum
 * - `handleBoolChange()` a function intended to be used with a checkbox to update state on changes
 * - `handleStringChange()` a function intended to be used with a input box to update state on changes
 * - `handleSubmitBuilder()` a function used to create handleSubmit
 *
 * @example
 * ```js
 * const {request} = useAPI("/some/data", "POST");
 * const {handleBoolChange, handleSubmitBuilder, state} = useForm({ enabled: true});
 * const handleSubmit = handleSubmitBuilder(request);
 *
 * return <form onSubmit={handleSubmit}>
 *   <input type="checkbox" onChange={handleBoolChange("enabled")} value={state.enabled}>
 * </form>
 * ```
 */
const useForm = <S extends { [key: string]: any }>(initial: S): FormHook<S> => {
    const [state, setState] = React.useState<S>(initial);

    const handleInputChange = (key: keyof S) => (e: React.ChangeEvent<HTMLInputElement>) =>
        setState({
            ...state,
            [key]: (() => {
                if (e.target.value === '') return '';
                else if (Number.isInteger(initial[key])) return Number(e.target.value);
                else return String(e.target.value);
            })(),
        });

    const handleBoolChange = (key: keyof S) => (e: React.ChangeEvent<HTMLInputElement>) =>
        setState({ ...state, [key]: e.target.checked });

    const handleSubmitBuilder = (callback: (state: S) => void) => (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        callback(state);
    };

    return { state, setState, handleBoolChange, handleInputChange, handleSubmitBuilder };
};

export { useForm };