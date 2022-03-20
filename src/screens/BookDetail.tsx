import React from 'react'
import { ScrollView, StyleSheet, Image, View } from "react-native"
import { Title, Paragraph, Caption, Subheading, Chip } from "react-native-paper"
import { BookDto } from '../data/dtos/book'

export const BookDetail: React.FC<BookDetailPropType> = (props:BookDetailPropType) => {
    let book = props.route.params.book as BookDto
    return <ScrollView style={styles.container}>
        <Title style={styles.title}>{book.title}</Title>

        <View style={styles.coverContainer}>
            <Image style={styles.cover} source={{
                uri: book.thumbnailUrl
            }} />
        </View>
        <Caption style={styles.authors}>
            {book.authors.join(', ')}
        </Caption>
        <Caption style={styles.publishDate}>
            {book.publishedDate}
        </Caption>

        <Subheading style={{ marginTop: 16 }}>
            Categories
        </Subheading>
        <View style={styles.chipsContainer}>
            {book.categories.map(category => <Chip style={{marginHorizontal: 2}}>{category}</Chip>)}
        </View>
 
        <Subheading style={{ marginTop: 16 }}>
            Description
        </Subheading>
        <Paragraph style={{ textAlign: 'justify' }}>{book.longDescription}</Paragraph>
    </ScrollView >
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    title: {
        textAlign: 'center'
    },
    cover: {
        height: 200,
        aspectRatio: 3 / 4
    },
    coverContainer: {
        margin: 16,
        justifyContent: 'center',
        display: "flex",
        alignItems: 'center'
    },
    authors: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    publishDate: {
        textAlign: 'center'
    },
    chipsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})

interface BookDetailPropType { 
    route: any;
}