module.exports = async function (context, req) {
  const date = "2022-11-27T12:17:28.138Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

