export type UserInfoResponse = {
    id: number,
    walletAddress: string,
    email: string,
    avatarUrl: string,
    totalDonations: number,
    about: string,
    fullName: string,
    detailAbout: any
}

export type AddUserInfoDto = {
    walletAddress: string,
    email: string,
    avatarUrl: string,
    about: string,
    fullName: string
}