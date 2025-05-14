module.exports = async function (context, req) {
  const date = "2025-05-14T10:14:22.457Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

