const { PrismaClient } = require('@prisma/client')

async function main() {
  // Manually construct the connection URL
  const connectionUrl = 'mongodb+srv://metaworksstartupteam:vLJDWugVlIO6XYtD@metanetworks.2ohq7.mongodb.net/cypher-compliance?retryWrites=true&w=majority'

  // Create Prisma client with explicit connection URL
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: connectionUrl
      }
    }
  })

  try {
    // Test connection by trying to connect
    await prisma.$connect()
    console.log('✅ Database connection successful!')

    console.log('Connection URL:', connectionUrl)

    // Optional: Perform a simple query to further verify
    try {
      const userCount = await prisma.user.count()
      console.log(`Total users in database: ${userCount}`)
    } catch (queryError) {
      console.log('No users found or error querying users:', queryError.message)
    }
  } catch (error) {
    console.error('❌ Database connection failed:', error)
  } finally {
    // Always disconnect to prevent connection leaks
    await prisma.$disconnect()
  }
}

main().catch(console.error)
