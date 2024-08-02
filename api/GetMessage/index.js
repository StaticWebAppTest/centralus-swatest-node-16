module.exports = async function (context, req) {
  const date = "2024-08-02T10:11:28.786Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

