import React, { Component } from 'react'

class MemeGenerator extends Component {
    state = {
                toptext: '',
                bottomtext: '',
                randomImg: 'http://i.imgflip.com/1bij.jpg',
                allMemesImgs: []
            }
    // constructor(){
    //     super()
    //     this.state= {
    //         toptext: '',
    //         bottomtext: '',
    //         randomImg: 'https://i.imgflip.com/1bij.jpg',
    //         allMemesImgs: []
    //     }

    //    // this.handleChange = this.handleChange.bind(this)
    //     // this.handleSubmit = this.handleSubmit.bind(this)
    // }

    handleChange = (e) =>{
        const {name, value} = e.target
        this.setState({
            [name]:value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const random = Math.floor(Math.random() * this.state.allMemesImgs.length)
        const randomMemeImg = this.state.allMemesImgs[random].url
        this.setState({ randomImg: randomMemeImg })
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
               <form className='meme-form' onSubmit={this.handleSubmit}>
                <input name='toptext' value={this.state.toptext} onChange={this.handleChange} type='text' placeholder='Top Text' />
                <input name='bottomtext' value={this.state.bottomtext} onChange={this.handleChange} type='text' placeholder='Top Text' />
                <button>Generate</button>
               </form>

               <div className='meme'>
                   <img src={this.state.randomImg} alt=''/>
                   <h2 className='top'>{this.state.toptext}</h2>
                   <h2 className='bottom'>{this.state.bottomtext}</h2>
               </div>
            </div>
        )
    }
}

export default MemeGenerator
