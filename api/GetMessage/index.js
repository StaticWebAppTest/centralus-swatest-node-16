module.exports = async function (context, req) {
  const date = "2022-04-09T22:10:29.875Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

