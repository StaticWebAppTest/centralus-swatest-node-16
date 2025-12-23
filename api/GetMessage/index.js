module.exports = async function (context, req) {
  const date = "2025-12-23T14:14:42.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

