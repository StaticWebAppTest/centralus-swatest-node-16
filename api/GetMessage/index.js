module.exports = async function (context, req) {
  const date = "2023-12-02T18:10:17.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

