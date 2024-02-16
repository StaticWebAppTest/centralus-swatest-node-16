module.exports = async function (context, req) {
  const date = "2024-02-16T00:40:29.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

