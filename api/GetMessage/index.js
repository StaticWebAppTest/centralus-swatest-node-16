module.exports = async function (context, req) {
  const date = "2025-12-13T17:11:56.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

