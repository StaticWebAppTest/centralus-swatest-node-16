module.exports = async function (context, req) {
  const date = "2022-07-10T21:08:48.056Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

