import React, { useRef } from 'react';
import '../components_css/main.css';
import CoinCard from './CoinCard';
import { useSelector, useDispatch } from 'react-redux';

let Main = (props) => {
    let allCoins = useSelector(state => state.allCoins);
    let dispatch = useDispatch();

    const id_input_amount = useRef();

    let changeAmountOfData = () => {
        dispatch({ type: "FETCH_DATA", payload: { amount: id_input_amount.current.value } });
    }

    return (

        <main className="container-fluid">
            <div className="container">
                <div className="row pt-3 pl-3 pr-3 justify-content-between">
                    <h4>Our list</h4>

                    <div className="form-group">
                        <input type="number" min="1" max="100" ref={id_input_amount} className="form-control"
                            disabled={allCoins.length === 0} onInput={changeAmountOfData} defaultValue="10" placeholder="Results" />
                    </div>
                </div>
                <div>
                    {
                        allCoins.length === 0 ?
                            <div className="row justify-content-center">
                                <div className="spinner-border text-success" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                            :
                            <div className="row justify-content-left align-items-left pl-3 pr-3 pb-3">
                                {allCoins.map((item) => (<CoinCard key={item.id} id={item.id} />))}
                            </div>
                    }
                </div>
                <div className="row pt-3 pl-3 pr-3 justify-content-left">
                    <h4>A bit more</h4>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas libero nunc, vitae luctus magna placerat non. Vivamus ac suscipit justo. Aliquam fringilla erat nec pellentesque faucibus. Duis tincidunt dui eget sapien vehicula congue. In sed semper ex. Nam semper eros eu enim scelerisque accumsan. Donec mi felis, bibendum nec lobortis eu, finibus at turpis. Vestibulum lobortis tellus non molestie elementum. Quisque placerat ipsum in ante feugiat, at sollicitudin est bibendum.
                    </p>

                    <p>
                        Vestibulum pharetra odio non eros gravida, vitae suscipit justo maximus. Phasellus quis condimentum risus, eget placerat purus. Phasellus eget sem aliquet, aliquam turpis nec, semper nisl. Nulla facilisis mollis maximus. Proin a dolor sed ante finibus volutpat vel vitae risus. Phasellus luctus hendrerit ipsum tempor vulputate. Integer dui turpis, egestas ac viverra ac, aliquet id sapien. Nunc tincidunt quam et sem faucibus, a gravida mi semper. Nullam vestibulum interdum ligula, quis scelerisque lectus porttitor vitae. Mauris vel lacus a metus posuere dictum. Donec vitae nisi fringilla, egestas risus nec, dapibus arcu. Maecenas sagittis rhoncus mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed placerat magna eu porttitor commodo.
                    </p>
                </div>
            </div>
        </main>

    );
};

export default Main;