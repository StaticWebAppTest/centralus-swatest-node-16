module.exports = async function (context, req) {
  const date = "2024-09-22T10:11:19.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

