module.exports = async function (context, req) {
  const date = "2023-05-06T00:43:26.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

