module.exports = async function (context, req) {
  const date = "2024-03-05T21:08:43.878Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

