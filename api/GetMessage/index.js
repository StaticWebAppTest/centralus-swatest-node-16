module.exports = async function (context, req) {
  const date = "2025-05-06T12:28:00.888Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

