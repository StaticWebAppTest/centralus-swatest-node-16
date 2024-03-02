module.exports = async function (context, req) {
  const date = "2024-03-02T16:10:31.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

