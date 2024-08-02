module.exports = async function (context, req) {
  const date = "2024-08-02T14:09:34.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

