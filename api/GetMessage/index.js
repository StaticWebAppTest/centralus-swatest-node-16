module.exports = async function (context, req) {
  const date = "2024-03-06T00:41:16.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

