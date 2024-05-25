module.exports = async function (context, req) {
  const date = "2024-05-25T06:13:29.362Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

