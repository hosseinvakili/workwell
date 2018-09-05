document.getElementById("mobile-container").appendChild(
    Workwell.ui.createList()
        .setHeader("header")
        .add(
            Workwell.ui.createListItem()
                .addToCenter(
                    Workwell.ui.createListItemTitle("chevron")
                )
                .addToRight(
                    Workwell.ui.createListItemChevronIcon()
                )
        )
        .add(
            Workwell.ui.createListItem()
                .addToCenter(
                    Workwell.ui.createListItemTitle("check")
                )
                .addToRight(
                    Workwell.ui.createIcon().setType("check")
                )
        )
        .toHTMLElement()
);