module.exports = async function (context, req) {
  const date = "2024-01-18T08:12:04.786Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

