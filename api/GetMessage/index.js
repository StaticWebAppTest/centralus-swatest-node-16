module.exports = async function (context, req) {
  const date = "2024-01-31T23:09:12.215Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

