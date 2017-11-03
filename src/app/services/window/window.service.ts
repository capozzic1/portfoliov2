import { Injectable } from '@angular/core';

export class WindowRef {
  constructor() { }

  getNativeWindow() {
    return window;
  }
}
