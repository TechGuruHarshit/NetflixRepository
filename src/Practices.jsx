export const Practices = () => {
    const students=[55];
    // console.log(Boolean(students.length));
    // console.log(students.length);
    return (
        <>
        <p>{students.length && "No students found"}</p>
        <p>Number of students:{students.length}</p>
        </>
    );
};