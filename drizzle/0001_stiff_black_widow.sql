CREATE TABLE `enquiries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(160) NOT NULL,
	`businessName` varchar(200),
	`email` varchar(320) NOT NULL,
	`phone` varchar(80),
	`websiteUrl` varchar(500),
	`websiteType` varchar(120),
	`services` text,
	`projectDescription` text NOT NULL,
	`budget` varchar(120),
	`completionDate` varchar(120),
	`preferredContact` varchar(80),
	`country` varchar(120),
	`status` enum('new','contacted','qualified','proposal','won','lost') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `enquiries_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `newsletterSubscribers` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(320) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `newsletterSubscribers_id` PRIMARY KEY(`id`),
	CONSTRAINT `newsletterSubscribers_email_unique` UNIQUE(`email`)
);
