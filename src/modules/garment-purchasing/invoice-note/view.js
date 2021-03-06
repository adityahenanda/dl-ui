import { inject, Lazy } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { Service } from './service';


@inject(Router, Service)
export class View {
    hasCancel = true;
    hasEdit = true;
    hasDelete = true;

    totalData = 0;
    size = 5;
    items = [];

    constructor(router, service) {
        this.router = router;
        this.service = service;

    }

    async activate(params) {
        var id = params.id;
        this.data = await this.service.getById(id);
        this.supplier = this.data.supplier;
        this.currency = this.data.currency;
        this.vat = this.data.vat;

        this.items = this.data.items;
        this.totalData = this.items.length;
        if(this.data.hasInternNote ){
            this.hasEdit = false;
            this.hasDelete = false;
        }
    }

    cancel(event) {
        this.router.navigateToRoute('list');
    }

    edit(event) {
        this.router.navigateToRoute('edit', { id: this.data._id });
    }

    delete(event) {

        var itemTemp = [];
        for (var i = 0; i < this.size; i++) {
            if (this.items[i] != undefined) {
                itemTemp.push(this.items[i]);
            }
        }
        this.data.items = itemTemp;
        this.items = this.items.slice(itemTemp.length);

        this.service.delete(this.data).then(result => {
            if (this.size < this.totalData) {
                this.size += this.size;
                this.delete(event);
            }
            this.cancel();
        });
    }
}
