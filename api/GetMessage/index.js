module.exports = async function (context, req) {
  const date = "2025-06-09T12:27:35.031Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

