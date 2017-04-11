up:
	docker-compose up
test-server:
	docker-compose exec server npm test
model:
	docker-compose run server slc loopback:model
relation:
	docker-compose run server slc loopback:relation
relation:
	docker-compose run server slc loopback:acl
middleware:
	docker-compose run server slc loopback:middleware
