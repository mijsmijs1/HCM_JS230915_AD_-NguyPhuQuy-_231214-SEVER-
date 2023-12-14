import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const userModel = {
    findAll: async () => {
        try {
            let data = await prisma.users.findMany()
            return {
                data,
                message: "FindAll OK!",
                status: true
            }
        } catch (err) {
            console.log('err', err);
            return {
                data: null,
                message: "FindAll Failed!",
                status: false
            }
        }

    },
    create: async (userData) => {
        try {
            let data = await prisma.users.create({
                data:{
                    ...userData
                }
            })
            return {
                data,
                message: "Create OK!",
                status: true
            }
        } catch (err) {
            console.log('err', err);
            return {
                data: null,
                message: "Create Failed!",
                status: false
            }
        }

    },
    update: async (userId,updateData) => {
        try {
            let data = await prisma.users.update({
                where:{
                    id:Number(userId)
                },
                data:{
                    ...updateData
                }
            })
            return {
                data,
                message: "Update OK!",
                status: true
            }
        } catch (err) {
            console.log('err', err);
            return {
                data: null,
                message: "Update Failed!",
                status: false
            }
        }

    },
    delete: async (userdId) => {
        try {
            let data = await prisma.users.delete({
                where:{
                    id:Number(userdId)
                }
            })
            return {
                data,
                message: "Delete OK!",
                status: true
            }
        } catch (err) {
            console.log('err', err);
            return {
                data: null,
                message: "Delete Failed!",
                status: false
            }
        }

    }
}