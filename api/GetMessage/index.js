module.exports = async function (context, req) {
  const date = "2022-04-17T04:12:51.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

