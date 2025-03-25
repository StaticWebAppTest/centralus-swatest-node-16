module.exports = async function (context, req) {
  const date = "2025-03-25T12:24:39.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

