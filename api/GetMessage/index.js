module.exports = async function (context, req) {
  const date = "2024-10-02T21:12:55.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

