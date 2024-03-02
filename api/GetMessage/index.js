module.exports = async function (context, req) {
  const date = "2024-03-02T06:12:41.159Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

