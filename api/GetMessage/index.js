module.exports = async function (context, req) {
  const date = "2024-07-02T22:10:19.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

