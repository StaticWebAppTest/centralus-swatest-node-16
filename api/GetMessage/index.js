module.exports = async function (context, req) {
  const date = "2024-07-02T03:11:20.714Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

