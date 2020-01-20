import React,{ Component } from 'react'
import axios from 'axios'
import './LandingPage.css'
import Input from '../Input/Input'
import Card from '../Card/Card'


class LandingPage extends Component{

    //Creating the states and init the values
    constructor(){
        super()
        this.state = {
            courseData:[],
            data : [],
            result :[],
            loading:false,
            cityName:"",
            isPresent:false,
            clickMe : [],
            post:false
        }
    }

    //Using the class life cycle method calling the app and getting the required data
    componentDidMount(){
        this.setState({loading : true})
        axios.get('https://cors-anywhere.herokuapp.com/https://nut-case.s3.amazonaws.com/coursessc.json',{
            headers:{
                "Access-Control-Allow-Origin":"*",
            }
        })

        //Once after getting the api setting the obtained result to the states using the setState method
        .then(res => this.setState({
            data : res.data,
            loading : false,
            post:!this.state.post
        }))

        //data is large like 4995 so taking only 10
        .then(res => {
            let data = new Array(10)  
            for(let i = 0;i<10;i++) { 
                data[i] = this.state.data[i]
            }
            let course = {}
            course.data = data
            console.log(course);
            this.setState({
                courseData:data
            })
            //sending the data to server using axios
            axios.post("http://localhost:8000/api/add",course)
        })

        //Catch statement to catch the errors
        .catch(err => console.log(err))
    }

    //Method to update the state value
    setResult = (result) => {
        this.setState({
            result
        }) 
    }

    //Method to update the state value
    setLoading = () => {
        this.setState({
            loading : !this.state.loading
        })
    }


    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    //This is the code for fetching weather datas
    // handleSubmit = () => {
    //     this.setState({
    //         isLoading:!this.state.isLoading
    //     })
    //     axios.get('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q='+this.state.cityName+'&appid=32c1955a9aeef50cf4669db5dd1cd839&units=metric',{
    //         headers:{
    //             "Access-Control-Allow-Origin":"*",
    //         }
    //     })
    //     .then(res => this.setState({
    //         data : res.data,
    //         loading : false ,
    //         isPresent:true
    //     }))

    //     .catch((err) => {
    //         console.log(err)
    //     })
    // }

    //Method to update the state value
    setLoading = (clickMe) => {
        this.setState({
            loading : !this.state.loading
        })
    }

    //Here am trying to get what value is clicked
    setDataSet = (dataa) => {
        console.log("hey");        
        this.setState({
            clickMe:dataa
        })
    }

    //Render method to print weather data

    // render(){
    //     return(
    //         <div>
    //             <form>
    //                 <input type="text" 
    //                     className="frmField" 
    //                     placeholder="City Name" 
    //                     name = "cityName"  
    //                     autoComplete = "off"
    //                     value={this.state.cityName} 
    //                     onChange = {event => this.handleChange(event)}
    //                 />
    //                 <button type="button" className = "frmBtn"  onClick = {this.handleSubmit}> Search </button>
    //             </form>
    //             {/* {this.state.loading ?
    //                 (
    //                     <h1>....loading</h1>
    //                 )
    //                 :
    //                 (null)
    //             }
    //             { this.state.isPresent ?
    //                 (
    //                     //passing state as props
    //                     <Display data={this.state.data} setLoading={this.setLoading} />
    //                 )
    //                 :
    //                 (null)
    //             } */}
    //         </div>
    //     )
    // }

    render(){
        //for testing purpose
        console.log(this.state.clickMe);
        console.log(this.state.data);
        
        const { data,result,loading} = this.state
        let listItems = result.length > 0 ? result : data
        let displayList = listItems.map(list => <Card setDataSet = {this.setDataSet} key={list["Course Id"]} list={list} click = {this.state.clickMe}/>)
        return (
            <div>
                {this.state.post ?
                    (
                        <div className="input">
                            <button className="button" onClick={this.state.sendToServer}> Send To Server </button>
                        </div>
                    )
                    :
                    (
                    null
                    )}
                
                <Input data={ data } setResult={this.setResult} setLoading={this.setLoading} />
                {
                    loading ? (<h1 className = "loading"> ...loading</h1>)
                    :
                    <div className="cardHolder">
                        {
                            displayList
                        }
                    </div>
                }
            </div> 
        )
    }
}

export default LandingPage