module.exports = async function (context, req) {
  const date = "2024-06-17T02:36:34.954Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

