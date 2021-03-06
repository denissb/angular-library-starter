# Angular library starter

This starter is based on [generator-angular2-library](https://www.npmjs.com/package/generator-angular2-library) for Yoman. If you want to use this simply check out the project and replace all occurrences of `angular-library-starter` with the name of your library. **This project is not published to npm as it is intended as a starter**.

## Installation (after publishing to npm)

To install this library after publishing it to npm, run:

```bash
$ npm install angular-library-starter --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install angular-library-starter
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { SampleModule } from 'angular-library-starter' // or name of your library;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    SampleModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<sample-component></sample-component>
```

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run build
```

To watch for changes and then generate `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run watch
```

To generate a UMD bundle:

```bash
$ npm run bundle
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## Testing

To run tests:

```bash
$ npm run test
```
**Warning: remapCoverageReporter currently does not work, seems like a compatability issue - so no coverage reports**


## License

MIT © [denissb](spawnenius@gmail.com)
