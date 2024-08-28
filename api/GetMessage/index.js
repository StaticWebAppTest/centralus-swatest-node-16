module.exports = async function (context, req) {
  const date = "2024-08-28T17:09:26.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

