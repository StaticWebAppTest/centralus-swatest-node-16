module.exports = async function (context, req) {
  const date = "2024-05-09T00:43:54.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

