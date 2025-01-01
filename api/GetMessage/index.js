module.exports = async function (context, req) {
  const date = "2025-01-01T17:09:56.189Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

