module.exports = async function (context, req) {
  const date = "2024-12-02T10:14:00.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

