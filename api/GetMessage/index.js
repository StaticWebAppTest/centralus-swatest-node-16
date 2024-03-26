module.exports = async function (context, req) {
  const date = "2024-03-26T05:08:38.158Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

