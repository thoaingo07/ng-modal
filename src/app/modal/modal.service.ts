
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Injectable, Injector, TemplateRef, Type } from '@angular/core';
import { ModalOverlayRef } from './modal-overlay-ref';
import { ModalComponent } from './modal.component';

@Injectable({
    providedIn: 'root'
})
export class ModalService {
    constructor(private overlay: Overlay, private injector: Injector) { }

    open<R = any, T = any>(
        content: string | TemplateRef<any> | Type<any>,
        data: T
    ): ModalOverlayRef<R> {
        const positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .centerVertically();
        const configs = new OverlayConfig({
            hasBackdrop: true,
            panelClass: ['modal', 'is-active'],
            backdropClass: 'modal-background',
            positionStrategy
        });

        const overlayRef = this.overlay.create(configs);

        const myOverlayRef = new ModalOverlayRef<R, T>(overlayRef, content, data);
        const injector = this.createInjector(myOverlayRef);

        overlayRef.attach(new ComponentPortal(ModalComponent, null, injector));
        return myOverlayRef;
    }

    createInjector(ref: ModalOverlayRef) {
        const injectorTokens = new WeakMap();
        injectorTokens.set(ModalOverlayRef, ref);
        //return Injector.create({ providers: [{ provide: ModalOverlayRef, useClass: ModalOverlayRef }], parent: this.injector, name: "ref" });

      

        return new PortalInjector(this.injector, injectorTokens);
    }
}