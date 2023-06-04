module.exports = async function (context, req) {
  const date = "2023-06-04T20:08:29.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

