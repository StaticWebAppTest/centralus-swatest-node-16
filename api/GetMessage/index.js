module.exports = async function (context, req) {
  const date = "2025-01-11T12:20:34.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

