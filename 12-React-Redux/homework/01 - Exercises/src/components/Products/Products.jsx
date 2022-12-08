import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import './products.css';
//El componente Card lo exportamos haciendo destructuring para poder testearlo
import Card from '../Card/Card';
import { mapDispatchToProps } from '../Form/Form';
import { getStoreName } from '../../redux/actions/actions';

export function Products(list, getStoreName,storeName) {
   useEffect(()=>{
      getStoreName()
   })

   return (
      <>
         <div className='productsBg'>
            <h1 className='productsTl'>{storeName}</h1>
               {
                  list.length && list.map(products=>{
                     return (
                        <card name={list.name}  price={list.price} id={list.id}/>
                     )
                  })
               }
            <div className='productsList'>
               {/* ¡Renderiza aquí todas tus cards! */}
            </div>
         </div>
      </>
   );
}

export function mapStateToProps(state) {
   return {
      list: state.list,
      storeName:state.storeName,
   }
}

export function mapDispatchToProps(dispatch){
   return{
      getStoreName:()=>{dispatch(getStoreName())}
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
