module.exports = async function (context, req) {
  const date = "2024-03-20T05:09:45.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

