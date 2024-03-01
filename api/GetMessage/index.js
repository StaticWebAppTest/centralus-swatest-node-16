module.exports = async function (context, req) {
  const date = "2024-03-01T10:09:37.786Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

