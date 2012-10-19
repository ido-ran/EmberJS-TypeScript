declare module Em {
    class Application {
        static create(extender?: { }): Application;
        MyView: View;
    }

    class View {
        static extend(extender?: { }): View;
    }
}