module.exports = async function (context, req) {
  const date = "2022-05-14T12:21:09.927Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

