module.exports = async function (context, req) {
  const date = "2023-11-29T00:43:49.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

