module.exports = async function (context, req) {
  const date = "2025-02-21T18:16:10.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

