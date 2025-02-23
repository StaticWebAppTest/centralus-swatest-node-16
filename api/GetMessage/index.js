module.exports = async function (context, req) {
  const date = "2025-02-23T08:15:04.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

