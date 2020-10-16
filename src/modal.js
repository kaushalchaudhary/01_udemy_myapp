import React, { useState } from 'react';
import { Text, View, StyleSheet,Button, Modal } from 'react-native';


const ModalComponent = () => {
    const [modal,setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
    }

    return(
        <View>
            <Modal
                visible={modal}
                animationType={'fade'}
                onShow={()=> alert('showing')}
                //transparent={true}
            >
                <View style={{marginTop:50}}>
                    <Text>My modal component</Text>
                </View>
                <Button
                    title="close it"
                    onPress={handleModal}
                />
            </Modal>
            <Button
                title="Open modal"
                onPress={handleModal}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ModalComponent;