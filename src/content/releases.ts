const coverLieuThanhYen = "/assets/images/lieu-thanh-yen-remix-cover.webp";
const audioLieuThanhYen = "/assets/audio/lieu-thanh-yen-j97-minh-hieu-remix-2k26-preview.mp3";

export interface Release {
  slug: string;
  title: string;
  artist: string;
  year: number;
  bpm: number;
  keyLabel: string;
  cover: string;
  audio: string;
  tags: string[];
  note: string;
}

export const releases: Release[] = [
  {
    slug: "lieu-thanh-yen-x-j97",
    title: "Liễu Thanh Yên x J97",
    artist: "Minh Hieu Remix 2K26",
    year: 2026,
    bpm: 138,
    keyLabel: "F# min",
    cover: coverLieuThanhYen,
    audio: audioLieuThanhYen,
    tags: ["Vinahouse", "Remix", "Preview 60s"],
    note: "Bản remix đang lưu trong archive cá nhân. Website dùng preview 60 giây để giới thiệu màu sắc âm nhạc mà không công khai file master.",
  },
];
