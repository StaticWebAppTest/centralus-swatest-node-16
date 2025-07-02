module.exports = async function (context, req) {
  const date = "2025-07-02T10:15:20.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

