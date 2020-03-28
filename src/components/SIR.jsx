import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import {format} from 'date-fns';
import Corona from './Img/corona.png';

const Wrapper = styled.div `
width: 100%;
padding: 15px;
max-width: 1400px;
margin: 0 auto;
min-height: 95.5vh;
display: flex;
flex-direction: column;
align-items: center;
position: relative;

&:after {
    content: '';
    background-size: cover;
    background-image: url(${Corona});
    opacity: 0.3;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index:-1;
}

`;

const Title = styled.div `
display: flex;
justify-content: center;
font-size: 60px;
margin-bottom: 15px;
font-weight: 700;
color: yellow;
text-shadow: black 3px 3px 1px;

`;

const Discription = styled.div `
margin-bottom: 15px;
padding: 10px;
display: flex;
justify-content: center;
font-size: 40px;
text-align: center;
font-weight: 600;
`;

const DateBlock = styled.div `
display: flex;
justify-content: center;

`;

const Input = styled.input `
    width: 260px;
    height: 40px;
    font-size: 30px;
    border: 1px solid black;
    text-align: center;

    &:focus {
        outline-color: yellow;
    }
`;

const Button = styled.div `
    height: 38px;
    width: 100px;
    font-size: 26px;
    text-align: center;
    border: 3px solid black;
    border-radius: 12px;
    margin-left: 15px;
    padding: 0 5px;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        background: rgba(255, 255, 0, 0.7);
    }
`;

const HiddenBlock = styled.div `
margin: 15px;
display: flex;
flex-direction: column;
`;

const Greeting = styled.div `
display:flex;
justify-content:center;
font-size: 50px;
margin-bottom: 5px;
font-weight: 700;
color: yellow;
text-shadow: black 3px 3px 1px;
`;

const ResultBlock = styled.div `
font-size: 40px;
padding: 10px;
display:flex;
justify-content:center;
text-align: center;
font-weight: 500;
`;

const firstSentence = [
    'Сегодня отличный день, чтобы выучить наизусть путь Кровать-Холодильник-Кровать.',
    'Если вы ждали знака от Вселенной, чтобы наконец взяться за проект, который давно откладывали - это он!',
    'Идеальное время для того, чтобы разобрать все старые вещи и хорошенько убраться дома.',
    'Это лучший день для того, чтобы весь день играть в видеоигры и не испытывать чувства вины.',
    'Звезды говорят: сегодня лучший день для просмотра сериалов нон-стоп.',
    'Спорт - вот ключ к сегодняшнему спокойствию.',
    'Время задуматься о том, что карантин пройдет, а отношение останется.',
    'Сегодняшний день лучше всего провести в постели с любимым человеком.'
];

const secondSentence = ['Но поберегите свою спину.',
'Не увлекайтесь печеньками и газированными напитками - аукнется...',
'Пейте больше воды и избегайте сильно соленой пищи.',
 'Не забывайте давать отдых глазам.',
 'Устройте диджитал-детокс - никаких соцсетей, тревожных новостей и мемов.',
 'Даже не думайте о пикниках, лучше позвоните друзьям в Скайп.',
 'Проверьте своих островитян в Amimal Crossing, потрубим?',
 'Но помните - чем больше вы едите, тем больше нужно двигаться.',

];

const thirdSentence = [
'И оставайтесь дома.',
'А дома всегда лучше.',
'Будьте ответственными и оставайтесь дома.',
'А постить фотки #stayhome нужно из дома.',
'Потерпите еще немного, скоро обязательно можно будет пойти погулять.',
'Все мы скучаем по родным и близким, но пока мы все дома, так безопаснее.',
'Карантин закончится, а отношение останется.',
'Закажите вкусной еды и оставайтесь дома.'
]

const randomIndex = () => {
    return Math.floor(Math.random() * Math.floor(8));
}

export const SIR = () => {
    const [dateStr, setDate] = useState("");
    const [sign, setSign] = useState('');
    const [showPage, setShowPage] = useState(false);
    const getSign = () => {
        const date = new Date(dateStr);
        const dayMonth = Number(format(date, 'MM'));
        const dayNumber = Number(format(date, 'dd'))
        
        if((dayNumber>=21 && dayMonth===3) || (dayNumber<=20 && dayMonth===4)) {
                setSign('Дорогой Овнишка')
        }
        else if ((dayNumber>=21 && dayMonth===4) || (dayNumber<=20 && dayMonth===5)) {
            console.log(dayMonth)
            setSign('Дорогой Телец-молодец')
        }
        else if ((dayNumber>=21 && dayMonth===5) || (dayNumber<=20 && dayMonth===6)) {
            setSign('Дорогой Близняшка')
        }
        else if ((dayNumber>=21 && dayMonth===6) || (dayNumber<=22 && dayMonth===7)) {
            setSign('Дорогой Рак')
        }
        else if ((dayNumber>=23 && dayMonth===7) || (dayNumber<=22 && dayMonth===8)) {
            setSign('Дорогой Львёнок')
        }
        else  if ((dayNumber>=23 && dayMonth===8) || (dayNumber<=22 && dayMonth===9)) {
            setSign('Дорогая Дева')
        }
        else if ((dayNumber>=23 && dayMonth===9) || (dayNumber<=22 && dayMonth===10)) {
            setSign('Дорогие Весы')
        }
        else if ((dayNumber>=23 && dayMonth===10) || (dayNumber<=22 && dayMonth===11)) {
            setSign('Дорогой Скорпиончик')
        }
        else if ((dayNumber>=23 && dayMonth===11) || (dayNumber<=21 && dayMonth===12)) {
            setSign('Дорогой Срелец-удалец')
        }
        else if ((dayNumber>=22 && dayMonth===12) || (dayNumber<=19 && dayMonth===1)) {
            setSign('Дорогой Козерожка')
        }
        else if ((dayNumber>=20 && dayMonth===1) || (dayNumber<=19 && dayMonth===2)) {
            setSign('Дорогой Водолей')
        }
        else if ((dayNumber>=20 && dayMonth===2) || (dayNumber<=20 && dayMonth===3)) {
            setSign('Дорогие Рыбки')
        }
        else {
            alert('Попробуй еще...')
        }

        setDate('')
        setShowPage(true);

    }

    return(
        <Wrapper>
            <Title>Твой личный короновирусный гороскопчик</Title>
            <Discription>В тяжелые вирусные времена как никогда нужна уверенность в своем будущем..Как быть? Введи дату своего рождения и все станет ясно как день!</Discription>
            <DateBlock>
            <Input
                type="date"
                name="date"
                onChange={e => setDate(e.target.value)}
                value={dateStr}
                onFocus={() => setShowPage(false)}
            />
            <Button type="button" onClick={() => getSign()}>Узнать!</Button>
            </DateBlock>
            {sign && showPage ? (
                <HiddenBlock>
                <Greeting>{sign}!</Greeting>
            <ResultBlock>{firstSentence[randomIndex()]} {secondSentence[randomIndex()]} {thirdSentence[randomIndex()]}</ResultBlock>
                </HiddenBlock>
            ) : null}
            
            
            </Wrapper>
    )
}