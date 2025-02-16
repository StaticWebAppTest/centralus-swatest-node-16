module.exports = async function (context, req) {
  const date = "2025-02-16T19:09:25.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

