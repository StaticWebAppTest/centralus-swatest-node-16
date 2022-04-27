module.exports = async function (context, req) {
  const date = "2022-04-27T03:37:04.858Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

