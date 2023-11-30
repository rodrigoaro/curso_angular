import { animate, animation, state, style, transition, trigger, useAnimation } from "@angular/animations";


export const transitionAnimation = animation([
    animate('{{ time }}'),
    style({ 
        height: '{{ height }}',
        opacity: '{{ opacity }}',
        backgroundColor: '{{ backgroundColor }}'
    })
])

export const openClose = trigger('openClose', [
    //state('open', style({ height: '200px', opacity: 1, backgroundColor: 'yellow' })),
    //state('closed', style({ height: '100px', opacity: 0.8, backgroundColor: 'blue' })),
    //transition('open => closed', [ animate('1s')]),
    transition('open => closed', [
                                    style({ height: '200px', opacity: 1, backgroundColor: 'yellow' }),
                                    useAnimation(transitionAnimation, 
                                        { params: { time: '1s', height: '100px', opacity: 0.8, backgroundColor: 'blue'}})
                                ]),
    //transition('closed => open', [ animate('0.2s')]),
    transition('closed => open', [
                                    style({ height: '100px', opacity: 0.8, backgroundColor: 'blue' }),
                                    useAnimation(transitionAnimation, 
                                        { params: { time: '0.2s', height: '200px', opacity: 1, backgroundColor: 'yellow'}})
                                ]),
]);

