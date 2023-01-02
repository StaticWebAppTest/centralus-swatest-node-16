module.exports = async function (context, req) {
  const date = "2023-01-02T04:11:31.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

