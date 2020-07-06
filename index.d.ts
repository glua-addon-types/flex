declare namespace list {
    /**
     * if you will use custom types (:)
     * you need to @noSelfInFile
     * @param name 
     * @param identifier 
     * @name list.Set
     * @realm client, server, menu
     * @wiki https://wiki.garrysmod.com/page/list/Set
     * @param {void} this - no description
     * @param {string} identifier - The list identifier
     * @param {any} key - The key in the list to set
     * @param {Function} item - The item to set to the list as key
     * @returns {void}
     **/
    function Set(this: void, identifier: "FLEX", key: any, item: (this: void, ent: Entity, flex: any) => void): void
}
