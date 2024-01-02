module.exports = async function (context, req) {
  const date = "2024-01-02T08:12:09.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

