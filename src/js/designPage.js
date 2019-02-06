import React, {Component} from 'react';
import '../styles/designPage.css'
import '../styles/settings.css'
import Button from './Button'

class Design extends Component {
    render() {
        return (
            <div className="design">
                <section id={'section1'}>
                    <div className="title-box ps-top-to-bottom">
                        <h1 className='white-text title1'>ДИЗАЙН ИНТЕРЬЕРА</h1>
                        <p className='white-text'>Сделам Ваш интерьер стильным и уютным</p>
                        <Button white={true} value="ПОЛУЧИТЕ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ" classes={'title-btn'}/>
                    </div>
                </section>
                <section id={'section2'}>
                    <h1 className={'title'}>Наши работы</h1>
                    <div>
                        <div className={'row'}></div>
                        <div className={'row'}></div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Design;