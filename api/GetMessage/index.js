module.exports = async function (context, req) {
  const date = "2025-09-26T10:13:23.457Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

