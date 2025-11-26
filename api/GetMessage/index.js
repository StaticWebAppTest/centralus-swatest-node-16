module.exports = async function (context, req) {
  const date = "2025-11-26T17:12:50.958Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

