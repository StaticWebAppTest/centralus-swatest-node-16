module.exports = async function (context, req) {
  const date = "2024-07-02T15:10:34.782Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

