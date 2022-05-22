module.exports = async function (context, req) {
  const date = "2022-05-22T04:14:53.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

