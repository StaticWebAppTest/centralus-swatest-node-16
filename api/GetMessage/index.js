module.exports = async function (context, req) {
  const date = "2024-11-26T07:12:35.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

