module.exports = async function (context, req) {
  const date = "2023-07-20T20:09:17.471Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

