module.exports = async function (context, req) {
  const date = "2023-01-05T22:09:18.442Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

