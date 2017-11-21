<section>
  <div class="page-header">
    <h1>{{vm.calendarview._id ? 'Edit Calendarlist' : 'New Class'}}</h1>
  </div>
  <div class="col-md-12">
    <form name="vm.form.calendarviewForm" class="form-horizontal" ng-submit="vm.save(vm.form.calendarviewForm.$valid)" novalidate>
      <fieldset>
        <div class="form-group" show-errors>
          <label class="control-label" for="title">Name</label>
          <input name="title" type="text" ng-model="vm.calendarview.title" id="title" class="form-control" placeholder="Name" required>
          <div ng-messages="vm.form.calendarviewForm.name.$error" role="alert">
            <p class="help-block error-text" ng-message="required">Calendarlist name is required.</p>
          </div>
          <label class="control-label" for="trainer">Trainer</label>
          <select ng-model="User" ng-options="x for x in User">
          </select>
          <input name="trainer" type="" ng-model="vm.calendarview.trainer" id="trainer" class="form-control" placeholder="Trainer" required>
          <div ng-messages="vm.form.calendarviewForm.trainer.$error" role="alert">
            <p class="help-block error-text" ng-message="required">Calendarlist trainer is required.</p>
          </div>

          <div class='row'>
            <div class='col-md-6'>
              <label class="control-label" for="start">Start</label>
              <div class='input-group date' ng-model="vm.calendarview.start" id='datetimepicker1'>
                <input name="start" type='text'  ng-model="vm.calendarview.start" id="start" class="form-control" placeholder="Start" required/>
                <span class="input-group-addon">
                <span class="glyphicon glyphicon-calendar"></span>
                </span>
              </div>
              <div ng-messages="vm.form.calendarviewForm.start.$error" role="alert">
                <p class="help-block error-text" ng-message="required">Calendarlist start is required.</p>
              </div>
            </div>
            <div class='col-md-6'>
              <label class="control-label" for="end">End</label>
              <div class='input-group date'  ng-model="vm.calendarview.end" id='datetimepicker2'>
                <input name="end" type='text'  ng-model="vm.calendarview.end" id="end" class="form-control" placeholder="End" required />
                <span class="input-group-addon">
                <span class="glyphicon glyphicon-calendar"></span>
                </span>
                <script type="text/javascript">
                  $(function() {
                    $('#datetimepicker1').datetimepicker({
                      sideBySide:true,
                    });
                    console.log('hi');
                    $("#start").trigger("input");
                    $('#datetimepicker2').datetimepicker({
                      sideBySide:true,
                      useCurrent: false //Important! See issue #1075
                    });
                    $("#end").trigger("input");
                    $("#datetimepicker1").on("dp.change", function(e) {
                      $("#datetimepicker1").trigger("input");
                      $("#start").trigger("input");
                      $('#datetimepicker2').data("DateTimePicker").minDate(e.date);
                    });
                    $("#datetimepicker2").on("dp.change", function(e) {
                      $("#datetimepicker2").trigger("input");
                      $("#end").trigger("input");
                      $('#datetimepicker1').data("DateTimePicker").maxDate(e.date);
                    });
                  });
                </script>
              </div>
              <div ng-messages="vm.form.calendarviewForm.end.$error" role="alert">
                <p class="help-block error-text" ng-message="required">Calendarlist end is required.</p>
              </div>
            </div>

          </div>
          <label class="control-label" for="details">Details</label>
          <input name="details" type="text" ng-model="vm.calendarview.details" id="details" class="form-control" placeholder="Details">
          <label class="control-label" for="details">Color</label>
          <input name="details" type="text" ng-model="vm.calendarview.color" id="color" class="form-control" placeholder="Color">

        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-default">{{vm.calendarview._id ? 'Update' : 'Create'}}</button>
        </div>
        <div ng-show="vm.error" class="text-danger">
          <strong ng-bind="vm.error"></strong>
        </div>
      </fieldset>
    </form>
  </div>
</section>
