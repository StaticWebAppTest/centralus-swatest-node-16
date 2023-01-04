module.exports = async function (context, req) {
  const date = "2023-01-04T19:08:56.994Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

