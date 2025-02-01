module.exports = async function (context, req) {
  const date = "2025-02-01T14:09:19.088Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

