import { reactive } from "vue";

export interface IVector2 {
    x: number
    y: number
}

export class Vector2 implements IVector2 {
    x: number = 0
    y: number = 0

    constructor(x: number = 0, y: number = 0) {
        this.x = x
        this.y = y
    }

    add(vector: Vector2): Vector2 {
        return new Vector2(this.x + vector.x, this.y + vector.y)
    }

    sub(vector: Vector2): Vector2 {
        return new Vector2(this.x - vector.x, this.y - vector.y)
    }

    mulScalar(scalar: number): Vector2 {
        return new Vector2(this.x * scalar, this.y * scalar)
    }

    divScalar(scalar: number): Vector2 {
        return new Vector2(this.x / scalar, this.y / scalar)
    }

    copy(vector: Vector2) {
        this.x = vector.x
        this.y = vector.y
    }

    apply(x: number, y: number) {
        this.x = x
        this.y = y
    }
}



export class Position extends Vector2 {
    constructor() {
        super()
    }

    get editor(): Vector2 {
        return this.mulScalar(state.scale).sub(state.editorTranslate)
    }

    setEditor(iv: IVector2) {
        if (iv instanceof Vector2) {
            this.copy(iv.divScalar(state.scale).add(state.editorTranslate))
        } else {
            this.copy(new Vector2(iv.x, iv.y).divScalar(state.scale).add(state.editorTranslate))
        }
    }

    get client(): Vector2 {
        return this.editor.add(state.editorPosition)
    }

    setClient(iv: IVector2) {
        if (iv instanceof Vector2) {
            this.setEditor(iv.sub(state.editorPosition))
        } else {
            this.setEditor(new Vector2(iv.x, iv.y).sub(state.editorPosition))
        }
    }
}

export class Sender {
    position: Position = new Position()
    color: string = 'var(--grey-6)'
}

interface State {
    nodes: any[],
    senders: Sender[],
    editorPosition: Vector2,
    editorTranslate: Vector2,
    scale: number,
}

export const state = reactive<State>({
    nodes: [],
    senders: [],
    editorPosition: new Vector2(),
    editorTranslate: new Vector2(),
    scale: 1,
})

export const mutations = {
    setNodes(nodes: []) {
        state.nodes = nodes
    },
    addSender(sender: Sender) {
        state.senders.push(sender)
    }
}

export const actions = {
    async fetchNodes() {
        const nodes = await fetch('http://localhost:3000/nodes').then(res => res.json())
        mutations.setNodes(nodes)
    },
    async addSender(sender: Sender) {
        mutations.addSender(sender)
    }
}

export const getters = {
    getNodes: () => state.nodes,
}