import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kaban-list',
  templateUrl: './kaban-list.component.html',
  styleUrls: ['./kaban-list.component.scss'],
})
export class KabanListComponent implements OnInit {
  kabanList: string[] = ['kaban 1', 'kaban 2', 'kaban 4'];

  showFormTitleInput: boolean = false;

  tittleForm = new FormGroup({
    tittle: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}

  openKaban(kaban: string) {
    this.router.navigate(['/kabanRoute']);
  }

  showTittleInput() {
    this.showFormTitleInput = true;
  }

  get tittle() {
    return this.tittleForm.get('tittle');
  }

  submit() {
    if (!this.tittleForm.valid) return;
    const { tittle } = this.tittleForm.value;

    console.log();
    if (!this.kabanList.includes(tittle)) {
      this.kabanList.push(tittle);
      this.router.navigate(['/kabanRoute']);
    }
  }
}
