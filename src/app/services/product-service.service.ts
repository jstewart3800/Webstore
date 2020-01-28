import { Injectable } from '@angular/core';
import { ProductInterface } from '../interfaces/product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private productList: ProductInterface[] = [
    {
      id: 1,
      name: 'The Master Sword',
      category: 'Weapon',
      URL: 'TheMasterSword',
      price: 1000000,
      img: 'MasterSwordImage.jpeg'
    },
    {
      id: 2,
      name: 'Megaton Hammer',
      category: 'Weapon',
      URL: 'MegatonHammer',
      price: 5000,
      img: 'MegatonHammer.png'
    },
    {
      id: 3,
      name: '',
      category: 'Weapon',
      URL: '',
      price: ,
      img: ''
    },
    {
      id: 4,
      name: '',
      category: 'Weapon',
      URL: '',
      price: ,
      img: ''
    },
    {
      id: 5,
      name: '',
      category: 'Weapon',
      URL: '',
      price: ,
      img: ''
    },
    {
      id: 6,
      name: '',
      category: 'Weapon',
      URL: '',
      price: ,
      img: ''
    },
    {
      id: 7,
      name: '',
      category: 'Weapon',
      URL: '',
      price: ,
      img: ''
    },
    {
      id: 8,
      name: '',
      category: 'Weapon',
      URL: '',
      price: ,
      img: ''
    },
  ]; //don't leave as string
  constructor() { }
}
