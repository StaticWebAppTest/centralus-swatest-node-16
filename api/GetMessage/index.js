module.exports = async function (context, req) {
  const date = "2022-12-21T16:13:51.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

