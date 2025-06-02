module.exports = async function (context, req) {
  const date = "2025-06-02T21:13:30.954Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

