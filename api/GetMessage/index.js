module.exports = async function (context, req) {
  const date = "2024-01-02T11:07:53.913Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

