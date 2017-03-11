
public class $Activity extends BindingActivity<?, $Presenter> implements
        $Contract.View{
    private $ViewWrapper mViewWrapper = new $ViewWrapper();


    @Override
    protected $Presenter createPresenter() {
        return new $Presenter(this);
    }

    @Override
    protected int createLayoutId() {
        return ?;
    }
}
