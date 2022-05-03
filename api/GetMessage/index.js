module.exports = async function (context, req) {
  const date = "2022-05-03T18:18:05.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

