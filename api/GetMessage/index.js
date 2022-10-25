module.exports = async function (context, req) {
  const date = "2022-10-25T20:17:10.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

