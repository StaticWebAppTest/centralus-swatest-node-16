module.exports = async function (context, req) {
  const date = "2024-04-14T14:26:34.008Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

