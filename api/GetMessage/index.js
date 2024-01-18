module.exports = async function (context, req) {
  const date = "2024-01-18T12:17:46.562Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

