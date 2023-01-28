module.exports = async function (context, req) {
  const date = "2023-01-28T02:14:37.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

