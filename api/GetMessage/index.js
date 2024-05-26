module.exports = async function (context, req) {
  const date = "2024-05-26T00:49:54.523Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

