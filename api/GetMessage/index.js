module.exports = async function (context, req) {
  const date = "2025-02-08T13:13:19.754Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

