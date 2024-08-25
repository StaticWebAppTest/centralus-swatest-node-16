module.exports = async function (context, req) {
  const date = "2024-08-25T12:18:21.356Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

