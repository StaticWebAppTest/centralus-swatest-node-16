module.exports = async function (context, req) {
  const date = "2025-06-17T10:15:03.998Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

