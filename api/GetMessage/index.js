module.exports = async function (context, req) {
  const date = "2024-03-31T00:46:32.601Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

