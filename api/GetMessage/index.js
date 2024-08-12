module.exports = async function (context, req) {
  const date = "2024-08-12T04:13:11.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

