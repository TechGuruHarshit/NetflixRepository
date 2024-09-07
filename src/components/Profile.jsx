function Profile() {
    return (
        <div>
        <h1>Profile Card Challenge</h1>
        <ProfileCard
        name="Alice"
        age={30}
        greeting={
        <div>
        <strong>Hi Harshit, wonderful day!</strong>
        </div>
        }
        >
        <p>Hobbies: Reading, Hiking</p>
        <button>Contact</button>
        </ProfileCard>
        <ProfileCard
        name="Bob"
        age={25}
        greeting={
        <div>
        <strong>Hi Bob, keep up the great work!</strong>
                    </div>
                }
        >
                <p>Hobbies: Gaming, Cooking</p>
                <button>Contact</button>
        </ProfileCard>
        </div>
    );
};
export default Profile;
function ProfileCard(props) {
    //console.log(props);
    return (
        <>
        <h1>Name:{props.name}</h1>
        <p>Age:{props.age}</p>
        <p>{props.greeting}</p>
        <div>{props.children}</div>
        </>
    );
}