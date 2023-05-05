module.exports = async function (context, req) {
  const date = "2023-05-05T00:43:06.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

