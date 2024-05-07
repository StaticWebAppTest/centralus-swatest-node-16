module.exports = async function (context, req) {
  const date = "2024-05-07T00:43:29.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

