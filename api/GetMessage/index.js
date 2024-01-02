module.exports = async function (context, req) {
  const date = "2024-01-02T01:52:26.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

