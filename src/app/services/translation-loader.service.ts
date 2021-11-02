import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from 'prismjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Locale {
  lang: string;
  data: Object;
}



@Injectable({
  providedIn: 'root'
})
export class TranslationLoaderService {
  langList$: Languages[] = [];
  constructor(private _translateService: TranslateService,
    private http: HttpClient,) { }


    loadTranslations(...args: Locale[]): void {
      const locales = [...args];

      locales.forEach((locale) => {
          // use setTranslation() with the third argument set to true
          // to append translations instead of replacing them
          this._translateService.setTranslation(locale.lang, locale.data, true);
      });
  }
    public getLangList(): Observable<Languages[]> {
      if (this.langList$.length > 0) {
          return new Observable(observer => {
              observer.next(this.langList$);
          })
      }
      return this.http.get<Languages[]>('./assets/i18n/languages.json').pipe(
          map((res: Languages[]) => {
              this.langList$ = res
              return this.langList$
          })
      );
  }
}
