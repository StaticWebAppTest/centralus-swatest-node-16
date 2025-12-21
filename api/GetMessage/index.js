module.exports = async function (context, req) {
  const date = "2025-12-21T21:12:39.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

