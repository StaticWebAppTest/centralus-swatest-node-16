module.exports = async function (context, req) {
  const date = "2022-04-08T22:10:44.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

