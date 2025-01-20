module.exports = async function (context, req) {
  const date = "2025-01-20T21:10:15.739Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

