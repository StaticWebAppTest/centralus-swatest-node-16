module.exports = async function (context, req) {
  const date = "2024-06-05T05:09:53.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

