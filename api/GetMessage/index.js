module.exports = async function (context, req) {
  const date = "2022-08-17T19:08:40.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

