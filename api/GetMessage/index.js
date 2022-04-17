module.exports = async function (context, req) {
  const date = "2022-04-17T15:10:26.471Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

