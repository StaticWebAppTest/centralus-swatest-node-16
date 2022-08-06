module.exports = async function (context, req) {
  const date = "2022-08-06T03:41:58.080Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

