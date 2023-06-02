module.exports = async function (context, req) {
  const date = "2023-06-02T18:10:31.219Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

