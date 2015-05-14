var CollapsibleSection = React.createClass({
    getInitialState: function() {
        return {collapsed: false};
    },

    handleClick: function(event) {
        this.setState({collapsed: !this.state.collapsed})
    },

    render: function() {
        var collapsed = this.state.collapsed?'widget__body--collapsed':'';
        return (
            <div className="widget-wrapper">
                <div className="widget__title" onClick={this.handleClick}>
                    {this.props.title}
                </div>
                <div className={"widget__body " + collapsed}>
                    <p>{this.props.children}</p>
                </div>
            </div>
        );
    }
});

React.render(
    <CollapsibleSection title="This is the title">
        This is the body.<br /><br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat varius est, sed rhoncus felis vehicula non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sit amet arcu malesuada, dapibus mi ac, commodo arcu. Donec at semper nibh. Duis pulvinar sagittis sollicitudin. Morbi mollis nisl tincidunt ligula tincidunt mollis. Nam interdum ligula nec libero ullamcorper, ut sodales lorem lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec lectus neque, porttitor sed fermentum vitae, tincidunt sed ante. Vestibulum urna sapien, sollicitudin id dolor nec, sagittis venenatis lacus.
    </CollapsibleSection>,
    document.getElementById('widget')
);
