module.exports = async function (context, req) {
  const date = "2022-04-26T08:13:42.635Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

