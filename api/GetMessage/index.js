module.exports = async function (context, req) {
  const date = "2024-08-24T23:10:35.786Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

