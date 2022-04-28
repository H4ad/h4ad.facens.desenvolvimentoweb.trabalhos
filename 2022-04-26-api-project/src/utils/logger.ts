const colors = {
    Reset: "\x1b[0m",
    error: "\x1b[31m",
    warn: "\x1b[33m",
    log: "\x1b[34m",
};

const methods: ['log', 'warn', 'error'] = ["log", "warn", "error"];

methods.forEach(method => {
    const oldMethod = console[method].bind(console);

    console[method] = function () {
        oldMethod.apply(console, [
            `${colors[method]}${new Date().toISOString()}${colors.Reset}`,
            ...arguments,
        ]);
    };
});

/**
 * A classe que lida com a exibição de logs
 */
export class Logger {

    /**
     * Construtor padrão
     * 
     * @param scope O escopo da realização do log
     */
    constructor(
        private readonly scope: string,
    ) { }

    /**
     * Método que realiza o log de alguma informação concatenando o escopo na frente
     * 
     * @param args Os argumentos que irão ser exibidos no log
     */
    public log(...args: any[]): void {
        console.log(`[${ this.scope }]:`, ...args);
    }

    /**
     * Método que realiza o warn de alguma informação concatenando o escopo na frente
     * 
     * @param args Os argumentos que irão ser exibidos no log
     */
    public warn(...args: any[]): void {
        console.warn(`[${ this.scope }]:`, ...args);
    }

    /**
     * Método que realiza o error de alguma informação concatenando o escopo na frente
     * 
     * @param args Os argumentos que irão ser exibidos no log
     */
    public error(...args: any[]): void {
        console.error(`[${ this.scope }]:`, ...args);
    }
}
