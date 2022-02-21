-- database name: react_gallery

CREATE TABLE "images" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(800),
	"description" VARCHAR(300),
	"likes" INTEGER DEFAULT 0
);

INSERT INTO "images" ("path", "description", "likes")
VALUES ('images/Pochi_in_a_paperbag.png', 'Photo of Pochi in a paper bag', 0),
('images/Pochi_in_the_bed.png', 'Photo of Pochi in the bed.', 0), 
('images/Pochi_in_the_hammock.png', 'Photo of Pochi in the hammock.', 0), 
('images/Pochi_in_the_sink.png', 'Photo of Pochi in the bathroom sink.', 0), 
('images/Pochi_lying_on_the_side.png', 'Photo of Pochi lying on the side.', 0), 
('images/Pochi_on_the_mat.png', 'Photo of Pochi sitting on the mat.', 0), 
('images/Pochi_paw.png', 'Photo of Pochi licking her paw.', 0), 
('images/Pochi_showing-belly.png', 'Photo of Pochi showing her belly.', 0), 
('images/Pochi_sleeping_on_my_belly.png', 'Photo of Pochi sleeping on my belly.', 0), 
('images/Pochi_vent.png', 'Photo of Pochi lying on the heater vent.', 0);