module.exports = async function (context, req) {
  const date = "2025-02-10T12:22:54.088Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

