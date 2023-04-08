module.exports = async function (context, req) {
  const date = "2023-04-08T20:08:32.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

