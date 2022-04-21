module.exports = async function (context, req) {
  const date = "2022-04-21T19:11:39.053Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

