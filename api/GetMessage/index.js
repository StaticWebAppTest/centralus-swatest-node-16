module.exports = async function (context, req) {
  const date = "2024-11-15T20:13:24.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

