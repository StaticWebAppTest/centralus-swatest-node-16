module.exports = async function (context, req) {
  const date = "2024-12-07T10:13:02.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

