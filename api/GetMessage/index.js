module.exports = async function (context, req) {
  const date = "2023-05-02T05:08:46.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

