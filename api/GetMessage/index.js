module.exports = async function (context, req) {
  const date = "2024-12-15T21:10:48.601Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

