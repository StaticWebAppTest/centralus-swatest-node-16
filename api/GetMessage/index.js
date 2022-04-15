module.exports = async function (context, req) {
  const date = "2022-04-15T20:11:16.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

