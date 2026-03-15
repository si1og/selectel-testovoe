import { Injectable, signal, computed } from '@angular/core';

interface MenuItem {
  id: number;
  name: string;
  value: number;
  selected: boolean;
}
