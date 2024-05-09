module.exports = async function (context, req) {
  const date = "2024-05-09T14:09:36.600Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

