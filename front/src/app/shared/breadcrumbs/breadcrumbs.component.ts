import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  public label = '';
  public redirect = '';
  public showHeader = false;

  constructor(private router: Router,
    public title: Title,
    public meta: Meta) {
      this.getRoute();
    }

  ngOnInit() {
    
  }

  private getRoute() {
    this.getDataRoute()
      .subscribe(data => {

        if (data.titulo !== undefined) {
          this.showHeader = true;
        }

        this.label = data.titulo;
        this.redirect = data.redirect;
        this.title.setTitle(this.label);

        let metaTag: MetaDefinition = {
          name: 'description',
          content: this.label
        };

        this.meta.updateTag(metaTag);
      });
  }

  private getDataRoute() {
    return this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.data)
    );
  }

}
