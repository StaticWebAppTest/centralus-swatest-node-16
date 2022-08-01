module.exports = async function (context, req) {
  const date = "2022-08-01T22:11:31.635Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

