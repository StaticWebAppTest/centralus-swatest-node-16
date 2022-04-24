module.exports = async function (context, req) {
  const date = "2022-04-24T03:23:02.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

