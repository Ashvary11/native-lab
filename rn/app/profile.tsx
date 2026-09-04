import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Profile() {
  return (
    <View>
      <Text>profile</Text>
        <Link href="/">Go Back</Link>
    </View>
  )
}