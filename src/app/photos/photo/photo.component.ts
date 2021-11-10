import { Component, Input } from "@angular/core";

@Component({
  // Nome da tag/seletor do component
  selector: 'ap-photo',
  // Nome do html do componente
  templateUrl: 'photo.component.html'
})
export class PhotoComponent {
  title = 'AluraPic';
  // @Input() permite receber valores na hora que o ap-photo é chamado
  @Input() url = '';
  @Input() description = '';
}
