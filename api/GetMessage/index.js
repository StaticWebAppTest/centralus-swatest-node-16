module.exports = async function (context, req) {
  const date = "2025-01-13T07:12:30.097Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

