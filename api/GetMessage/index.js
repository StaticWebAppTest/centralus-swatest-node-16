module.exports = async function (context, req) {
  const date = "2025-01-04T10:11:36.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

