module.exports = async function (context, req) {
  const date = "2024-06-17T12:18:57.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

