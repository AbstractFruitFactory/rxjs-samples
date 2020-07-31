import { BehaviorSubject } from 'rxjs'
import { expect } from 'chai'

describe('BehaviorSubject', () => {
    it('has a notion of "the current value".', () => {
        const subject = new BehaviorSubject('value')
        expect(subject.value).equals('value')
    })

    it('has the latest value emitted to its consumers.', () => {
        const subject = new BehaviorSubject('value')
        expect(subject.value).equals('value')
        subject.next('new value')
        expect(subject.value).equals('new value')
    })

    it('will immediately send the "current value" to its subscribers, whenever they subscribe.', () => {
        const subject = new BehaviorSubject('value')
        let toBeSet
        const subscriber = value => {
            toBeSet = value
        }
        subject.subscribe(subscriber)
        expect(toBeSet).equals('value')
    })

    it.only('', () => {
        
    })
}) 