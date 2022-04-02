module.exports = async function (context, req) {
  const date = "2022-04-02T22:12:15.635Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

