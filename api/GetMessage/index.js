module.exports = async function (context, req) {
  const date = "2024-08-02T07:10:55.934Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

