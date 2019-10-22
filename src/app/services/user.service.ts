import { Injectable } from '@angular/core';

import { Transaction } from '../models/transaction-model';
import { User } from '../models/user-model';
import { BookstoreService } from './bookstore.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private bankAccount = 1500;

  constructor(private bookstoreService: BookstoreService) {}

  public addMoneytoWallet(user: User): void {
    user.wallet.currentCash += this.bankAccount;
    console.log('dodano środki z Banku');
  }

  public buyBookAsGift(
    userBuying: User,
    userReceiving: User,
    transaction: Transaction
  ): void {
    if (userBuying.wallet.currentCash >= transaction.book.price) {
      userReceiving.boughtBooks.push(transaction.book);
      userBuying.wallet.currentCash -= transaction.book.price;
    }
  }
}
