module.exports = async function (context, req) {
  const date = "2022-11-22T19:09:07.291Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

