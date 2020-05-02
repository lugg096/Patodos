import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()
export class ErrorHandlingService implements ErrorHandler {

  constructor() { }

  handleError(error: any): void {

    if (error instanceof Error) {
      console.log(error);
    }

  }
}
