module.exports = async function (context, req) {
  const date = "2024-04-20T20:09:11.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

