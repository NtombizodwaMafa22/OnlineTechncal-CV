import React , { useState } from 'react';
import Card from '../components/card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'

class carousel extends React.Component{

    constructor(props){
        super(props);
        this.state={
            items:[
                {
                    id:0,
                    title:'Java programming',
                    subtittle:'Basics',
                    imgSrc:'/images/javapic.png',
                    selected:false,
                    link : 'https://github.com/NtombizodwaMafa22/Java-Projects.git'
                },
                {
                    id:1,
                    title:'C# .Net Programming',
                    subtittle:'Web Developemnt and Windows Application',
                    imgSrc:'/images/cpicture.png',
                    selected:false,
                    link:'https://github.com/NtombizodwaMafa22/C-Sharp-Projects.git'
                },
                {
                    id:2,
                    title:'Java Script',
                    subtittle:'Game Development',
                    imgSrc:'/images/javascript.jpg',
                    selected:false,
                    link: 'https://github.com/NtombizodwaMafa22/Javascript-Projects.git'
                },
                {
                    id:3,
                    title:'React',
                    subtittle:'Front end Web Development',
                    imgSrc:'/images/react.png',
                    selected:false,
                    link: 'https://github.com/NtombizodwaMafa22/OnlineTechncal-CV.git'
                }
            ]
        }
    }

    handleClick = (id, card) =>{
        let items = [...this.state.items];
        items[id].selected =  true;
        items.forEach(item =>{
            if(item.id !== id){
                items.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) =>{
        return items.map(item => {
            return <Card item={item} click={(e => this.handleClick(item.id,e))} key={item.id} />
        })
    }

    render(){
        return(
            <Container  fluid={true}>
                <Row className="justify-content-around"> 
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default carousel;