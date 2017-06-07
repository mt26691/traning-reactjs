import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';
import registerServiceWorker from './registerServiceWorker';
import Clock from './Clock';
import ConditionRendering from './ConditionRendering';
import DisplayList from './DisplayList';
import BoilWater from './BoilWater';
import Calculator from './Calculator';

ReactDOM.render(
    <div>
        <Welcome name="bimbim" />
        <Calculator />
    </div>
    , document.getElementById('root'));
registerServiceWorker();
