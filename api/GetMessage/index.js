module.exports = async function (context, req) {
  const date = "2022-11-17T02:48:58.080Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

