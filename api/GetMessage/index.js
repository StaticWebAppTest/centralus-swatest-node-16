module.exports = async function (context, req) {
  const date = "2024-07-02T11:09:15.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

