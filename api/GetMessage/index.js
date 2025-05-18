module.exports = async function (context, req) {
  const date = "2025-05-18T18:16:36.812Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

