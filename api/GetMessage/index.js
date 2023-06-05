module.exports = async function (context, req) {
  const date = "2023-06-05T05:08:43.509Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

