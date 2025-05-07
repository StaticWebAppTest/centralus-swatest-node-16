module.exports = async function (context, req) {
  const date = "2025-05-07T10:14:32.031Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

