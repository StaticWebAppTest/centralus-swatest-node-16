module.exports = async function (context, req) {
  const date = "2024-05-05T16:11:25.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

