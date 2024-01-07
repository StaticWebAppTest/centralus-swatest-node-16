module.exports = async function (context, req) {
  const date = "2024-01-07T10:08:54.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

