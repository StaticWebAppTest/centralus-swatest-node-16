module.exports = async function (context, req) {
  const date = "2022-06-06T17:14:48.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

