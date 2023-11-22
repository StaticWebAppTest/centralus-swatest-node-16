module.exports = async function (context, req) {
  const date = "2023-11-22T00:45:35.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

