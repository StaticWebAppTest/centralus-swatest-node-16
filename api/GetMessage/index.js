module.exports = async function (context, req) {
  const date = "2023-12-18T15:10:03.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

