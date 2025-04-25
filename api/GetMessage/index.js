module.exports = async function (context, req) {
  const date = "2025-04-25T14:12:27.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

