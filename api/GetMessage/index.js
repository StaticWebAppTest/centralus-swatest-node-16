module.exports = async function (context, req) {
  const date = "2022-04-17T12:16:45.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

