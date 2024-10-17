import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class UiStyleService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: UiStyleService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: UiStyleService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: UiStyleService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class UiStyleComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: UiStyleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: UiStyleComponent, isStandalone: true, selector: "lib-ui-style", ngImport: i0, template: `
    <p>
      ui-style works!
    </p>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: UiStyleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ui-style', standalone: true, imports: [], template: `
    <p>
      ui-style works!
    </p>
  ` }]
        }] });

class CustomButtonComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: CustomButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: CustomButtonComponent, isStandalone: true, selector: "app-custom-button", ngImport: i0, template: "<p>custom-button works!</p>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: CustomButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-custom-button', standalone: true, imports: [], template: "<p>custom-button works!</p>\n" }]
        }] });

/*
 * Public API Surface of ui-style
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CustomButtonComponent, UiStyleComponent, UiStyleService };
//# sourceMappingURL=ui-style.mjs.map
