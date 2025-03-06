module.exports = async function (context, req) {
  const date = "2025-03-06T10:13:20.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

