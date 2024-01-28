module.exports = async function (context, req) {
  const date = "2024-01-28T16:09:15.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

