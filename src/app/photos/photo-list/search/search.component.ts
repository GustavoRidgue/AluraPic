import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() onTyping = new EventEmitter<string>();
  @Input() value: string = '';
  debounce: Subject<string> = new Subject<string>();

  showLoading: boolean = false

  ngOnInit(): void {
    this.debounce
    .pipe(debounceTime(500))
    .subscribe(filter => {
      this.onTyping.emit(filter);
      this.showLoading = false;
    });
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
    this.showLoading = false;
  }

  onSearchChange() {
    this.showLoading = true;
  }
}
