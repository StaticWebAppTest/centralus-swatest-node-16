module.exports = async function (context, req) {
  const date = "2025-05-16T17:10:35.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

