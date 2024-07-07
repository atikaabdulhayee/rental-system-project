import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const styles = StyleSheet.create({
    headerImage: {
      color: '#808080',
      bottom: -90,
      left: -35,
      position: 'absolute',
    },
    titleContainer: {
      flexDirection: 'row',
      gap: 8,
    },
  });
  

export default function ReportView() {
    return (
        <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
            <ThemedText>This page will be used for Report view
            This page will be used for Report view
            This page will be used for Report view
            v
            v
            This page will be used for Report view
            This page will be used for Report view
            This page will be used for Report view
            This page will be used for Report view
            v
            This page will be used for Report view
            This page will be used for Report view
            This page will be used for Report view
            This page will be used for Report view
            </ThemedText>
        </ParallaxScrollView>
    )
}