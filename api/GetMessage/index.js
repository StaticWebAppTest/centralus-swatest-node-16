module.exports = async function (context, req) {
  const date = "2023-08-24T10:08:50.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

