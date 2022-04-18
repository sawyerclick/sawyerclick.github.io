export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store",".nojekyll","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","fonts/.DS_Store","fonts/Monument.ttf","fonts/firacode.ttf","images/.DS_Store","images/cursor.png","images/me.jpeg","images/rickroll.gif","images/share.png","images/thumbnails/.DS_Store","images/thumbnails/2020-dems/1000.avif","images/thumbnails/2020-dems/1000.jpeg","images/thumbnails/2020-dems/1000.webp","images/thumbnails/2020-dems/200.avif","images/thumbnails/2020-dems/200.jpeg","images/thumbnails/2020-dems/200.webp","images/thumbnails/2020-dems/400.avif","images/thumbnails/2020-dems/400.jpeg","images/thumbnails/2020-dems/400.webp","images/thumbnails/2020-dems/600.avif","images/thumbnails/2020-dems/600.jpeg","images/thumbnails/2020-dems/600.webp","images/thumbnails/2020-dems/800.avif","images/thumbnails/2020-dems/800.jpeg","images/thumbnails/2020-dems/800.webp","images/thumbnails/2020-dems/blurred.jpeg","images/thumbnails/all-time-best/1000.avif","images/thumbnails/all-time-best/1000.jpeg","images/thumbnails/all-time-best/1000.webp","images/thumbnails/all-time-best/200.avif","images/thumbnails/all-time-best/200.jpeg","images/thumbnails/all-time-best/200.webp","images/thumbnails/all-time-best/400.avif","images/thumbnails/all-time-best/400.jpeg","images/thumbnails/all-time-best/400.webp","images/thumbnails/all-time-best/600.avif","images/thumbnails/all-time-best/600.jpeg","images/thumbnails/all-time-best/600.webp","images/thumbnails/all-time-best/800.avif","images/thumbnails/all-time-best/800.jpeg","images/thumbnails/all-time-best/800.webp","images/thumbnails/all-time-best/blurred.jpeg","images/thumbnails/bernie-battered/1000.avif","images/thumbnails/bernie-battered/1000.jpeg","images/thumbnails/bernie-battered/1000.webp","images/thumbnails/bernie-battered/200.avif","images/thumbnails/bernie-battered/200.jpeg","images/thumbnails/bernie-battered/200.webp","images/thumbnails/bernie-battered/400.avif","images/thumbnails/bernie-battered/400.jpeg","images/thumbnails/bernie-battered/400.webp","images/thumbnails/bernie-battered/600.avif","images/thumbnails/bernie-battered/600.jpeg","images/thumbnails/bernie-battered/600.webp","images/thumbnails/bernie-battered/800.avif","images/thumbnails/bernie-battered/800.jpeg","images/thumbnails/bernie-battered/800.webp","images/thumbnails/bernie-battered/blurred.jpeg","images/thumbnails/biotech-execs/1000.avif","images/thumbnails/biotech-execs/1000.jpeg","images/thumbnails/biotech-execs/1000.webp","images/thumbnails/biotech-execs/200.avif","images/thumbnails/biotech-execs/200.jpeg","images/thumbnails/biotech-execs/200.webp","images/thumbnails/biotech-execs/400.avif","images/thumbnails/biotech-execs/400.jpeg","images/thumbnails/biotech-execs/400.webp","images/thumbnails/biotech-execs/600.avif","images/thumbnails/biotech-execs/600.jpeg","images/thumbnails/biotech-execs/600.webp","images/thumbnails/biotech-execs/800.avif","images/thumbnails/biotech-execs/800.jpeg","images/thumbnails/biotech-execs/800.webp","images/thumbnails/biotech-execs/blurred.jpeg","images/thumbnails/biotech-quiz/1000.avif","images/thumbnails/biotech-quiz/1000.jpeg","images/thumbnails/biotech-quiz/1000.webp","images/thumbnails/biotech-quiz/200.avif","images/thumbnails/biotech-quiz/200.jpeg","images/thumbnails/biotech-quiz/200.webp","images/thumbnails/biotech-quiz/400.avif","images/thumbnails/biotech-quiz/400.jpeg","images/thumbnails/biotech-quiz/400.webp","images/thumbnails/biotech-quiz/600.avif","images/thumbnails/biotech-quiz/600.jpeg","images/thumbnails/biotech-quiz/600.webp","images/thumbnails/biotech-quiz/800.avif","images/thumbnails/biotech-quiz/800.jpeg","images/thumbnails/biotech-quiz/800.webp","images/thumbnails/biotech-quiz/blurred.jpeg","images/thumbnails/board-genders/1000.avif","images/thumbnails/board-genders/1000.jpeg","images/thumbnails/board-genders/1000.webp","images/thumbnails/board-genders/200.avif","images/thumbnails/board-genders/200.jpeg","images/thumbnails/board-genders/200.webp","images/thumbnails/board-genders/400.avif","images/thumbnails/board-genders/400.jpeg","images/thumbnails/board-genders/400.webp","images/thumbnails/board-genders/600.avif","images/thumbnails/board-genders/600.jpeg","images/thumbnails/board-genders/600.webp","images/thumbnails/board-genders/800.avif","images/thumbnails/board-genders/800.jpeg","images/thumbnails/board-genders/800.webp","images/thumbnails/board-genders/blurred.jpeg","images/thumbnails/cabinet/1000.avif","images/thumbnails/cabinet/1000.jpeg","images/thumbnails/cabinet/1000.webp","images/thumbnails/cabinet/200.avif","images/thumbnails/cabinet/200.jpeg","images/thumbnails/cabinet/200.webp","images/thumbnails/cabinet/400.avif","images/thumbnails/cabinet/400.jpeg","images/thumbnails/cabinet/400.webp","images/thumbnails/cabinet/600.avif","images/thumbnails/cabinet/600.jpeg","images/thumbnails/cabinet/600.webp","images/thumbnails/cabinet/800.avif","images/thumbnails/cabinet/800.jpeg","images/thumbnails/cabinet/800.webp","images/thumbnails/cabinet/blurred.jpeg","images/thumbnails/cloudkitchens-map/1000.avif","images/thumbnails/cloudkitchens-map/1000.jpeg","images/thumbnails/cloudkitchens-map/1000.webp","images/thumbnails/cloudkitchens-map/200.avif","images/thumbnails/cloudkitchens-map/200.jpeg","images/thumbnails/cloudkitchens-map/200.webp","images/thumbnails/cloudkitchens-map/400.avif","images/thumbnails/cloudkitchens-map/400.jpeg","images/thumbnails/cloudkitchens-map/400.webp","images/thumbnails/cloudkitchens-map/600.avif","images/thumbnails/cloudkitchens-map/600.jpeg","images/thumbnails/cloudkitchens-map/600.webp","images/thumbnails/cloudkitchens-map/800.avif","images/thumbnails/cloudkitchens-map/800.jpeg","images/thumbnails/cloudkitchens-map/800.webp","images/thumbnails/cloudkitchens-map/blurred.jpeg","images/thumbnails/condegram/1000.avif","images/thumbnails/condegram/1000.jpeg","images/thumbnails/condegram/1000.webp","images/thumbnails/condegram/200.avif","images/thumbnails/condegram/200.jpeg","images/thumbnails/condegram/200.webp","images/thumbnails/condegram/400.avif","images/thumbnails/condegram/400.jpeg","images/thumbnails/condegram/400.webp","images/thumbnails/condegram/600.avif","images/thumbnails/condegram/600.jpeg","images/thumbnails/condegram/600.webp","images/thumbnails/condegram/800.avif","images/thumbnails/condegram/800.jpeg","images/thumbnails/condegram/800.webp","images/thumbnails/condegram/blurred.jpeg","images/thumbnails/conflicted-congress/1000.avif","images/thumbnails/conflicted-congress/1000.jpeg","images/thumbnails/conflicted-congress/1000.webp","images/thumbnails/conflicted-congress/200.avif","images/thumbnails/conflicted-congress/200.jpeg","images/thumbnails/conflicted-congress/200.webp","images/thumbnails/conflicted-congress/400.avif","images/thumbnails/conflicted-congress/400.jpeg","images/thumbnails/conflicted-congress/400.webp","images/thumbnails/conflicted-congress/600.avif","images/thumbnails/conflicted-congress/600.jpeg","images/thumbnails/conflicted-congress/600.webp","images/thumbnails/conflicted-congress/800.avif","images/thumbnails/conflicted-congress/800.jpeg","images/thumbnails/conflicted-congress/800.webp","images/thumbnails/conflicted-congress/blurred.jpeg","images/thumbnails/contour-map/1000.avif","images/thumbnails/contour-map/1000.jpeg","images/thumbnails/contour-map/1000.webp","images/thumbnails/contour-map/200.avif","images/thumbnails/contour-map/200.jpeg","images/thumbnails/contour-map/200.webp","images/thumbnails/contour-map/400.avif","images/thumbnails/contour-map/400.jpeg","images/thumbnails/contour-map/400.webp","images/thumbnails/contour-map/600.avif","images/thumbnails/contour-map/600.jpeg","images/thumbnails/contour-map/600.webp","images/thumbnails/contour-map/800.avif","images/thumbnails/contour-map/800.jpeg","images/thumbnails/contour-map/800.webp","images/thumbnails/contour-map/blurred.jpeg","images/thumbnails/coro-per-day/1000.avif","images/thumbnails/coro-per-day/1000.jpeg","images/thumbnails/coro-per-day/1000.webp","images/thumbnails/coro-per-day/200.avif","images/thumbnails/coro-per-day/200.jpeg","images/thumbnails/coro-per-day/200.webp","images/thumbnails/coro-per-day/400.avif","images/thumbnails/coro-per-day/400.jpeg","images/thumbnails/coro-per-day/400.webp","images/thumbnails/coro-per-day/600.avif","images/thumbnails/coro-per-day/600.jpeg","images/thumbnails/coro-per-day/600.webp","images/thumbnails/coro-per-day/800.avif","images/thumbnails/coro-per-day/800.jpeg","images/thumbnails/coro-per-day/800.webp","images/thumbnails/coro-per-day/blurred.jpeg","images/thumbnails/corona-streaming/1000.avif","images/thumbnails/corona-streaming/1000.jpeg","images/thumbnails/corona-streaming/1000.webp","images/thumbnails/corona-streaming/200.avif","images/thumbnails/corona-streaming/200.jpeg","images/thumbnails/corona-streaming/200.webp","images/thumbnails/corona-streaming/400.avif","images/thumbnails/corona-streaming/400.jpeg","images/thumbnails/corona-streaming/400.webp","images/thumbnails/corona-streaming/600.avif","images/thumbnails/corona-streaming/600.jpeg","images/thumbnails/corona-streaming/600.webp","images/thumbnails/corona-streaming/800.avif","images/thumbnails/corona-streaming/800.jpeg","images/thumbnails/corona-streaming/800.webp","images/thumbnails/corona-streaming/blurred.jpeg","images/thumbnails/coronavirus-animated-map/1000.avif","images/thumbnails/coronavirus-animated-map/1000.jpeg","images/thumbnails/coronavirus-animated-map/1000.webp","images/thumbnails/coronavirus-animated-map/200.avif","images/thumbnails/coronavirus-animated-map/200.jpeg","images/thumbnails/coronavirus-animated-map/200.webp","images/thumbnails/coronavirus-animated-map/400.avif","images/thumbnails/coronavirus-animated-map/400.jpeg","images/thumbnails/coronavirus-animated-map/400.webp","images/thumbnails/coronavirus-animated-map/600.avif","images/thumbnails/coronavirus-animated-map/600.jpeg","images/thumbnails/coronavirus-animated-map/600.webp","images/thumbnails/coronavirus-animated-map/800.avif","images/thumbnails/coronavirus-animated-map/800.jpeg","images/thumbnails/coronavirus-animated-map/800.webp","images/thumbnails/coronavirus-animated-map/blurred.jpeg","images/thumbnails/emissions/1000.avif","images/thumbnails/emissions/1000.jpeg","images/thumbnails/emissions/1000.webp","images/thumbnails/emissions/200.avif","images/thumbnails/emissions/200.jpeg","images/thumbnails/emissions/200.webp","images/thumbnails/emissions/400.avif","images/thumbnails/emissions/400.jpeg","images/thumbnails/emissions/400.webp","images/thumbnails/emissions/600.avif","images/thumbnails/emissions/600.jpeg","images/thumbnails/emissions/600.webp","images/thumbnails/emissions/800.avif","images/thumbnails/emissions/800.jpeg","images/thumbnails/emissions/800.webp","images/thumbnails/emissions/blurred.jpeg","images/thumbnails/esports-winners/1000.avif","images/thumbnails/esports-winners/1000.jpeg","images/thumbnails/esports-winners/1000.webp","images/thumbnails/esports-winners/200.avif","images/thumbnails/esports-winners/200.jpeg","images/thumbnails/esports-winners/200.webp","images/thumbnails/esports-winners/400.avif","images/thumbnails/esports-winners/400.jpeg","images/thumbnails/esports-winners/400.webp","images/thumbnails/esports-winners/600.avif","images/thumbnails/esports-winners/600.jpeg","images/thumbnails/esports-winners/600.webp","images/thumbnails/esports-winners/800.avif","images/thumbnails/esports-winners/800.jpeg","images/thumbnails/esports-winners/800.webp","images/thumbnails/esports-winners/blurred.jpeg","images/thumbnails/georgia-legislative-roadmap/1000.avif","images/thumbnails/georgia-legislative-roadmap/1000.jpeg","images/thumbnails/georgia-legislative-roadmap/1000.webp","images/thumbnails/georgia-legislative-roadmap/200.avif","images/thumbnails/georgia-legislative-roadmap/200.jpeg","images/thumbnails/georgia-legislative-roadmap/200.webp","images/thumbnails/georgia-legislative-roadmap/400.avif","images/thumbnails/georgia-legislative-roadmap/400.jpeg","images/thumbnails/georgia-legislative-roadmap/400.webp","images/thumbnails/georgia-legislative-roadmap/600.avif","images/thumbnails/georgia-legislative-roadmap/600.jpeg","images/thumbnails/georgia-legislative-roadmap/600.webp","images/thumbnails/georgia-legislative-roadmap/800.avif","images/thumbnails/georgia-legislative-roadmap/800.jpeg","images/thumbnails/georgia-legislative-roadmap/800.webp","images/thumbnails/georgia-legislative-roadmap/blurred.jpeg","images/thumbnails/gop_love-qanon/1000.avif","images/thumbnails/gop_love-qanon/1000.jpeg","images/thumbnails/gop_love-qanon/1000.webp","images/thumbnails/gop_love-qanon/200.avif","images/thumbnails/gop_love-qanon/200.jpeg","images/thumbnails/gop_love-qanon/200.webp","images/thumbnails/gop_love-qanon/400.avif","images/thumbnails/gop_love-qanon/400.jpeg","images/thumbnails/gop_love-qanon/400.webp","images/thumbnails/gop_love-qanon/600.avif","images/thumbnails/gop_love-qanon/600.jpeg","images/thumbnails/gop_love-qanon/600.webp","images/thumbnails/gop_love-qanon/800.avif","images/thumbnails/gop_love-qanon/800.jpeg","images/thumbnails/gop_love-qanon/800.webp","images/thumbnails/gop_love-qanon/blurred.jpeg","images/thumbnails/green-businesses/1000.avif","images/thumbnails/green-businesses/1000.jpeg","images/thumbnails/green-businesses/1000.webp","images/thumbnails/green-businesses/200.avif","images/thumbnails/green-businesses/200.jpeg","images/thumbnails/green-businesses/200.webp","images/thumbnails/green-businesses/400.avif","images/thumbnails/green-businesses/400.jpeg","images/thumbnails/green-businesses/400.webp","images/thumbnails/green-businesses/600.avif","images/thumbnails/green-businesses/600.jpeg","images/thumbnails/green-businesses/600.webp","images/thumbnails/green-businesses/800.avif","images/thumbnails/green-businesses/800.jpeg","images/thumbnails/green-businesses/800.webp","images/thumbnails/green-businesses/blurred.jpeg","images/thumbnails/homework9/1000.avif","images/thumbnails/homework9/1000.jpeg","images/thumbnails/homework9/1000.webp","images/thumbnails/homework9/200.avif","images/thumbnails/homework9/200.jpeg","images/thumbnails/homework9/200.webp","images/thumbnails/homework9/400.avif","images/thumbnails/homework9/400.jpeg","images/thumbnails/homework9/400.webp","images/thumbnails/homework9/600.avif","images/thumbnails/homework9/600.jpeg","images/thumbnails/homework9/600.webp","images/thumbnails/homework9/800.avif","images/thumbnails/homework9/800.jpeg","images/thumbnails/homework9/800.webp","images/thumbnails/homework9/blurred.jpeg","images/thumbnails/immigration-court-hearings/1000.avif","images/thumbnails/immigration-court-hearings/1000.jpeg","images/thumbnails/immigration-court-hearings/1000.webp","images/thumbnails/immigration-court-hearings/200.avif","images/thumbnails/immigration-court-hearings/200.jpeg","images/thumbnails/immigration-court-hearings/200.webp","images/thumbnails/immigration-court-hearings/400.avif","images/thumbnails/immigration-court-hearings/400.jpeg","images/thumbnails/immigration-court-hearings/400.webp","images/thumbnails/immigration-court-hearings/600.avif","images/thumbnails/immigration-court-hearings/600.jpeg","images/thumbnails/immigration-court-hearings/600.webp","images/thumbnails/immigration-court-hearings/800.avif","images/thumbnails/immigration-court-hearings/800.jpeg","images/thumbnails/immigration-court-hearings/800.webp","images/thumbnails/immigration-court-hearings/blurred.jpeg","images/thumbnails/influencer-database/1000.avif","images/thumbnails/influencer-database/1000.jpeg","images/thumbnails/influencer-database/1000.webp","images/thumbnails/influencer-database/200.avif","images/thumbnails/influencer-database/200.jpeg","images/thumbnails/influencer-database/200.webp","images/thumbnails/influencer-database/400.avif","images/thumbnails/influencer-database/400.jpeg","images/thumbnails/influencer-database/400.webp","images/thumbnails/influencer-database/600.avif","images/thumbnails/influencer-database/600.jpeg","images/thumbnails/influencer-database/600.webp","images/thumbnails/influencer-database/800.avif","images/thumbnails/influencer-database/800.jpeg","images/thumbnails/influencer-database/800.webp","images/thumbnails/influencer-database/blurred.jpeg","images/thumbnails/izzys-orbit/1000.avif","images/thumbnails/izzys-orbit/1000.jpeg","images/thumbnails/izzys-orbit/1000.webp","images/thumbnails/izzys-orbit/200.avif","images/thumbnails/izzys-orbit/200.jpeg","images/thumbnails/izzys-orbit/200.webp","images/thumbnails/izzys-orbit/400.avif","images/thumbnails/izzys-orbit/400.jpeg","images/thumbnails/izzys-orbit/400.webp","images/thumbnails/izzys-orbit/600.avif","images/thumbnails/izzys-orbit/600.jpeg","images/thumbnails/izzys-orbit/600.webp","images/thumbnails/izzys-orbit/800.avif","images/thumbnails/izzys-orbit/800.jpeg","images/thumbnails/izzys-orbit/800.webp","images/thumbnails/izzys-orbit/blurred.jpeg","images/thumbnails/joes-cabinet/1000.avif","images/thumbnails/joes-cabinet/1000.jpeg","images/thumbnails/joes-cabinet/1000.webp","images/thumbnails/joes-cabinet/200.avif","images/thumbnails/joes-cabinet/200.jpeg","images/thumbnails/joes-cabinet/200.webp","images/thumbnails/joes-cabinet/400.avif","images/thumbnails/joes-cabinet/400.jpeg","images/thumbnails/joes-cabinet/400.webp","images/thumbnails/joes-cabinet/600.avif","images/thumbnails/joes-cabinet/600.jpeg","images/thumbnails/joes-cabinet/600.webp","images/thumbnails/joes-cabinet/800.avif","images/thumbnails/joes-cabinet/800.jpeg","images/thumbnails/joes-cabinet/800.webp","images/thumbnails/joes-cabinet/blurred.jpeg","images/thumbnails/lgbtq-cartoons/1000.avif","images/thumbnails/lgbtq-cartoons/1000.jpeg","images/thumbnails/lgbtq-cartoons/1000.webp","images/thumbnails/lgbtq-cartoons/200.avif","images/thumbnails/lgbtq-cartoons/200.jpeg","images/thumbnails/lgbtq-cartoons/200.webp","images/thumbnails/lgbtq-cartoons/400.avif","images/thumbnails/lgbtq-cartoons/400.jpeg","images/thumbnails/lgbtq-cartoons/400.webp","images/thumbnails/lgbtq-cartoons/600.avif","images/thumbnails/lgbtq-cartoons/600.jpeg","images/thumbnails/lgbtq-cartoons/600.webp","images/thumbnails/lgbtq-cartoons/800.avif","images/thumbnails/lgbtq-cartoons/800.jpeg","images/thumbnails/lgbtq-cartoons/800.webp","images/thumbnails/lgbtq-cartoons/blurred.jpeg","images/thumbnails/like-a-ritual/1000.avif","images/thumbnails/like-a-ritual/1000.jpeg","images/thumbnails/like-a-ritual/1000.webp","images/thumbnails/like-a-ritual/200.avif","images/thumbnails/like-a-ritual/200.jpeg","images/thumbnails/like-a-ritual/200.webp","images/thumbnails/like-a-ritual/400.avif","images/thumbnails/like-a-ritual/400.jpeg","images/thumbnails/like-a-ritual/400.webp","images/thumbnails/like-a-ritual/600.avif","images/thumbnails/like-a-ritual/600.jpeg","images/thumbnails/like-a-ritual/600.webp","images/thumbnails/like-a-ritual/800.avif","images/thumbnails/like-a-ritual/800.jpeg","images/thumbnails/like-a-ritual/800.webp","images/thumbnails/like-a-ritual/blurred.jpeg","images/thumbnails/mapping-police-violence/1000.avif","images/thumbnails/mapping-police-violence/1000.jpeg","images/thumbnails/mapping-police-violence/1000.webp","images/thumbnails/mapping-police-violence/200.avif","images/thumbnails/mapping-police-violence/200.jpeg","images/thumbnails/mapping-police-violence/200.webp","images/thumbnails/mapping-police-violence/400.avif","images/thumbnails/mapping-police-violence/400.jpeg","images/thumbnails/mapping-police-violence/400.webp","images/thumbnails/mapping-police-violence/600.avif","images/thumbnails/mapping-police-violence/600.jpeg","images/thumbnails/mapping-police-violence/600.webp","images/thumbnails/mapping-police-violence/800.avif","images/thumbnails/mapping-police-violence/800.jpeg","images/thumbnails/mapping-police-violence/800.webp","images/thumbnails/mapping-police-violence/blurred.jpeg","images/thumbnails/ninth-dem-debate/1000.avif","images/thumbnails/ninth-dem-debate/1000.jpeg","images/thumbnails/ninth-dem-debate/1000.webp","images/thumbnails/ninth-dem-debate/200.avif","images/thumbnails/ninth-dem-debate/200.jpeg","images/thumbnails/ninth-dem-debate/200.webp","images/thumbnails/ninth-dem-debate/400.avif","images/thumbnails/ninth-dem-debate/400.jpeg","images/thumbnails/ninth-dem-debate/400.webp","images/thumbnails/ninth-dem-debate/600.avif","images/thumbnails/ninth-dem-debate/600.jpeg","images/thumbnails/ninth-dem-debate/600.webp","images/thumbnails/ninth-dem-debate/800.avif","images/thumbnails/ninth-dem-debate/800.jpeg","images/thumbnails/ninth-dem-debate/800.webp","images/thumbnails/ninth-dem-debate/blurred.jpeg","images/thumbnails/nyc-recycling/1000.avif","images/thumbnails/nyc-recycling/1000.jpeg","images/thumbnails/nyc-recycling/1000.webp","images/thumbnails/nyc-recycling/200.avif","images/thumbnails/nyc-recycling/200.jpeg","images/thumbnails/nyc-recycling/200.webp","images/thumbnails/nyc-recycling/400.avif","images/thumbnails/nyc-recycling/400.jpeg","images/thumbnails/nyc-recycling/400.webp","images/thumbnails/nyc-recycling/600.avif","images/thumbnails/nyc-recycling/600.jpeg","images/thumbnails/nyc-recycling/600.webp","images/thumbnails/nyc-recycling/800.avif","images/thumbnails/nyc-recycling/800.jpeg","images/thumbnails/nyc-recycling/800.webp","images/thumbnails/nyc-recycling/blurred.jpeg","images/thumbnails/nyu_impd/1000.avif","images/thumbnails/nyu_impd/1000.jpeg","images/thumbnails/nyu_impd/1000.webp","images/thumbnails/nyu_impd/200.avif","images/thumbnails/nyu_impd/200.jpeg","images/thumbnails/nyu_impd/200.webp","images/thumbnails/nyu_impd/400.avif","images/thumbnails/nyu_impd/400.jpeg","images/thumbnails/nyu_impd/400.webp","images/thumbnails/nyu_impd/600.avif","images/thumbnails/nyu_impd/600.jpeg","images/thumbnails/nyu_impd/600.webp","images/thumbnails/nyu_impd/800.avif","images/thumbnails/nyu_impd/800.jpeg","images/thumbnails/nyu_impd/800.webp","images/thumbnails/nyu_impd/blurred.jpeg","images/thumbnails/polls/1000.avif","images/thumbnails/polls/1000.jpeg","images/thumbnails/polls/1000.webp","images/thumbnails/polls/200.avif","images/thumbnails/polls/200.jpeg","images/thumbnails/polls/200.webp","images/thumbnails/polls/400.avif","images/thumbnails/polls/400.jpeg","images/thumbnails/polls/400.webp","images/thumbnails/polls/600.avif","images/thumbnails/polls/600.jpeg","images/thumbnails/polls/600.webp","images/thumbnails/polls/800.avif","images/thumbnails/polls/800.jpeg","images/thumbnails/polls/800.webp","images/thumbnails/polls/blurred.jpeg","images/thumbnails/protestdata/1000.avif","images/thumbnails/protestdata/1000.jpeg","images/thumbnails/protestdata/1000.webp","images/thumbnails/protestdata/200.avif","images/thumbnails/protestdata/200.jpeg","images/thumbnails/protestdata/200.webp","images/thumbnails/protestdata/400.avif","images/thumbnails/protestdata/400.jpeg","images/thumbnails/protestdata/400.webp","images/thumbnails/protestdata/600.avif","images/thumbnails/protestdata/600.jpeg","images/thumbnails/protestdata/600.webp","images/thumbnails/protestdata/800.avif","images/thumbnails/protestdata/800.jpeg","images/thumbnails/protestdata/800.webp","images/thumbnails/protestdata/blurred.jpeg","images/thumbnails/punk-force-header/1000.avif","images/thumbnails/punk-force-header/1000.jpeg","images/thumbnails/punk-force-header/1000.webp","images/thumbnails/punk-force-header/200.avif","images/thumbnails/punk-force-header/200.jpeg","images/thumbnails/punk-force-header/200.webp","images/thumbnails/punk-force-header/400.avif","images/thumbnails/punk-force-header/400.jpeg","images/thumbnails/punk-force-header/400.webp","images/thumbnails/punk-force-header/600.avif","images/thumbnails/punk-force-header/600.jpeg","images/thumbnails/punk-force-header/600.webp","images/thumbnails/punk-force-header/800.avif","images/thumbnails/punk-force-header/800.jpeg","images/thumbnails/punk-force-header/800.webp","images/thumbnails/punk-force-header/blurred.jpeg","images/thumbnails/punk-header/1000.avif","images/thumbnails/punk-header/1000.jpeg","images/thumbnails/punk-header/1000.webp","images/thumbnails/punk-header/200.avif","images/thumbnails/punk-header/200.jpeg","images/thumbnails/punk-header/200.webp","images/thumbnails/punk-header/400.avif","images/thumbnails/punk-header/400.jpeg","images/thumbnails/punk-header/400.webp","images/thumbnails/punk-header/600.avif","images/thumbnails/punk-header/600.jpeg","images/thumbnails/punk-header/600.webp","images/thumbnails/punk-header/800.avif","images/thumbnails/punk-header/800.jpeg","images/thumbnails/punk-header/800.webp","images/thumbnails/punk-header/blurred.jpeg","images/thumbnails/q-database/1000.avif","images/thumbnails/q-database/1000.jpeg","images/thumbnails/q-database/1000.webp","images/thumbnails/q-database/200.avif","images/thumbnails/q-database/200.jpeg","images/thumbnails/q-database/200.webp","images/thumbnails/q-database/400.avif","images/thumbnails/q-database/400.jpeg","images/thumbnails/q-database/400.webp","images/thumbnails/q-database/600.avif","images/thumbnails/q-database/600.jpeg","images/thumbnails/q-database/600.webp","images/thumbnails/q-database/800.avif","images/thumbnails/q-database/800.jpeg","images/thumbnails/q-database/800.webp","images/thumbnails/q-database/blurred.jpeg","images/thumbnails/q-drops/1000.avif","images/thumbnails/q-drops/1000.jpeg","images/thumbnails/q-drops/1000.webp","images/thumbnails/q-drops/200.avif","images/thumbnails/q-drops/200.jpeg","images/thumbnails/q-drops/200.webp","images/thumbnails/q-drops/400.avif","images/thumbnails/q-drops/400.jpeg","images/thumbnails/q-drops/400.webp","images/thumbnails/q-drops/600.avif","images/thumbnails/q-drops/600.jpeg","images/thumbnails/q-drops/600.webp","images/thumbnails/q-drops/800.avif","images/thumbnails/q-drops/800.jpeg","images/thumbnails/q-drops/800.webp","images/thumbnails/q-drops/blurred.jpeg","images/thumbnails/quakeswarm-map/1000.avif","images/thumbnails/quakeswarm-map/1000.jpeg","images/thumbnails/quakeswarm-map/1000.webp","images/thumbnails/quakeswarm-map/200.avif","images/thumbnails/quakeswarm-map/200.jpeg","images/thumbnails/quakeswarm-map/200.webp","images/thumbnails/quakeswarm-map/400.avif","images/thumbnails/quakeswarm-map/400.jpeg","images/thumbnails/quakeswarm-map/400.webp","images/thumbnails/quakeswarm-map/600.avif","images/thumbnails/quakeswarm-map/600.jpeg","images/thumbnails/quakeswarm-map/600.webp","images/thumbnails/quakeswarm-map/800.avif","images/thumbnails/quakeswarm-map/800.jpeg","images/thumbnails/quakeswarm-map/800.webp","images/thumbnails/quakeswarm-map/blurred.jpeg","images/thumbnails/radial-charts/1000.avif","images/thumbnails/radial-charts/1000.jpeg","images/thumbnails/radial-charts/1000.webp","images/thumbnails/radial-charts/200.avif","images/thumbnails/radial-charts/200.jpeg","images/thumbnails/radial-charts/200.webp","images/thumbnails/radial-charts/400.avif","images/thumbnails/radial-charts/400.jpeg","images/thumbnails/radial-charts/400.webp","images/thumbnails/radial-charts/600.avif","images/thumbnails/radial-charts/600.jpeg","images/thumbnails/radial-charts/600.webp","images/thumbnails/radial-charts/800.avif","images/thumbnails/radial-charts/800.jpeg","images/thumbnails/radial-charts/800.webp","images/thumbnails/radial-charts/blurred.jpeg","images/thumbnails/reckoning_with_joppa/1000.avif","images/thumbnails/reckoning_with_joppa/1000.jpeg","images/thumbnails/reckoning_with_joppa/1000.webp","images/thumbnails/reckoning_with_joppa/200.avif","images/thumbnails/reckoning_with_joppa/200.jpeg","images/thumbnails/reckoning_with_joppa/200.webp","images/thumbnails/reckoning_with_joppa/400.avif","images/thumbnails/reckoning_with_joppa/400.jpeg","images/thumbnails/reckoning_with_joppa/400.webp","images/thumbnails/reckoning_with_joppa/600.avif","images/thumbnails/reckoning_with_joppa/600.jpeg","images/thumbnails/reckoning_with_joppa/600.webp","images/thumbnails/reckoning_with_joppa/800.avif","images/thumbnails/reckoning_with_joppa/800.jpeg","images/thumbnails/reckoning_with_joppa/800.webp","images/thumbnails/reckoning_with_joppa/blurred.jpeg","images/thumbnails/ring-neighbors/1000.avif","images/thumbnails/ring-neighbors/1000.jpeg","images/thumbnails/ring-neighbors/1000.webp","images/thumbnails/ring-neighbors/200.avif","images/thumbnails/ring-neighbors/200.jpeg","images/thumbnails/ring-neighbors/200.webp","images/thumbnails/ring-neighbors/400.avif","images/thumbnails/ring-neighbors/400.jpeg","images/thumbnails/ring-neighbors/400.webp","images/thumbnails/ring-neighbors/600.avif","images/thumbnails/ring-neighbors/600.jpeg","images/thumbnails/ring-neighbors/600.webp","images/thumbnails/ring-neighbors/800.avif","images/thumbnails/ring-neighbors/800.jpeg","images/thumbnails/ring-neighbors/800.webp","images/thumbnails/ring-neighbors/blurred.jpeg","images/thumbnails/salary-database/1000.avif","images/thumbnails/salary-database/1000.jpeg","images/thumbnails/salary-database/1000.webp","images/thumbnails/salary-database/200.avif","images/thumbnails/salary-database/200.jpeg","images/thumbnails/salary-database/200.webp","images/thumbnails/salary-database/400.avif","images/thumbnails/salary-database/400.jpeg","images/thumbnails/salary-database/400.webp","images/thumbnails/salary-database/600.avif","images/thumbnails/salary-database/600.jpeg","images/thumbnails/salary-database/600.webp","images/thumbnails/salary-database/800.avif","images/thumbnails/salary-database/800.jpeg","images/thumbnails/salary-database/800.webp","images/thumbnails/salary-database/blurred.jpeg","images/thumbnails/should-i-buy-a-house/1000.avif","images/thumbnails/should-i-buy-a-house/1000.jpeg","images/thumbnails/should-i-buy-a-house/1000.webp","images/thumbnails/should-i-buy-a-house/200.avif","images/thumbnails/should-i-buy-a-house/200.jpeg","images/thumbnails/should-i-buy-a-house/200.webp","images/thumbnails/should-i-buy-a-house/400.avif","images/thumbnails/should-i-buy-a-house/400.jpeg","images/thumbnails/should-i-buy-a-house/400.webp","images/thumbnails/should-i-buy-a-house/600.avif","images/thumbnails/should-i-buy-a-house/600.jpeg","images/thumbnails/should-i-buy-a-house/600.webp","images/thumbnails/should-i-buy-a-house/800.avif","images/thumbnails/should-i-buy-a-house/800.jpeg","images/thumbnails/should-i-buy-a-house/800.webp","images/thumbnails/should-i-buy-a-house/blurred.jpeg","images/thumbnails/sotu-2020/1000.avif","images/thumbnails/sotu-2020/1000.jpeg","images/thumbnails/sotu-2020/1000.webp","images/thumbnails/sotu-2020/200.avif","images/thumbnails/sotu-2020/200.jpeg","images/thumbnails/sotu-2020/200.webp","images/thumbnails/sotu-2020/400.avif","images/thumbnails/sotu-2020/400.jpeg","images/thumbnails/sotu-2020/400.webp","images/thumbnails/sotu-2020/600.avif","images/thumbnails/sotu-2020/600.jpeg","images/thumbnails/sotu-2020/600.webp","images/thumbnails/sotu-2020/800.avif","images/thumbnails/sotu-2020/800.jpeg","images/thumbnails/sotu-2020/800.webp","images/thumbnails/sotu-2020/blurred.jpeg","images/thumbnails/stepped-up-loophole/1000.avif","images/thumbnails/stepped-up-loophole/1000.jpeg","images/thumbnails/stepped-up-loophole/1000.webp","images/thumbnails/stepped-up-loophole/200.avif","images/thumbnails/stepped-up-loophole/200.jpeg","images/thumbnails/stepped-up-loophole/200.webp","images/thumbnails/stepped-up-loophole/400.avif","images/thumbnails/stepped-up-loophole/400.jpeg","images/thumbnails/stepped-up-loophole/400.webp","images/thumbnails/stepped-up-loophole/600.avif","images/thumbnails/stepped-up-loophole/600.jpeg","images/thumbnails/stepped-up-loophole/600.webp","images/thumbnails/stepped-up-loophole/800.avif","images/thumbnails/stepped-up-loophole/800.jpeg","images/thumbnails/stepped-up-loophole/800.webp","images/thumbnails/stepped-up-loophole/blurred.jpeg","images/thumbnails/steves-connections/1000.avif","images/thumbnails/steves-connections/1000.jpeg","images/thumbnails/steves-connections/1000.webp","images/thumbnails/steves-connections/200.avif","images/thumbnails/steves-connections/200.jpeg","images/thumbnails/steves-connections/200.webp","images/thumbnails/steves-connections/400.avif","images/thumbnails/steves-connections/400.jpeg","images/thumbnails/steves-connections/400.webp","images/thumbnails/steves-connections/600.avif","images/thumbnails/steves-connections/600.jpeg","images/thumbnails/steves-connections/600.webp","images/thumbnails/steves-connections/800.avif","images/thumbnails/steves-connections/800.jpeg","images/thumbnails/steves-connections/800.webp","images/thumbnails/steves-connections/blurred.jpeg","images/thumbnails/superyachts-animated-map/1000.avif","images/thumbnails/superyachts-animated-map/1000.jpeg","images/thumbnails/superyachts-animated-map/1000.webp","images/thumbnails/superyachts-animated-map/200.avif","images/thumbnails/superyachts-animated-map/200.jpeg","images/thumbnails/superyachts-animated-map/200.webp","images/thumbnails/superyachts-animated-map/400.avif","images/thumbnails/superyachts-animated-map/400.jpeg","images/thumbnails/superyachts-animated-map/400.webp","images/thumbnails/superyachts-animated-map/600.avif","images/thumbnails/superyachts-animated-map/600.jpeg","images/thumbnails/superyachts-animated-map/600.webp","images/thumbnails/superyachts-animated-map/800.avif","images/thumbnails/superyachts-animated-map/800.jpeg","images/thumbnails/superyachts-animated-map/800.webp","images/thumbnails/superyachts-animated-map/blurred.jpeg","images/thumbnails/vaxxed-govs/1000.avif","images/thumbnails/vaxxed-govs/1000.jpeg","images/thumbnails/vaxxed-govs/1000.webp","images/thumbnails/vaxxed-govs/200.avif","images/thumbnails/vaxxed-govs/200.jpeg","images/thumbnails/vaxxed-govs/200.webp","images/thumbnails/vaxxed-govs/400.avif","images/thumbnails/vaxxed-govs/400.jpeg","images/thumbnails/vaxxed-govs/400.webp","images/thumbnails/vaxxed-govs/600.avif","images/thumbnails/vaxxed-govs/600.jpeg","images/thumbnails/vaxxed-govs/600.webp","images/thumbnails/vaxxed-govs/800.avif","images/thumbnails/vaxxed-govs/800.jpeg","images/thumbnails/vaxxed-govs/800.webp","images/thumbnails/vaxxed-govs/blurred.jpeg","images/thumbnails/wsj-clocks/1000.avif","images/thumbnails/wsj-clocks/1000.jpeg","images/thumbnails/wsj-clocks/1000.webp","images/thumbnails/wsj-clocks/200.avif","images/thumbnails/wsj-clocks/200.jpeg","images/thumbnails/wsj-clocks/200.webp","images/thumbnails/wsj-clocks/400.avif","images/thumbnails/wsj-clocks/400.jpeg","images/thumbnails/wsj-clocks/400.webp","images/thumbnails/wsj-clocks/600.avif","images/thumbnails/wsj-clocks/600.jpeg","images/thumbnails/wsj-clocks/600.webp","images/thumbnails/wsj-clocks/800.avif","images/thumbnails/wsj-clocks/800.jpeg","images/thumbnails/wsj-clocks/800.webp","images/thumbnails/wsj-clocks/blurred.jpeg","images/thumbnails/wsj_clocks/1000.avif","images/thumbnails/wsj_clocks/1000.jpeg","images/thumbnails/wsj_clocks/1000.webp","images/thumbnails/wsj_clocks/200.avif","images/thumbnails/wsj_clocks/200.jpeg","images/thumbnails/wsj_clocks/200.webp","images/thumbnails/wsj_clocks/400.avif","images/thumbnails/wsj_clocks/400.jpeg","images/thumbnails/wsj_clocks/400.webp","images/thumbnails/wsj_clocks/600.avif","images/thumbnails/wsj_clocks/600.jpeg","images/thumbnails/wsj_clocks/600.webp","images/thumbnails/wsj_clocks/800.avif","images/thumbnails/wsj_clocks/800.jpeg","images/thumbnails/wsj_clocks/800.webp","images/thumbnails/wsj_clocks/blurred.jpeg","images/thumbnails/wsj_homedepot/1000.avif","images/thumbnails/wsj_homedepot/1000.jpeg","images/thumbnails/wsj_homedepot/1000.webp","images/thumbnails/wsj_homedepot/200.avif","images/thumbnails/wsj_homedepot/200.jpeg","images/thumbnails/wsj_homedepot/200.webp","images/thumbnails/wsj_homedepot/400.avif","images/thumbnails/wsj_homedepot/400.jpeg","images/thumbnails/wsj_homedepot/400.webp","images/thumbnails/wsj_homedepot/600.avif","images/thumbnails/wsj_homedepot/600.jpeg","images/thumbnails/wsj_homedepot/600.webp","images/thumbnails/wsj_homedepot/800.avif","images/thumbnails/wsj_homedepot/800.jpeg","images/thumbnails/wsj_homedepot/800.webp","images/thumbnails/wsj_homedepot/blurred.jpeg","images/thumbnails/zucks-hawaii/1000.avif","images/thumbnails/zucks-hawaii/1000.jpeg","images/thumbnails/zucks-hawaii/1000.webp","images/thumbnails/zucks-hawaii/200.avif","images/thumbnails/zucks-hawaii/200.jpeg","images/thumbnails/zucks-hawaii/200.webp","images/thumbnails/zucks-hawaii/400.avif","images/thumbnails/zucks-hawaii/400.jpeg","images/thumbnails/zucks-hawaii/400.webp","images/thumbnails/zucks-hawaii/600.avif","images/thumbnails/zucks-hawaii/600.jpeg","images/thumbnails/zucks-hawaii/600.webp","images/thumbnails/zucks-hawaii/800.avif","images/thumbnails/zucks-hawaii/800.jpeg","images/thumbnails/zucks-hawaii/800.webp","images/thumbnails/zucks-hawaii/blurred.jpeg","robots.txt","service-worker.js"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".ttf":"font/ttf",".jpeg":"image/jpeg",".gif":"image/gif",".avif":"image/avif",".webp":"image/webp",".txt":"text/plain"},
	_: {
		entry: {"file":"start-e109b4ac.js","js":["start-e109b4ac.js","chunks/index-3c2248be.js","chunks/index-f9367662.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "sitemap.xml",
				pattern: /^\/sitemap\.xml$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/sitemap.xml.js')
			},
			{
				type: 'endpoint',
				id: "site.webmanifest",
				pattern: /^\/site\.webmanifest$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/site.webmanifest.js')
			},
			{
				type: 'endpoint',
				id: "manifest.json",
				pattern: /^\/manifest\.json$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/manifest.json.js')
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "post",
				pattern: /^\/post\/?$/,
				names: [],
				types: [],
				path: "/post",
				shadow: () => import('./entries/endpoints/post/index.js'),
				a: [0,4],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/clips/[projectType].json",
				pattern: /^\/api\/clips\/([^/]+?)\.json$/,
				names: ["projectType"],
				types: [null],
				load: () => import('./entries/endpoints/api/clips/_projectType_.json.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
