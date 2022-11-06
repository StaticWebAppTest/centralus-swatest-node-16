module.exports = async function (context, req) {
  const date = "2022-11-06T06:13:44.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

