import image1 from './assets/img_1.png'
import image2 from './assets/img_2.png'
import image3 from './assets/img_3.png'
import image4 from './assets/img_4.png'
import { FeatureComponentProps } from './feature/index'

export default [
    {
        image: image1,
        heading: 'Sign Language Recognition',
        description: 'Interpret and translate sign language gestures into Voice during video chat',
        bg_color: '#3f3f3f',
    }, {
        image: image2,
        heading: 'Build Community',
        bg_color: '#947115',
        description: 'Group Conversation made simple.Support group chats to allow multiple users to communicate together.',
    }, {
        image: image3,
        heading: 'Sign Talk Privately',
        description: 'All the conversations are end-to-end encrypted and not stored on our servers.',
        bg_color: '#806bbd',
    }, {
        image: image4,
        heading: 'More Accessibility',
        description: 'Our app is designed to contribute in making the world more accessible by enabling mute people to communicate with others through video chats!',
        bg_color: '#55c486',
    }
] as FeatureComponentProps[]

