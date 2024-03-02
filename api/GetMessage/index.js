module.exports = async function (context, req) {
  const date = "2024-03-02T15:08:12.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

