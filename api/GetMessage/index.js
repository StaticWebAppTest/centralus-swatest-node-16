module.exports = async function (context, req) {
  const date = "2024-01-01T20:09:17.031Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

