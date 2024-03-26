module.exports = async function (context, req) {
  const date = "2024-03-26T21:08:32.031Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

