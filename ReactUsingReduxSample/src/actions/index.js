//TODO:ACTION CREAToR is javascipt function

// TODO: here we have not used export default because
// we want everything from file.

export const selectLibrary = (libraryId) => {
    return {
        type: 'selected_library',
        payload: libraryId
    };
}

