module.exports = async function (context, req) {
  const date = "2022-04-30T19:08:38.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

