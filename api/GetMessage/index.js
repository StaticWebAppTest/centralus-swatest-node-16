module.exports = async function (context, req) {
  const date = "2024-03-21T21:09:45.849Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

