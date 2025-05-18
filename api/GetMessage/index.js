module.exports = async function (context, req) {
  const date = "2025-05-18T05:12:55.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

