export type MethodFunction = (value: any, option: any) => boolean;

export type Method = {
    func: MethodFunction,
    message: string,
};

export type MethodMap = {
    [string]: Method,
};

export type Data = {
    [string]: Data,
};

type Translation = {
    [string]: string,
};

export type TranslationMap = {
    [string]: Translation,
};

type ValidationError = string | Array<string>;

export type ValidationErrorMap = {
    [string]: ValidationError,
};

export type Response = {
    validationErrors: ValidationErrorMap,
};

export type FormOptions = {
    ajax: AjaxOptions,
};

export type AjaxOptions = {
    url?: string,
    enctype?: string,
    sendType?: string,
    method?: string,
    data?: string | FormData,
};

export type RulesOptions = {
    [string]: Object,
};

export type MessagesOptions = {
    [string]: Object,
};

export type ContainersOptions = {
    parent: string,
    message: string,
    baseMessage: string,
};

export type StatesOptions = {
    error: string,
    valid: string,
    pristine: string,
    dirty: string,
};

export type CallbacksOptions = {
    success: ({ event: Event, response: any }) => void,
    error: ({ errors: Array<string> }) => void,
};

export type Options = {
    ajax: AjaxOptions,
    rules: RulesOptions,
    messages: MessagesOptions,
    containers: ContainersOptions,
    states: StatesOptions,
    formStatePrefix: string,
    callbacks: CallbacksOptions,
    clean: boolean,
    redirect: boolean,
    language: string,
    translations: TranslationMap,
};

export type Path = Array<string>;

export type Input = HTMLInputElement | HTMLSelectElement;

export type InputMap = {
    [string]: Input,
};
