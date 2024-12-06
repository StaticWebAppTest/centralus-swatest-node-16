module.exports = async function (context, req) {
  const date = "2024-12-06T08:16:48.402Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

