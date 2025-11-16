// lib/gallery-data.ts

export interface GalleryItem {
  id: number
  year: number
  title: string
  media: string
  thumbnail?: string
  type: 'image' | 'video'
  description: string
}

export const galleryData: GalleryItem[] = [
 

  // 2024 Media
  { 
    id: 1181, 
    year: 2024, 
    title: "Puja Preparation", 
    media: "/images/2024/collage-saraswatipuja-2024-preparation.webp", 
    type: 'image',
    description: "Morning preparations and decoration work"
  },
  
  { 
    id: 1182, 
    year: 2024, 
    title: "Puja Preparation", 
    media: "/images/2024/collage-saraswatipuja-2024.webp", 
    type: 'image',
    description: "Morning preparations and decoration work"
  },
  
  { 
    id: 1011, 
    year: 2024, 
    title: "Pushpanjali Ceremony", 
    media: "/images/2024/collage-saraswatipuja-2024-pushpanjali.webp", 
    type: 'image',
    description: "Devotees offering flowers during the Pushpanjali ritual"
  },
  
  { 
    id: 1111, 
    year: 2024, 
    title: "Kids Talent Show", 
    media: "/videos/2024/collage-saraswatipuja-2024.mp4", 
    type: 'video',
    thumbnail:"/images/2024/collage-saraswatipuja-2024-pushpanjali.webp",
    description: "Kids performing songs and recitations on stage"
  },
  
  { 
    id: 1211, 
    year: 2024, 
    title: "Evening Aarti", 
    media: "/images/2024/collage-saraswatipuja-2024-aarti.webp", 
    type: 'image',
    description: "Beautiful evening aarti performed with diya lights"
  },
  
  { 
    id: 113, 
    year: 2024, 
    title: "Community Group Photo", 
    media: "/images/2024/collage-saraswatipuja-2024-group.webp", 
    type: 'image',
    description: "Everyone gathered for the final group photograph"
  },
  


  // 2023 Media
  { 
    id: 9, 
    year: 2023, 
    title: "Cultural Events", 
    media: "/videos/2023/Saraswati Pujo 2023 - TAMAL ADAK (1080p, h264).mp4", 
    type: 'video',
    description: "Cultural programs and performances"
  },
  { 
    id: 102023, 
    year: 2023, 
    title: "Traditional Worship", 
    media: "/images/2023/main-2023.webp", 
    type: 'image',
    description: "Traditional worship rituals"
  },
  { 
    id: 112023, 
    year: 2023, 
    title: "Traditional Worship", 
    media: "/images/2023/collage-saraswatipuja-2023 (2).webp", 
    type: 'image',
    description: "Traditional worship rituals"
  },
  { 
    id: 122023, 
    year: 2023, 
    title: "Traditional Worship", 
    media: "/images/2023/closeup-2023.webp", 
    type: 'image',
    description: "Traditional worship rituals"
  },
  { 
    id: 132023, 
    year: 2023, 
    title: "Traditional Worship", 
    media: "/images/2023/group-2023.webp", 
    type: 'image',
    description: "Traditional worship rituals"
  },
  { 
    id: 142023, 
    year: 2023, 
    title: "Traditional Worship", 
    media: "/images/2023/2023-collage.webp", 
    type: 'image',
    description: "Traditional worship rituals"
  },

  // 2022 Media
  { 
    id: 2022, 
    year: 2022, 
    title: "Celebration Video", 
    media: "/videos/2022/Saraswati Pujo 2022 - TAMAL ADAK (1080p, h264).mp4", 
    type: 'video',
    description: "Complete celebration video"
  },
  {
    id: 201,
    year: 2022,
    title: "Saraswati Idol – Closeup",
    media: "/images/2022/collage-saraswatipuja-2022 (3).webp",
    type: "image",
    description: "Beautiful closeup of Goddess Saraswati idol."
  },
  
  
  {
    id: 203,
    year: 2022,
    title: "Puja Moment",
    media: "/images/2022/collage-saraswatipuja-2022 (4).webp",
    type: "image",
    description: "Traditional rituals captured during Saraswati Puja."
  },
  
  {
    id: 204,
    year: 2022,
    title: "Cultural Performance",
    media: "/images/2022/collage-saraswatipuja-2022 (5).webp",
    type: "image",
    description: "Stage performance by Collage family members."
  },
  
  {
    id: 205,
    year: 2022,
    title: "Offering Prayers",
    media: "/images/2022/collage-saraswatipuja-2022 (6).webp",
    type: "image",
    description: "Devotional prayer moments of Saraswati Puja."
  },
  
  {
    id: 206,
    year: 2022,
    title: "Stage Performance – Full View",
    media: "/images/2022/collage-saraswatipuja-2022.webp",
    type: "image",
    description: "Wide shot of stage and lighting setup."
  },
  
  // 2021 Media
  { 
    id: 12021, 
    year: 2021, 
    title: "Cultural Program", 
    media: "/images/2021/2021-main.webp", 
    type: 'image',
    description: "Cultural program highlights"
  },
  { 
    id: 122021, 
    year: 2021, 
    title: "Cultural Program", 
    media: "/images/2021/2021-side-view.webp", 
    type: 'image',
    description: "Cultural program highlights"
  },
  { 
    id: 132021, 
    year: 2021, 
    title: "Cultural Program", 
    media: "/images/2021/full-2021.webp", 
    type: 'image',
    description: "Cultural program highlights"
  },
  { 
    id: 142021, 
    year: 2021, 
    title: "Cultural Program", 
    media: "/images/2021/2021-chin.webp", 
    type: 'image',
    description: "Cultural program highlights"
  },
  { 
    id: 152021, 
    year: 2021, 
    title: "Cultural Program", 
    media: "/images/2021/tamal-2021.webp", 
    type: 'image',
    description: "Cultural program highlights"
  },
  { 
    id: 162021, 
    year: 2021, 
    title: "Cultural Program", 
    media: "/images/2021/2021-closeup.webp", 
    type: 'image',
    description: "Cultural program highlights"
  },
  { 
    id: 172021, 
    year: 2021, 
    title: "Celebration Video", 
    media: "/videos/2021/Saraswati Pujo 2021 - TAMAL ADAK (1080p, h264).mp4", 
    type: 'video',
    description: "Complete celebration video"
  },

  // 2020 Media
  { 
    id: 15, 
    year: 2020, 
    title: "Worship Event", 
    media: "/images/2020/collage-saraswatipuja-2020-1.webp", 
    type: 'image',
    description: "Traditional worship event"
  },
  { 
    id: 16, 
    year: 2020, 
    title: "Festival Recap", 
    media: "/videos/2020/Saraswati Pujo 2020 - TAMAL ADAK (360p, h264).mp4", 
    type: 'video',
    description: "Festival recap and highlights"
  },

  // 2019 Media
  { 
    id: 17, 
    year: 2019, 
    title: "First Celebration", 
    media: "/images/2019/collage-saraswatipuja-2019-3.webp", 
    type: 'image',
    description: "Our first Saraswati Puja celebration"
  },
  { 
    id: 18, 
    year: 2019, 
    title: "Founding Year", 
    media: "/videos/2019/collage-saraswatipuja-2019-founding.mp4", 
    type: 'video',
    description: "Memories from our founding year"
  },
]

export const years = [ 2024, 2023, 2022, 2021, 2020, 2019]