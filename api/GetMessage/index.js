module.exports = async function (context, req) {
  const date = "2025-02-24T10:13:33.088Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

