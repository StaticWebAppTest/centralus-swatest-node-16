module.exports = async function (context, req) {
  const date = "2024-04-26T00:42:53.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

