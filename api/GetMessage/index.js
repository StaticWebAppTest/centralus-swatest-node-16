module.exports = async function (context, req) {
  const date = "2024-12-02T04:15:25.523Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

