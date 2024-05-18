module.exports = async function (context, req) {
  const date = "2024-05-18T00:43:53.965Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

