export const useSubmitTrainer = (): {
    submitTrainer: (e: React.FormEvent<HTMLFormElement>) => void;
} => {
    const submitTrainer = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.currentTarget));
        console.log(data);
        (e.currentTarget as HTMLFormElement).reset();
    };


    return {
        submitTrainer,
    };
};
