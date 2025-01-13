module.exports = async function (context, req) {
  const date = "2025-01-13T12:24:05.956Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

