module.exports = async function (context, req) {
  const date = "2024-05-21T21:09:17.754Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

