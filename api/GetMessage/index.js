module.exports = async function (context, req) {
  const date = "2023-12-26T07:08:33.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

