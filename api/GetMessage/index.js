module.exports = async function (context, req) {
  const date = "2024-01-02T10:09:51.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

