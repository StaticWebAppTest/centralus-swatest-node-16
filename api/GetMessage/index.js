module.exports = async function (context, req) {
  const date = "2025-05-01T21:12:25.610Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

