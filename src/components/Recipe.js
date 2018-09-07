import React, { Component } from 'react';
import { getAlcohol } from './Axios';
import './../partials/_recipe.scss';

class Recipe extends Component {
  constructor(){
    super();
    this.state = {
      bar: []
    }
  }
  
  componentDidMount(){
    this.getLcbo();
  }

  getLcbo = () => {
    const bar = []
    if(this.props.alcohol === 'vodka') {
      getAlcohol(this.props.alcohol, 'regular_price_in_cents.asc', 2).then((res) => {
        bar.push(res[0]);
      })
      getAlcohol(this.props.alcohol, 'regular_price_in_cents.desc').then((res) => {
        bar.push(res[0]);
      })
    } else {
      getAlcohol(this.props.alcohol, 'regular_price_in_cents.asc').then((res) => {
        bar.push(res[0]);
      })
      getAlcohol(this.props.alcohol, 'regular_price_in_cents.desc').then((res) => {
        bar.push(res[0]);
      })
    }
    // console.log(bar);
  }

  render(){
    const instructions = this.props.recipe.ingredientLines
    return(
      <section className="recipe">
        <h2 className="h2">{this.props.recipe.name}</h2>
  
        <div className="recipe__description">
          <ul>
            {instructions ? instructions.map((ingredient) => {
              return (<li key={this.props.recipe.id} >{ingredient}</li>)
            }): null} 
          </ul>
        </div>
  
        <div className="recipe__alcoholInfo">
          <figure className="alcoholInfo__box">
          {/* product picture */}
            <figcaption>
              <a href="/">basic</a>
            </figcaption>
          </figure>
  
          <figure className="alcoholInfo__box">
            {/* product picture */}
            <figcaption>
              <a href="/">expensive</a>
            </figcaption>
          </figure>
        </div>
  
        <button className="btn">Try again</button>
      </section>
    )
  }

}

export default Recipe;