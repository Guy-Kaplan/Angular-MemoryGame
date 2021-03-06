USE [master]
GO
/****** Object:  Database [MemoryGame]    Script Date: 14/12/2018 12:13:45 ******/
CREATE DATABASE [MemoryGame]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'MemoryGame', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\MemoryGame.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'MemoryGame_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\MemoryGame_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [MemoryGame] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [MemoryGame].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [MemoryGame] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [MemoryGame] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [MemoryGame] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [MemoryGame] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [MemoryGame] SET ARITHABORT OFF 
GO
ALTER DATABASE [MemoryGame] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [MemoryGame] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [MemoryGame] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [MemoryGame] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [MemoryGame] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [MemoryGame] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [MemoryGame] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [MemoryGame] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [MemoryGame] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [MemoryGame] SET  DISABLE_BROKER 
GO
ALTER DATABASE [MemoryGame] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [MemoryGame] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [MemoryGame] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [MemoryGame] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [MemoryGame] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [MemoryGame] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [MemoryGame] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [MemoryGame] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [MemoryGame] SET  MULTI_USER 
GO
ALTER DATABASE [MemoryGame] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [MemoryGame] SET DB_CHAINING OFF 
GO
ALTER DATABASE [MemoryGame] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [MemoryGame] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [MemoryGame] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [MemoryGame] SET QUERY_STORE = OFF
GO
USE [MemoryGame]
GO
ALTER DATABASE SCOPED CONFIGURATION SET IDENTITY_CACHE = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [MemoryGame]
GO
/****** Object:  Table [dbo].[Feedbacks]    Script Date: 14/12/2018 12:13:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Feedbacks](
	[FeedbackID] [int] IDENTITY(1,1) NOT NULL,
	[UserID] [int] NOT NULL,
	[DataAdded] [datetime] NOT NULL,
	[Feedback] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Feedbacks] PRIMARY KEY CLUSTERED 
(
	[FeedbackID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GameResults]    Script Date: 14/12/2018 12:13:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GameResults](
	[GameResultID] [int] IDENTITY(1,1) NOT NULL,
	[UserID] [int] NOT NULL,
	[DateAdded] [datetime] NOT NULL,
	[TimeSpan] [time](7) NOT NULL,
	[Steps] [int] NOT NULL,
 CONSTRAINT [PK_GameResults] PRIMARY KEY CLUSTERED 
(
	[GameResultID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Images]    Script Date: 14/12/2018 12:13:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Images](
	[ImageID] [int] IDENTITY(1,1) NOT NULL,
	[ImageFileName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Images] PRIMARY KEY CLUSTERED 
(
	[ImageID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Messages]    Script Date: 14/12/2018 12:13:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Messages](
	[MessageID] [int] IDENTITY(1,1) NOT NULL,
	[DateAdded] [datetime] NOT NULL,
	[Phone] [nvarchar](50) NULL,
	[Email] [nvarchar](320) NULL,
	[Message] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Messages] PRIMARY KEY CLUSTERED 
(
	[MessageID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 14/12/2018 12:13:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserID] [int] IDENTITY(1,1) NOT NULL,
	[FullName] [nvarchar](50) NOT NULL,
	[UserName] [nvarchar](50) NOT NULL,
	[Password] [nvarchar](50) NOT NULL,
	[Email] [nvarchar](320) NULL,
	[BirthDate] [datetime] NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Feedbacks] ON 

INSERT [dbo].[Feedbacks] ([FeedbackID], [UserID], [DataAdded], [Feedback]) VALUES (1, 1, CAST(N'2018-11-15T12:20:12.000' AS DateTime), N'I love this game.')
INSERT [dbo].[Feedbacks] ([FeedbackID], [UserID], [DataAdded], [Feedback]) VALUES (2, 1, CAST(N'2018-11-15T14:40:15.000' AS DateTime), N'Good game!')
INSERT [dbo].[Feedbacks] ([FeedbackID], [UserID], [DataAdded], [Feedback]) VALUES (3, 1, CAST(N'2018-11-15T15:55:34.000' AS DateTime), N'Nice website...')
INSERT [dbo].[Feedbacks] ([FeedbackID], [UserID], [DataAdded], [Feedback]) VALUES (22, 2, CAST(N'2018-11-25T21:54:16.917' AS DateTime), N'Really enjoyed.')
INSERT [dbo].[Feedbacks] ([FeedbackID], [UserID], [DataAdded], [Feedback]) VALUES (23, 3, CAST(N'2018-11-25T22:09:28.880' AS DateTime), N'Love the pics!!')
INSERT [dbo].[Feedbacks] ([FeedbackID], [UserID], [DataAdded], [Feedback]) VALUES (29, 4, CAST(N'2018-12-03T18:57:20.580' AS DateTime), N'Marvel is life.')
INSERT [dbo].[Feedbacks] ([FeedbackID], [UserID], [DataAdded], [Feedback]) VALUES (30, 17, CAST(N'2018-12-08T19:23:32.427' AS DateTime), N'I am new here.')
INSERT [dbo].[Feedbacks] ([FeedbackID], [UserID], [DataAdded], [Feedback]) VALUES (31, 17, CAST(N'2018-12-08T19:25:03.010' AS DateTime), N'Cool game & cards!!!')
INSERT [dbo].[Feedbacks] ([FeedbackID], [UserID], [DataAdded], [Feedback]) VALUES (32, 2, CAST(N'2018-12-08T21:55:15.767' AS DateTime), N'test')
SET IDENTITY_INSERT [dbo].[Feedbacks] OFF
SET IDENTITY_INSERT [dbo].[GameResults] ON 

INSERT [dbo].[GameResults] ([GameResultID], [UserID], [DateAdded], [TimeSpan], [Steps]) VALUES (3, 1, CAST(N'2018-11-15T12:20:56.000' AS DateTime), CAST(N'00:41:00' AS Time), 14)
INSERT [dbo].[GameResults] ([GameResultID], [UserID], [DateAdded], [TimeSpan], [Steps]) VALUES (4, 1, CAST(N'2018-11-15T13:33:57.000' AS DateTime), CAST(N'01:28:00' AS Time), 22)
INSERT [dbo].[GameResults] ([GameResultID], [UserID], [DateAdded], [TimeSpan], [Steps]) VALUES (5, 1, CAST(N'2018-11-15T15:55:42.000' AS DateTime), CAST(N'00:35:00' AS Time), 18)
INSERT [dbo].[GameResults] ([GameResultID], [UserID], [DateAdded], [TimeSpan], [Steps]) VALUES (6, 2, CAST(N'2018-11-30T12:28:04.360' AS DateTime), CAST(N'00:33:00' AS Time), 13)
INSERT [dbo].[GameResults] ([GameResultID], [UserID], [DateAdded], [TimeSpan], [Steps]) VALUES (7, 3, CAST(N'2018-11-30T12:31:22.350' AS DateTime), CAST(N'00:36:00' AS Time), 19)
INSERT [dbo].[GameResults] ([GameResultID], [UserID], [DateAdded], [TimeSpan], [Steps]) VALUES (8, 2, CAST(N'2018-11-30T16:06:57.843' AS DateTime), CAST(N'00:38:00' AS Time), 16)
INSERT [dbo].[GameResults] ([GameResultID], [UserID], [DateAdded], [TimeSpan], [Steps]) VALUES (9, 1, CAST(N'2018-12-01T18:39:49.330' AS DateTime), CAST(N'01:47:00' AS Time), 17)
INSERT [dbo].[GameResults] ([GameResultID], [UserID], [DateAdded], [TimeSpan], [Steps]) VALUES (10, 4, CAST(N'2018-12-03T18:58:28.137' AS DateTime), CAST(N'00:55:00' AS Time), 21)
INSERT [dbo].[GameResults] ([GameResultID], [UserID], [DateAdded], [TimeSpan], [Steps]) VALUES (11, 17, CAST(N'2018-12-08T19:25:54.993' AS DateTime), CAST(N'00:35:00' AS Time), 19)
INSERT [dbo].[GameResults] ([GameResultID], [UserID], [DateAdded], [TimeSpan], [Steps]) VALUES (12, 2, CAST(N'2018-12-13T20:46:51.263' AS DateTime), CAST(N'00:34:00' AS Time), 14)
INSERT [dbo].[GameResults] ([GameResultID], [UserID], [DateAdded], [TimeSpan], [Steps]) VALUES (13, 18, CAST(N'2018-12-13T23:20:09.570' AS DateTime), CAST(N'00:56:00' AS Time), 22)
SET IDENTITY_INSERT [dbo].[GameResults] OFF
SET IDENTITY_INSERT [dbo].[Images] ON 

INSERT [dbo].[Images] ([ImageID], [ImageFileName]) VALUES (1, N'card1.jpg')
INSERT [dbo].[Images] ([ImageID], [ImageFileName]) VALUES (2, N'card2.jpg')
INSERT [dbo].[Images] ([ImageID], [ImageFileName]) VALUES (3, N'card3.jpg')
INSERT [dbo].[Images] ([ImageID], [ImageFileName]) VALUES (4, N'card4.jpg')
INSERT [dbo].[Images] ([ImageID], [ImageFileName]) VALUES (5, N'card5.jpg')
INSERT [dbo].[Images] ([ImageID], [ImageFileName]) VALUES (6, N'card6.jpg')
INSERT [dbo].[Images] ([ImageID], [ImageFileName]) VALUES (7, N'card7.jpg')
INSERT [dbo].[Images] ([ImageID], [ImageFileName]) VALUES (8, N'card8.jpg')
SET IDENTITY_INSERT [dbo].[Images] OFF
SET IDENTITY_INSERT [dbo].[Messages] ON 

INSERT [dbo].[Messages] ([MessageID], [DateAdded], [Phone], [Email], [Message]) VALUES (1, CAST(N'2018-11-15T11:30:01.000' AS DateTime), N'054-1114555', N'franks@gmail.com', N'Hello World.')
INSERT [dbo].[Messages] ([MessageID], [DateAdded], [Phone], [Email], [Message]) VALUES (2, CAST(N'2018-11-15T12:22:02.000' AS DateTime), NULL, NULL, N'Hi all!')
INSERT [dbo].[Messages] ([MessageID], [DateAdded], [Phone], [Email], [Message]) VALUES (4, CAST(N'2018-11-15T18:08:03.000' AS DateTime), NULL, N'jeremyu@ikea.com', N'How are you today?')
INSERT [dbo].[Messages] ([MessageID], [DateAdded], [Phone], [Email], [Message]) VALUES (5, CAST(N'2018-11-28T21:27:56.327' AS DateTime), N'+1-111-111', N'nill@gmail.com', N'What''s up?')
INSERT [dbo].[Messages] ([MessageID], [DateAdded], [Phone], [Email], [Message]) VALUES (6, CAST(N'2018-11-28T21:31:56.567' AS DateTime), N'+2-222-222', N'johnjj@mymail.com', N'Please email me.')
INSERT [dbo].[Messages] ([MessageID], [DateAdded], [Phone], [Email], [Message]) VALUES (22, CAST(N'2018-12-08T19:22:51.437' AS DateTime), N'+1-111-111', N'nill@gmail.com', N'Hello. I write this message.')
SET IDENTITY_INSERT [dbo].[Messages] OFF
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([UserID], [FullName], [UserName], [Password], [Email], [BirthDate]) VALUES (1, N'Nick Fury', N'Nick', N'1111', N'nick@shield.com', CAST(N'1960-11-11T00:00:00.000' AS DateTime))
INSERT [dbo].[Users] ([UserID], [FullName], [UserName], [Password], [Email], [BirthDate]) VALUES (2, N'Steve Rogers', N'Cap', N'2222', N'cap@shield.com', CAST(N'1982-02-02T00:00:00.000' AS DateTime))
INSERT [dbo].[Users] ([UserID], [FullName], [UserName], [Password], [Email], [BirthDate]) VALUES (3, N'Tony Stark', N'Tony', N'3333', NULL, NULL)
INSERT [dbo].[Users] ([UserID], [FullName], [UserName], [Password], [Email], [BirthDate]) VALUES (4, N'Jack Shepherd', N'Jack', N'4444', NULL, NULL)
INSERT [dbo].[Users] ([UserID], [FullName], [UserName], [Password], [Email], [BirthDate]) VALUES (17, N'Sam Wilson', N'Sam', N'5555', N'sam@shield.com', CAST(N'1965-08-27T00:00:00.000' AS DateTime))
INSERT [dbo].[Users] ([UserID], [FullName], [UserName], [Password], [Email], [BirthDate]) VALUES (18, N'Simha', N'Rif', N'1234', N'', NULL)
SET IDENTITY_INSERT [dbo].[Users] OFF
ALTER TABLE [dbo].[Feedbacks] ADD  CONSTRAINT [DF_Feedbacks_DataAdded]  DEFAULT (getdate()) FOR [DataAdded]
GO
ALTER TABLE [dbo].[GameResults] ADD  CONSTRAINT [DF_GameResults_DateAdded]  DEFAULT (getdate()) FOR [DateAdded]
GO
ALTER TABLE [dbo].[Messages] ADD  CONSTRAINT [DF_Messages_DateAdded]  DEFAULT (getdate()) FOR [DateAdded]
GO
ALTER TABLE [dbo].[Feedbacks]  WITH CHECK ADD  CONSTRAINT [FK_Feedbacks_Users] FOREIGN KEY([UserID])
REFERENCES [dbo].[Users] ([UserID])
GO
ALTER TABLE [dbo].[Feedbacks] CHECK CONSTRAINT [FK_Feedbacks_Users]
GO
ALTER TABLE [dbo].[GameResults]  WITH CHECK ADD  CONSTRAINT [FK_GameResults_Users] FOREIGN KEY([UserID])
REFERENCES [dbo].[Users] ([UserID])
GO
ALTER TABLE [dbo].[GameResults] CHECK CONSTRAINT [FK_GameResults_Users]
GO
USE [master]
GO
ALTER DATABASE [MemoryGame] SET  READ_WRITE 
GO
