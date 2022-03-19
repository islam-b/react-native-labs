import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { TextInput, Title, Button, HelperText } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-native-date-picker'
import { useDispatch, useSelector } from 'react-redux';
import { BooksSelectors } from '../store/selectors/books.selectors';
import { addBook } from "../store/actions/books.actions"

const validationScheme = Yup.object({
    title: Yup.string().required(),
    isbn: Yup.string().required(),
    pageCount: Yup.number().required(),
    thumbnailUrl: Yup.string().required().url(),
    shortDescription: Yup.string(),
    longDescription: Yup.string(),
    publishedDate: Yup.date(),
})

export const NewBook = (props) => {

    const [datePickerOpened, setDatePickerOpened] = useState(false)
    const [submitted, setSubmitted]  = useState(false)

    const disptach = useDispatch()
    const insertStatus = useSelector(BooksSelectors.selectInsertStatus)

    const initialValues = {
        title: '',
        isbn: '',
        thumbnailUrl: '',
        pageCount: '',
        publishedDate: new Date(),
        shortDescription: '',
        longDescription: '',
        authors: [],
        categories: []
    }

    const onSubmit = (values) => {
        setSubmitted(true)
        disptach(addBook({
            book: values
        }))
    }

    useEffect(()=>{ 
        if (submitted && insertStatus=='fullfiled') {
            props.navigation.goBack() 
        } else if (insertStatus=='rejected') {
            setSubmitted(false)
        }
    }, [submitted, insertStatus])

    return <ScrollView>
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationScheme}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <View style={styles.formContainer}>
                    <Title>New book</Title>
                    <TextInput
                        style={styles.input}
                        label="Title"
                        value={values.title}
                        mode="outlined"
                        onChangeText={handleChange('title')}
                    />

                    {errors.title ? <HelperText type="error"  >
                        Title is required
                    </HelperText> : <></>}

                    <TextInput
                        style={styles.input}
                        label="ISBN"
                        value={values.isbn}
                        mode="outlined"
                        onChangeText={handleChange('isbn')}
                    />
                    {errors.isbn ? <HelperText type="error"  >
                        ISBN is required
                    </HelperText> : <></>}

                    <TextInput
                        style={styles.input}
                        label="Thumbnail URL"
                        value={values.thumbnailUrl}
                        mode="outlined"
                        onChangeText={handleChange('thumbnailUrl')}
                    />
                    {errors.thumbnailUrl ? <HelperText type="error"  >
                        URL is not valid
                    </HelperText> : <></>}

                    <TextInput
                        style={styles.input}
                        label="Publish date"
                        value={values.publishedDate ? values.publishedDate.toLocaleDateString('fr') : ''}
                        mode="outlined"
                        onPressIn={() => setDatePickerOpened(true)}
                    />
                    {errors.publishedDate ? <HelperText type="error"  >
                        Publish date is required
                    </HelperText> : <></>}

                    <DatePicker
                        modal
                        open={datePickerOpened}
                        mode="date"
                        date={values.publishedDate}
                        onConfirm={(date) => {
                            values.publishedDate = date
                            setDatePickerOpened(false);
                        }}
                        onCancel={() => {
                            setDatePickerOpened(false)
                        }}
                    />

                    <TextInput
                        style={styles.input}
                        label="Page count"
                        value={values.pageCount}
                        mode="outlined"
                        onChangeText={handleChange('pageCount')}
                    />
                    {errors.pageCount ? <HelperText type="error"  >
                        {errors.pageCount}
                    </HelperText> : <></>}

                    <TextInput
                        style={styles.input}
                        label="Short description"
                        value={values.shortDescription}
                        mode="outlined"
                        numberOfLines={3}
                        multiline={true}
                        onChangeText={handleChange('shortDescription')}
                    />

                    <TextInput
                        style={styles.input}
                        label="Long description"
                        value={values.longDescription}
                        mode="outlined"
                        numberOfLines={10}
                        multiline={true}
                        onChangeText={handleChange('longDescription')}
                    />
                    <Button loading={insertStatus=='pending'} disabled={Object.values(errors) > 0}   icon="check" mode="contained" onPress={handleSubmit}>
                        Save
                    </Button>
                </View>

            )}
        </Formik>
    </ScrollView>
}

const styles = StyleSheet.create({
    formContainer: {
        padding: 16
    },
    input: {
        marginVertical: 8
    }
})