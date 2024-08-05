module.exports = async function (context, req) {
  const date = "2024-08-05T04:13:11.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

