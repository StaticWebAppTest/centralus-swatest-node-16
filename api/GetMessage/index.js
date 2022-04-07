module.exports = async function (context, req) {
  const date = "2022-04-07T00:48:16.184Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

