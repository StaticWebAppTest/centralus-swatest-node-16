module.exports = async function (context, req) {
  const date = "2024-07-02T12:18:29.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

