module.exports = async function (context, req) {
  const date = "2022-05-21T04:13:59.635Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

