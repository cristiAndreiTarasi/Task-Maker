import React, { useState } from 'react';
import ActionIcons from './ActionIcons';
import SortableListContainer from './SortableListContainer';
import { arrayMove } from "react-sortable-hoc";

export default function (state) {
    function onSortEnd({ oldIndex, newIndex }) {
        setTheState(arrayMove(state, oldIndex, newIndex));
    }

    return (
        <SortableListContainer
            state={state}
            onSortEnd={onSortEnd}
        />
    );
}
