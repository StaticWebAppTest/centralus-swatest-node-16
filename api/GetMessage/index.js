module.exports = async function (context, req) {
  const date = "2022-04-07T03:23:18.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

