module.exports = async function (context, req) {
  const date = "2025-10-01T15:12:48.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

