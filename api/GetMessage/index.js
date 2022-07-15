module.exports = async function (context, req) {
  const date = "2022-07-15T13:39:48.927Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

