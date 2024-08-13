module.exports = async function (context, req) {
  const date = "2024-08-13T15:10:56.849Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

