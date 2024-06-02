module.exports = async function (context, req) {
  const date = "2024-06-02T05:09:48.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

