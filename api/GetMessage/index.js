module.exports = async function (context, req) {
  const date = "2024-08-06T20:09:24.331Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

