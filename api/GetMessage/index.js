module.exports = async function (context, req) {
  const date = "2025-05-01T07:13:38.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

