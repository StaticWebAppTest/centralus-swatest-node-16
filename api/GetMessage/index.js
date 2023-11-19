module.exports = async function (context, req) {
  const date = "2023-11-19T04:10:42.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

