module.exports = async function (context, req) {
  const date = "2022-04-27T16:15:13.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

