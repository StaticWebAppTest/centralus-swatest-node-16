module.exports = async function (context, req) {
  const date = "2024-06-01T07:08:40.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

