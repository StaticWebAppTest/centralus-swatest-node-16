module.exports = async function (context, req) {
  const date = "2024-03-30T10:09:17.600Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

