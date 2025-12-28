module.exports = async function (context, req) {
  const date = "2025-12-28T17:12:20.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

