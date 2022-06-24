module.exports = async function (context, req) {
  const date = "2022-06-24T06:13:52.927Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

