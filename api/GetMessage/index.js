module.exports = async function (context, req) {
  const date = "2022-04-24T19:08:38.620Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

