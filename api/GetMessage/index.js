module.exports = async function (context, req) {
  const date = "2023-09-14T20:09:02.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

