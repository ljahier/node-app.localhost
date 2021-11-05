export enum AppType {
    SINGLE = 'single',
    MULTIPLE = 'multiple'
}

export function checkArguments(appType: AppType, argv: string[]): void {
    switch (appType) {
        case AppType.SINGLE:
        case AppType.MULTIPLE : {
            // check the third argument is --number and is superior to 1
            // check --port-begin
            // check --port-end
            // check --name
            // throw new Error('Read the doc you need to specify --number flag')
        }
    }
}