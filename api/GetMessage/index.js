module.exports = async function (context, req) {
  const date = "2024-07-16T00:50:22.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

