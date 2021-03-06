USE [EmployeeDB]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 6/8/2020 10:06:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Leave]    Script Date: 6/8/2020 10:06:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Leave](
	[EmployeeNumber] [int] IDENTITY(1,1) NOT NULL,
	[AppliedDate] [datetime2](7) NOT NULL,
	[LeaveDate] [datetime2](7) NOT NULL,
	[NumberOfDate] [int] NOT NULL,
	[reason] [nvarchar](max) NULL,
 CONSTRAINT [PK_Leave] PRIMARY KEY CLUSTERED 
(
	[EmployeeNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Register]    Script Date: 6/8/2020 10:06:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Register](
	[EmployeeNumber] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](max) NULL,
	[LastName] [nvarchar](max) NULL,
	[Age] [nvarchar](max) NULL,
	[EmployeeType] [nvarchar](max) NULL,
 CONSTRAINT [PK_Register] PRIMARY KEY CLUSTERED 
(
	[EmployeeNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
