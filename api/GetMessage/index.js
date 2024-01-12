module.exports = async function (context, req) {
  const date = "2024-01-12T12:17:13.135Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

