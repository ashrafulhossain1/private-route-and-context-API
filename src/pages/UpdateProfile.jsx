import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthComponent';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ViewProfile from '../components/ViewProfile';

const UpdateProfile = () => {

    const { UpdateNameAndPhoto, user } = useContext(AuthContext)

    const handleUpdateProfile = (e) => {
        // e.preventDefault()

        const displayName = e.target.name.value;
        const photoURL = e.target.photo.value || user.photoURL;;

        const profileInfo = {
            displayName,
            photoURL
        }

        UpdateNameAndPhoto(profileInfo)
            .then(() => {
                console.log('hoyse re')
            })
            .catch(error => {
                console.log('mistake ho gaye', error)
            })
    }

    return (
        <div className='max-w-md mx-auto'>

            <Tabs>
                <TabList>
                    <Tab>Update Profile</Tab>
                    <Tab>View Profile</Tab>
                </TabList>

                <TabPanel>
                    <div>
                        <form onSubmit={handleUpdateProfile}>
                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="name" placeholder="Name" className="input input-bordered" />
                            </div>

                            {/* Profile Picture */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit Update</button>
                            </div>
                        </form>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        {
                            user && <ViewProfile user={user}></ViewProfile>
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default UpdateProfile;