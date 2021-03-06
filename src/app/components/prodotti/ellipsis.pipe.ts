import {Pipe, PipeTransform} from "angular2/core";

@Pipe({
    name: 'ellipsis'
})
export class EllipsisPipe {
    transform(val, args) {
        if (args === -1) {
            return val;
        }
        if (val.length > args) {
            return val.substring(0, args) + '...';
        } else {
            return val;
        }
    }
}
