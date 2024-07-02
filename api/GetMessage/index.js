module.exports = async function (context, req) {
  const date = "2024-07-02T18:13:26.186Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

