import { Component } from "react";
import { Controls } from "./Controls";
import { Progress } from "./Progress";
import { Publication } from "./Publication";

const LS_KEY = 'reader_item_index';

export class Reader extends Component{
    state = {
        index: 0,
    };
       
    changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
    };

    componentDidMount = () => {
        // console.log(localStorage.getItem(LS_KEY))
        const savedState = localStorage.getItem(LS_KEY);
        if (savedState) {
            this.setState({ index: Number(savedState) });
        }
        
    }
    

    componentDidUpdate = (prevProps, prevState) => {
    if (prevState.index !== this.state.index) {
        // console.log('UPDATE')
        localStorage.setItem(LS_KEY, this.state.index)
    }
  
}

    // onPrev = () => {
    //     this.setState(state => ({index: state.index - 1}))
    // }

    // onNext = () => {
    //     this.setState(state => ({index: state.index + 1}))
    // }
     
    render() {
        const { index } = this.state;
        const { items } = this.props;      
        const currentItem = items[index];
        const totalItems = items.length;

         return (
      <div>
        <Controls
          current={index + 1}
          total={totalItems}
          onChange={this.changeIndex}
        />
        <Progress current={index + 1} total={totalItems} />
        <Publication item={currentItem} />
      </div>
    );
    }
}