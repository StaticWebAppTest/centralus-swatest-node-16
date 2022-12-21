module.exports = async function (context, req) {
  const date = "2022-12-21T04:11:34.635Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

