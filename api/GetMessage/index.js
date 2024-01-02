module.exports = async function (context, req) {
  const date = "2024-01-02T16:10:24.911Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

