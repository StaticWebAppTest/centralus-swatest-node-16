module.exports = async function (context, req) {
  const date = "2024-06-09T05:09:42.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

