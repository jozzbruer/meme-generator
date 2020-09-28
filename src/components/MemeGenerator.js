import React, { Component } from 'react'

export class MemeGenerator extends Component {
    constructor(){
        super()
        this.state= {
            toptext: '',
            bottomtext: '',
            randomImg: 'http://i.imgflip.com/1bij.jpg5',
            allMemesImgs: []
        }
    }

    componentDidMount (){
        fetch('https:api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(res =>{
            const {memes} = res.data
            console.log(memes[0])
            this.setState({ allMemesImgs: memes })
        })
    }
    render() {
        return (
            <div>
                Meme generator
            </div>
        )
    }
}

export default MemeGenerator
