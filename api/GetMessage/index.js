module.exports = async function (context, req) {
  const date = "2024-07-26T03:12:29.376Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

