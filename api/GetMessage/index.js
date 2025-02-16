module.exports = async function (context, req) {
  const date = "2025-02-16T10:10:55.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

