module.exports = async function (context, req) {
  const date = "2024-02-27T02:13:53.782Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

