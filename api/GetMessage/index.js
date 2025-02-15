module.exports = async function (context, req) {
  const date = "2025-02-15T21:10:25.868Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

