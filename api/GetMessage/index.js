module.exports = async function (context, req) {
  const date = "2023-04-12T12:17:13.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

