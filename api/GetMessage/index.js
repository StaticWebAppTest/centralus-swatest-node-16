module.exports = async function (context, req) {
  const date = "2023-01-02T03:10:12.482Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

