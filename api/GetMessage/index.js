module.exports = async function (context, req) {
  const date = "2025-02-11T09:12:35.428Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

