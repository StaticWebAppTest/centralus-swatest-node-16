module.exports = async function (context, req) {
  const date = "2025-02-21T13:18:40.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

