module.exports = async function (context, req) {
  const date = "2025-05-21T08:18:27.857Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

