import React from 'react'
import { View, Image, StyleSheet, Dimensions, ScrollView, Text } from "react-native"
import { ASSETS } from '../assets'
import { Headline, Caption, TextInput, Button, HelperText } from "react-native-paper"
import { Formik } from 'formik'
import * as Yup from "yup"
import { loginAction } from '../store/actions/auth.actions'
import { useDispatch, useSelector } from "react-redux"
import { AuthSelectors } from '../store/selectors/auth.selectors'
import { t } from 'i18n-js'

const validationScheme = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required()
})

export const Login = (props) => {
    const [text, setText] = React.useState("");
    const [passVisible, setPassVisible] = React.useState(false);
    const dispatch = useDispatch()
    const isLoading = useSelector(AuthSelectors.selectLoading)

    const initialValues = {
        email: 'demo@rn.com',
        password: 'Demo@123'
    }

    const onSubmit = (values) => {
        dispatch(loginAction({
            email: values.email,
            password: values.password
        }))
    }

    return <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.heading}>
            <Image style={styles.avatar} source={ASSETS.avatar} />
            <Headline>{t('hello')}</Headline>
            <Caption>Sign in to continue</Caption>

        </View>
        <View style={styles.formContainer}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationScheme}
                onSubmit={onSubmit}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            label="Email"
                            value={values.email}
                            onChangeText={handleChange('email')}
                            left={<TextInput.Icon name="email" />}
                        />
                        {errors.email ? <HelperText type='error'>
                            {errors.email}
                        </HelperText> : <></>}
                        <TextInput

                            style={styles.input}
                            label="Password"
                            value={values.password}
                            onChangeText={handleChange('password')}
                            secureTextEntry={!passVisible}
                            left={<TextInput.Icon name="lock" />}
                            right={<TextInput.Icon onPress={() => setPassVisible(!passVisible)} name={passVisible ? 'eye-off' : 'eye'} />}
                        />
                        {errors.password ? <HelperText type='error'>
                            {errors.password}
                        </HelperText> : <></>}
                        <Button loading={isLoading} style={styles.submit} icon="check" mode="contained"
                            onPress={handleSubmit}>
                            Login
                        </Button>

                    </View>
                )}
            </Formik>
        </View>

    </ScrollView >

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        flexDirection: 'column',
        height: Dimensions.get('window').height,
        padding: 16,
    },
    avatar: {
        aspectRatio: 1 / 1,
        height: 120
    },
    heading: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 36
    },
    input: {
        marginVertical: 8
    },
    submit: {
        marginVertical: 16
    }
})
