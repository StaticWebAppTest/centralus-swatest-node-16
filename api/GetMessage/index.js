module.exports = async function (context, req) {
  const date = "2022-08-06T02:55:48.269Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

