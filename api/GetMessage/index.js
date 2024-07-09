module.exports = async function (context, req) {
  const date = "2024-07-09T21:10:27.849Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

