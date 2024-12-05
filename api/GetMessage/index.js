module.exports = async function (context, req) {
  const date = "2024-12-05T11:10:55.600Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

