import { startWith, endWith } from 'rxjs/operators';
import { of } from 'rxjs';

//  startWith, endWith
const source = of(1, 2, 3);

const example1 = source.pipe(startWith(0));

const example2 = source.pipe(endWith(4));

// Başlangıç (ilk) değerine 0 ata
const subscribe1 = example1.subscribe((val1) =>
  console.log('Subscribe1:', val1)
);

// Son değerine 0 ata
const subscribe2 = example2.subscribe((val2) =>
  console.log('Subscribe2:', val2)
);

const sourceStrS = of('Alya', 'Ada', 'Birsel');
sourceStrS.pipe(endWith('Epik')).subscribe((val3) => console.log(val3));

const sourceStrE = of('Alya', 'Ada', 'Birsel');
sourceStrE.pipe(startWith('Derin')).subscribe((val4) => console.log(val4));
