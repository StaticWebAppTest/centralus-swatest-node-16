module.exports = async function (context, req) {
  const date = "2024-10-04T19:09:29.600Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

