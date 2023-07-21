module.exports = async function (context, req) {
  const date = "2023-07-21T02:04:51.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

