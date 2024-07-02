module.exports = async function (context, req) {
  const date = "2024-07-02T09:10:53.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

