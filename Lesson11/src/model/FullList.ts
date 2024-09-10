import ListItem from "./ListItem"

interface List {
    list: ListItem[]

    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem): void
    removeItem(itemObj: ListItem): void
}

export default class FullList implements List {

    static instance: FullList = new FullList()

    private constructor(private _list: ListItem[] = []) { }


    get list(): ListItem[] {
        return this._list
    }

    save(): void {
        localStorage.setItem('myList', JSON.stringify(this._list))
    }

    clearList(): void {
        this._list = []
        this.save()
    }

    addItem(itemObj: ListItem): void {
        this._list = [...this._list, itemObj]
        this.save()
    }

    load(): void {
        const storedList: string | null = localStorage.getItem('myList')
        if (typeof storedList != 'string') return

        const parsedList: { _id: string, _item: string, _checked: boolean }[] =
            JSON.parse(storedList)

        const list = parsedList.map(item => {
            return new ListItem(item._id, item._item, item._checked)
        });
        FullList.instance = new FullList(list)
    }

    removeItem(itemObj: ListItem): void {
        this._list = this._list.filter(item => item.id !== itemObj.id)
        this.save()
    }
}

