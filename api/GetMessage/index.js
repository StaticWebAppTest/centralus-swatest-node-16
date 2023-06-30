module.exports = async function (context, req) {
  const date = "2023-06-30T05:09:12.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

