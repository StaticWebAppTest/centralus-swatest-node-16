module.exports = async function (context, req) {
  const date = "2025-02-14T02:13:56.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

