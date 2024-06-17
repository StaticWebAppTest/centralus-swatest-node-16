module.exports = async function (context, req) {
  const date = "2024-06-17T05:13:29.367Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

