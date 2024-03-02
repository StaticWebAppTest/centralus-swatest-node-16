module.exports = async function (context, req) {
  const date = "2024-03-02T10:08:20.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

