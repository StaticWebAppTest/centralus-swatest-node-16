module.exports = async function (context, req) {
  const date = "2025-05-09T05:13:33.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

